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
