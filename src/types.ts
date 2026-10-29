export type Book = {
  title: string;
  rating?: number;
};

export type Library = {
  books: Book[];
};
