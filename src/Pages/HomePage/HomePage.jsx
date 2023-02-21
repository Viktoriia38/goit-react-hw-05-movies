import { useState, useEffect } from 'react';
import { trendingMovieFetch } from 'services/movies';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import css from './HomePage.module.css';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function takeFilms() {
      setStatus('loading');

      try {
        const response = await trendingMovieFetch();
        setTrendingMovies([...response]);
        console.log(response);
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      }
    }
    takeFilms();
  }, []);

  return (
    <div className={css.homePage}>
      {status === 'loading' && <Loader />}
      <h1 className={css.homePageTitle}>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
export default HomePage;
