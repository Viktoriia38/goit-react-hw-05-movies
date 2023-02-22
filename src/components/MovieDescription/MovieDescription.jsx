import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useParams, useLocation, Link } from 'react-router-dom';
import { descriptionMovieFetch } from 'services/movies';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDescription.module.css';

function MovieDescription() {
  const [movieById, setMovieById] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function takeFilms() {
      setStatus('loading');
      try {
        const response = await descriptionMovieFetch(movieId);
        setMovieById({ ...response });
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      }
    }
    takeFilms();
  }, [movieId]);

  return (
    <>
      <div className={css.descriptionLink}>
        <Link to={location.state?.from ?? '/'}>Go back</Link>
      </div>
      <div className={css.description}>
        {status === 'loading' && <Loader />}

        <div className={css.descriptionPoster}>
          {Boolean(movieById.poster_path) && (
            <img
              className={css.descriptionPosterImage}
              src={'https://image.tmdb.org/t/p/w500/' + movieById.poster_path}
              alt=""
            />
          )}
        </div>
        <div className={css.descriptionText}>
          <h1 className={css.descriptionTitle}>
            {movieById.title}
            <span> {movieById.release_date}</span>
          </h1>
          <p>
            User score: <span>{movieById.vote_average}</span>
          </p>
          <h2>Overview</h2>
          <p>{movieById.overview}</p>
          <h2>Genres</h2>
          {movieById.genres && movieById.genres.map(genre => `${genre.name} `)}
        </div>
      </div>
      <div className={css.extraDescription}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Review</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default MovieDescription;
