export interface Article {
  id: number;
  documentId: string;
  titre: string;
  contenu: string;
  image: { url: string }[];
  date_publication: string;
}
