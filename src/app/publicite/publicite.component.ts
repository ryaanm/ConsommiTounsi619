import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Publicite } from 'src/models/publicite';
import { PubliciteService } from 'src/service/publicite-service';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit {
  listPublicite : any;
  form : boolean = false;
  publicite !: Publicite;
  closeResult !: string;

  constructor(private publiciteService : PubliciteService) { }

  ngOnInit(): void {
    this.publiciteService.getPublicites();
    this.publicite = {
      idPublicite: null,
      nom: null,
      dateDebut : null,
      dateFin : null,
      image : null
    }
    this.publiciteService.getPublicites().subscribe(res => this.listPublicite = res)

  }
  addPublicite(p : any){
    this.publiciteService.addPublicite(p).subscribe(() => {
      this.publiciteService.getPublicites();
      this.form = false;
       })

  }
  editPublicite(publicite : Publicite){
    this.publiciteService.modifyPublicite(publicite).subscribe()
  }
  deletePublicite(idPublicite : any) {
     this.publiciteService.removePublicite(idPublicite).subscribe(() => {
    this.publiciteService.getPublicites();
     })

}
}
