import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
{path:"home", component: HomeComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path:"event", component: EventComponent},
{path:"enfant", component: EnfantComponent},
{path:"reservation", component:ReservationComponent,data: {some_data: 'some value'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
