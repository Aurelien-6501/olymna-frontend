export type Produit = {
  id: number;
  documentId: string;
  nom: string;
  prix: number;
  description: string;
  photo:
    | {
        id: number;
        url: string;
        formats?: {
          thumbnail?: { url: string };
          small?: { url: string };
          medium?: { url: string };
          large?: { url: string };
        };
      }[]
    | null;
};
