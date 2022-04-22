import { Component, OnInit } from '@angular/core';
import { Publicite } from 'src/models/publicite';
import { PubliciteService } from 'src/service/publicite-service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



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

  constructor(private publiciteService : PubliciteService, private modalService: NgbModal) { }

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
open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
