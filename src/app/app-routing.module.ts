import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { RouteGuardsGuard } from './core/guards/route-guards.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [RoleGuardGuard, RouteGuardsGuard],
    data: { role: ['admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
