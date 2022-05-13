import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Reservations } from 'src/app/Models/reservations';
import { ReservationService } from 'src/app/Services/reservation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnfantService } from 'src/app/Services/enfant.service';
import { EventService } from 'src/app/Services/event.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  alert: boolean = false;
  state$: Observable<object>;
  listReservations: any;
  listEnfant: any;
  listEvent: any;
  dateres: Date;
  form: boolean = false;
  reservation: Reservations = new Reservations();
  closeResult!: string;
  constructor(
    
    public activatedRoute: ActivatedRoute,
    private service: ReservationService,
    private modalService: NgbModal,
    private enfantService: EnfantService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.enfantService.getAllEnfants().subscribe(
      (data) => {
        this.listEnfant = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.listEvent = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllEvents() {
    this.service
      .getAllEvents()
      .subscribe((data) => (this.listReservations = data));
  }

  addReservation(idenfant: any, idevent: any, dateres: Date) {
    //this.event.user=1

    console.log(Number(idenfant) + '------' + Number(idevent));
    console.log(this.listEnfant);
    console.log(this.reservation);
    console.log(dateres);
    this.reservation.dateReservation = dateres;
    this.service
      .addReservation(this.reservation, Number(idenfant), Number(idevent)).subscribe((data) => {
        console.log(data);
        this.service.pdf(data).subscribe();
        this.alert=true;
      })
  }
  closeAlert(){
    this.alert=false;
  }
  addEventbyUser(e: any) {
    let user = 1;
    this.service.addEventbyUser(e, user).subscribe(() => {
      //this.getAllEvents();
      this.form = false;
    });
  }
  pdf(reservation: any) {
    this.service.pdf(reservation).subscribe();
  
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

  closeForm() {}
  cancel() {
    this.form = false;
  }
}
