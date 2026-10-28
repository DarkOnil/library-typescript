type Book = { title: string; rating?: number; };

type Library = { books: Book[]};

const addBook = (library: Library, book: Book): Library => {
  return {
    books: [...library.books, book]
  };
};

const getAverageRating = (books: Book[]): number => {
  let sum = 0;
  let count = 0;

  books.forEach((book) => {
    if (book.rating !== undefined) {
      sum += book.rating;
      count++;
    }
  });

  if (count === 0) {
    return 0;
  }
  
  return sum / count;
};

const App = () => {
  const library: Library = {
    books: [
      { title: "Гарри Поттер", rating: 4.9 },
      { title: "Дюна", rating: 4.5},
      { title: "Песнь льда и пламени"}
    ]
  };

  const newLibrary = addBook(
    addBook(library, {
    title: "Преступление и наказание", 
    rating: 4.7
    }),
    {
    title: "Властелин колец",
    rating: 5,
  });

  return (
    <div>
      <h1>Моя библеотека</h1>
      <p>Количество книг: {newLibrary.books.length}</p>
      <p>Средний рейтинг: {getAverageRating(newLibrary.books).toFixed(1)}</p>
    </div>
  );
};

export default App
