import React from "react";
import "./BookCard.css";

export default function BookCard({ book }) {
  const thumbnail = book.imageLinks?.thumbnail || "https://via.placeholder.com/150x220?text=No+Image";

  return (
    <div className="book-card">
      <div className="image-container">
        <img src={thumbnail} alt={book.title || "Book cover"} />
      </div>
      <h3>{book.title || "Untitled"}</h3>
    </div>
  );
}
