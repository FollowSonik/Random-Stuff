import React, { useState } from 'react';
import useBookSearch from './useBookSearch';

export default function App() {
  const [query, setQuery] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(event) {
    setQuery(event.target.value);
    setPageNumber(1);
  }

  const { books, hasMore, loading, error, } = useBookSearch(query, pageNumber);

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      {books.map(book => {
        return <div key={book}>{book}</div>
      })}
      <div>{loading && 'Loading..'}</div>
      <div>{error && 'Error'}</div>
    </>
  );
}