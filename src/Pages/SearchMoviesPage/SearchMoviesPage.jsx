import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovieFetch } from 'services/movies';

function SearchMoviesPage() {
  const [searchMovies, searchsearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [status, setStatus] = useState('idle');

  const handleNameSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (searchQuery === null) return;
    async function takeFilms() {
      setStatus('loading');

      try {
        const response = await searchMovieFetch(searchQuery);
        searchsearchMovies([...response]);
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      }
    }
    takeFilms();
  }, [searchQuery]);

  return (
    <>
      {status === 'loading' && <Loader />}
      <SearchForm handleSubmit={handleNameSubmit} />
      <MovieList movies={searchMovies} />
    </>
  );
}

export default SearchMoviesPage;
