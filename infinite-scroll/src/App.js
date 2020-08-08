import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

export default function App() {
  const [query, setQuery] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    console.log(node);
  });

  function handleSearch(event) {
    setQuery(event.target.value);
    setPageNumber(1);
  }

  const { books, hasMore, loading, error, } = useBookSearch(query, pageNumber);

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && 'Loading..'}</div>
      <div>{error && 'Error'}</div>
    </>
  );
}