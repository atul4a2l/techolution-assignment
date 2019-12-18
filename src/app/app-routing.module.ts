import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ResultComponent} from './result/result.component'
import {RegistrationComponent} from './registration/registration.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'result'},
  { path: 'result', component: ResultComponent },
  { path: 'registration', component: RegistrationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
