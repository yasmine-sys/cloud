import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Models/events';
import { Rating } from 'src/app/Models/rating';
import { EventService } from 'src/app/Services/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  alert: boolean = false;
  listEvents: any;
  form: boolean = false;
  event: Events = new Events();
  rating: Rating = new Rating();
  closeResult!: string;
  ratevalue!: number;

  constructor(private service: EventService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.service.getAllEvents().subscribe(
      (data) => {
        this.listEvents = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllEvents() {
    this.service.getAllEvents().subscribe((data) => (this.listEvents = data));
  }

  addEvent() {
    console.log(this.event);
    //this.event.user=1
    this.service.addEvent(this.event).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }
  addRating(evnt: number) {
    console.log(this.rating);
    console.log(this.ratevalue);
    //this.event.user=1
    this.service.addRatingEvent(evnt, Number(this.ratevalue)).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
    //this.alert=true;
  }

  addEventbyUser(e: any) {
    let user = 1;
    this.service.addEventbyUser(e, user).subscribe(() => {
    //  this.getAllEvents();
      this.form = false;
    });
  }
  editEvent(event: Events) {
    this.service.editEvent(event).subscribe();
  }
  deleteEvent(id: Events) {
    this.service.deleteEvent(id).subscribe(() => this.getAllEvents());
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
          this.closeResult = `Dismissed ${this.getAllEvents()}`;
        }
      );
  }
  open2(content2: any) {
    this.modalService
      .open(content2, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        () => {
          this.closeResult = `Dismissed ${this.getAllEvents()}`;
        }
      );
  }

  closeForm() {}
  cancel() {
    this.form = false;
  }
}
