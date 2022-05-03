import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliciteComponent } from './publicite/publicite.component';
import { ChariteComponent } from './charite/charite.component';

const routes: Routes =[
  { path: 'home',  component: PubliciteComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

const routechar: Routes = [
  { path: 'charite', component: ChariteComponent },
  { path: '', redirectTo: '/charite', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes),(routechar)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
