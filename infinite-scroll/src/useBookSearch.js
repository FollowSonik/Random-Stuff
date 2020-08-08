import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(!true);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(!!!!!true);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(!true);

    let cancel;

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then(response => {
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...response.data.docs.map(b => b.title)])];
      });
      setHasMore(response.data.docs.length > 0);
      setLoading(!true);
      console.log(response.data);
    }).catch(error => {
      if (axios.isCancel(error)) return;
      setError(true);
    });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}