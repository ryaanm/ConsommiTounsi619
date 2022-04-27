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
  listPublicite : Publicite[];
  form : boolean = false;
  closeResult !: string;
  publicite: Publicite = new Publicite();
  showPublicite: boolean;
  AddPublicite: boolean;
  update: boolean;
  Pubb: any;


  constructor(private publiciteService : PubliciteService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.publicite = {
      idPublicite: null,
      nom: null,
      description : null,
      dateDebut : null,
      dateFin : null,
      image : null,
      nbreVueInitial: null,
      nbreVueFinal: null,
      numPropPublicite: null,
      prixPublicite: null,
      typePublicite: null,
      cible : null,
      canal : null

    }
    this.publiciteService.getPublicites().subscribe(res => this.listPublicite = res)

  }
  showPublicite1() {
    this.showPublicite = true;
    this.AddPublicite = false;
    this.update = false;

  }
  showPublicite2() {
    this.showPublicite = false;
    this.AddPublicite = true;

  }
 

  addPublicite(p : any){
    this.publiciteService.addPublicite(p).subscribe(() => { this.publiciteService.getPublicites().subscribe(res => {this.listPublicite =res});
      this.form = false;
       })

  }

  editPublicite(publicite : Publicite){

    this.publiciteService.modifyPublicite(publicite).subscribe(() => this.publiciteService.getPublicites().subscribe(res => { this.listPublicite = res }));
    this.publiciteService.getPublicites;
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
  updateInterface(id: number, publicite: Publicite) {
    this.update= true;
    this.showPublicite = false;
    this.Pubb = publicite;
  }
}
