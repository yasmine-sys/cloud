import { Enfants } from './enfants';
import { Events } from './events';

export class Reservations {
  id!: number;
  dateReservation!: Date;
  enfant!: Enfants;
  event!: Events;
  isValide!: boolean;
}
