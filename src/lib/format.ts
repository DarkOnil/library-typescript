import type { Book, Library } from "../types.js";


export const formatBook = (book: Book): string =>
  `${book.title} — ${
    book.rating !== undefined ? book.rating : "без рейтинга"
  }`;

export const formatLibrary = (library: Library): string[] =>
  library.books.map(formatBook);
