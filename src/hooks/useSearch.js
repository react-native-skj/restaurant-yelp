import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    performSearch('pasta');
  }, []);

  const performSearch = async (term) => {
    try {
      const { data } = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'Beaverton, OR',
        },
      });
      setResults(data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong!');
    }
  };

  return [performSearch, results, errorMessage];
};
