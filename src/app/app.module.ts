import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from'@angular/common/http';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    EnfantComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    NgbRatingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
