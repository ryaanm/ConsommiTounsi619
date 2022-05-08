import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
   
    class: string;
}


export const ROUTES: RouteInfo[] = [
  { path: '/addPublicite', title: 'Ajouter Publicite', class: '' },
  { path: '/Publicite', title: 'Afficher Publicite', class: '' },





];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
