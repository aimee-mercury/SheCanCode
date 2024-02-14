// SearchResultsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className='modal-overlay'>
      {searchResults.map((book) => (
        <div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>Author(s): {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
          <p>Published Date: {book.volumeInfo.publishedDate || 'Unknown'}</p>
          <Link to={`/book/${book.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
