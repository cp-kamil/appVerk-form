import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-external/container/login.component';
import { IsSignedInGuard } from './login-external/service/isSignedInGuard.guard';
import { IsNotSignedInGuard } from './login-external/service/isNotSignedInGuard.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate: [IsNotSignedInGuard],
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [IsSignedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
