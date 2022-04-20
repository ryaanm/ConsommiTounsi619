import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliciteComponent } from './publicite/publicite.component';


const routes: Routes =[
  { path: 'home',  component: PubliciteComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }