export type Article = {
  id: number;
  documentId: string;
  titre: string;
  contenu: string;
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
  date_publication: string;
};
