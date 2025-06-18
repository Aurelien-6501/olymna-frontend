import { Coach } from "@/types/coach";

export type Coaching = {
  id: number;
  titre: string;
  description: string;
  date_heure: string;
  salle: string;
  nb_places: number;
  coach: Coach | null;
  documentId: string;
};
