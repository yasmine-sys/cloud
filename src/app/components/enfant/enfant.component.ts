import { Component, OnInit } from '@angular/core';
import { Enfants } from 'src/app/Models/enfants';
import { EnfantService } from 'src/app/Services/enfant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent implements OnInit {
  listEnfants: any;
  form: boolean = false;
  enfant: Enfants = new Enfants();
  closeResult!: string;
  constructor(private service: EnfantService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.service.getAllEnfants().subscribe(
      (data) => {
        this.listEnfants = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllEnfants() {
    this.service.getAllEnfants().subscribe((data) => (this.listEnfants = data));
  }

  addEnfant(e: any) {
    //this.event.user=1
    this.service.addEnfant(e).subscribe(() => {
      //this.getAllEvents();
      this.form = false;
    });
  }

  addEnfantbyUser(e: any) {
    let user = 1;
    this.service.addEnfantbyUser(e, user).subscribe(() => {
      //this.getAllEvents();
      this.form = false;
    });
  }
  editEnfant(enfant: Enfants) {
    this.service.editEnfant(event).subscribe();
  }
  deleteEnfant(id: Enfants) {
    this.service.deleteEnfant(id).subscribe(() => this.getAllEnfants());
    //this.productService.deleteProduct(idProduct).subscribe(() => this.getAllProducts())
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        () => {
          this.closeResult = `Dismissed ${this.getAllEnfants()}`;
        }
      );
  }

  closeForm() {}
  cancel() {
    this.form = false;
  }
}
