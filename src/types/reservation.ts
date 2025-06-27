export interface Reservation {
  id: number;
  coaching: {
    titre: string;
    date_heure: string;
    salle: string;
  };
}
