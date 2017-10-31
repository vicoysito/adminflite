import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';
import { SecureModuleService } from '../secure-module.service';

//https://medium.com/codingthesmartway-com-blog/angular-2-routing-with-modules-dd9e25bdd651
const routes: Routes = [
  /*{ path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },*/
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:['SecureModuleService'] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes on)],
    )],
  exports: [RouterModule],
  providers: [SecureModuleService],

})
export class RouteRoutingModule { }

export const routingComponents = [AdminComponent,LoginComponent];

/*
import { NgModule } from ‘@angular/core’;
 import { Routes, RouterModule } from ‘@angular/router’;
 import { FirstComponent } from ‘./first.component’;
 import { SecondComponent } from ‘./second.component’;
 import { ThirdComponent } from ‘./third.component’;

 const routes: Routes = [
   { path: ‘’, pathMatch: ‘full’, redirectTo: ‘first’ },
   { path: ‘first’, component: FirstComponent },
   { path: ‘second’, component: SecondComponent },
   { path: ‘third’, component: ThirdComponent },
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

 export const routingComponents = [FirstComponent, SecondComponent, ThirdComponent];
*/
