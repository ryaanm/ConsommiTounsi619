import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPubliciteComponent } from './add-publicite/add-publicite.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { ChariteComponent } from './charite/charite.component';

const routes: Routes =[
  { path: 'home',  component: PubliciteComponent },
  { path: 'addPublicite',  component: AddPubliciteComponent },
  { path: 'Publicite',  component: PubliciteComponent },
  { path: 'charite', component: ChariteComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }