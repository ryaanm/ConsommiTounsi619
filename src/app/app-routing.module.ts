import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPubliciteComponent } from './add-publicite/add-publicite.component';
import { PubliciteComponent } from './publicite/publicite.component';


const routes: Routes =[
  { path: 'home',  component: AddPubliciteComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }