export type Coach = {
  id: number;
  documentId: string;
  prenom: string;
  nom: string;
  specialisation: string;
  bio: string;
  photo: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  } | null;
};

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

export type Produit = {
  id: number;
  nom: string;
  prix: number;
  description: string;
  photo: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  } | null;
};
