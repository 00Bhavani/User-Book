import React, { useState } from "react";
import "./App.css";
import BookCard from "./components/BookCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    if (!query) return;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await response.json();
    setBooks(data.items || []);
  };

  return (
    <div className="app">
      <header>
        <h1>📚 Book Finder</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchBooks}>Search</button>
        </div>
      </header>
      <main className="book-grid">
        {books.length === 0 ? (
          <div className="no-books">No such book found</div>
        ) : (
          books.map((book) => (
            <BookCard key={book.id} book={book.volumeInfo} />
          ))
        )}
      </main>
    </div>
  );
}
