import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  IssueArr: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public authService: AuthService
  ) {}

  submitForm() {
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });
  }
}
