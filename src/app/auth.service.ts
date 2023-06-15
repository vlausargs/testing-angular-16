import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Auth } from './dto/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authResponse: Auth | null = null;

  // Base url
  baseurl = 'http://localhost:8090/api/v1';

  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('auth')!);
    return user !== 'null' ? true : false;
  }

  public set authResponse(result: Auth | null) {
    this._authResponse = result;
    if (result != null)
      localStorage.setItem('auth', JSON.stringify({ ...result }));
    else localStorage.removeItem('auth');
  }

  public get authResponse(): any {
    if (this._authResponse == null) {
      const data = localStorage.getItem('auth') || '';
      this._authResponse = JSON.parse(data);
    }
    return this._authResponse;
  }

  parseJwt(token: any): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  login(data: any): Observable<Auth> {
    return this.http
      .post<Auth>(
        this.baseurl + '/auth/authenticate',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
