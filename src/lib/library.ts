import type { Book, Library } from "../types.js";

export const addBook = (library: Library, book: Book): Library => ({
  books: [...library.books, book],
});

export const getAverageRating = (books: Book[]): number => {
  let sum = 0;
  let count = 0;

  books.forEach((book) => {
    if (book.rating !== undefined) {
      sum += book.rating;
      count += 1;
    }
  });

  return count === 0 ? 0 : sum / count;
};
