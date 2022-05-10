import { Component, OnInit } from '@angular/core';
import { Publicite } from 'src/models/publicite';
import { PubliciteService } from 'src/service/publicite-service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-publicite',
  templateUrl: './add-publicite.component.html',
  styleUrls: ['./add-publicite.component.css']
})
export class AddPubliciteComponent implements OnInit {
  listPublicites : any; 
  form : boolean = false;
   publicite!: Publicite;
   closeResult! : string;
   SearchVal : string = '';
  constructor(private publiciteService : PubliciteService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.getAllPublicites();;

    this.publicite = {
      idPublicite: null,
      nom: null,
      description : null,
      dateDebut : null,
      dateFin : null,
      image : null,
      nbreVueInitial: 0,
      nbreVueFinal: null,
      numPropPublicite: null,
      prixPublicite: null,
      typePublicite: null,
      cible : null,
      canal : null

    }
  }
  setPrixPublicite(canal : any, dateDebut:any , dateFin:any , prixPublicite:any){
    this.publiciteService.totalCost(canal,dateDebut,dateFin,prixPublicite).subscribe(res => this.listPublicites = res)
  }
  getAllPublicites(){
    this.publiciteService.getPublicites().subscribe(res => this.listPublicites = res)
  }
  addPublicite(p: any){
    this.publiciteService.addPublicite(p).subscribe(() => {
      this.getAllPublicites();
      this.form = false;
    });
  }

  editPublicite(p : Publicite){
    console.log(p)
    this.publiciteService.modifyPublicite(p).subscribe(() => {
      this.getAllPublicites();
      this.form = false;
    });
  }
  deletePublicite(idPublicite : any){
    this.publiciteService.removePublicite(idPublicite).subscribe(() => this.getAllPublicites())
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

  Search() {
    if (this.SearchVal === '') {
      this.getAllPublicites();
    } else {
      this.publiciteService.searchPubliciteByName(this.SearchVal).subscribe((res) => {
        this.listPublicites = res;
      });
    }
  }

}
