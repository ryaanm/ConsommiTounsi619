import { Component, NgModule, OnInit } from '@angular/core';
import { Charite } from 'src/models/charite';
import { ChariteService } from 'src/service/charite-service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-charite',
  templateUrl: './charite.component.html',
  styleUrls: ['./charite.component.css']
})


/*@NgModule({
  imports: [
             BrowserModule,
     
             FormsModule      //<----------make sure you have added this.
           ]
})*/



export class ChariteComponent implements OnInit {
  listCharite : Charite[];
  form : boolean = false;
  charite: Charite = new Charite();
  showCharite: boolean=true;
  AddCharite: boolean=false;
  update: boolean;
  Charr: any;
  charityTypes: string[] = ['anonymous', 'known donor', 'partner']


  constructor(private chariteService : ChariteService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.chariteService.getCharites().subscribe(res => this.listCharite = res)
  }

  showCharite1() {
    this.showCharite = true;
    this.AddCharite = false;
    this.update = false;
    console.log("qssqqs00");

  }
  showCharite2() {
    this.showCharite = false;
    this.AddCharite = true;

  }
 

  addCharite(){
    this.chariteService.addCharite(this.charite).subscribe(() => { this.chariteService.getCharites().subscribe(res => {this.listCharite =res});
      this.form = false;
       })

  }

  editCharite(charite : Charite){

    this.chariteService.modifyCharite(charite).subscribe(() => this.chariteService.getCharites().subscribe(res => { this.listCharite = res }));
    this.chariteService.getCharites;
  }

  deleteCharite(id_charite : any) {
     this.chariteService.removeCharite(id_charite).subscribe(() => {
    this.chariteService.getCharites();
     })

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
  updateInterface(id: number, charite: Charite) {
    this.update= true;
    this.showCharite = false;
    this.Charr = charite;
  }
}
