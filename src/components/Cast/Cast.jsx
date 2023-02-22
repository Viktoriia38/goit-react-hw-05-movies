import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castMovieFetch } from 'services/movies';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

function Cast() {
  const [movieById, setMovieById] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function takeFilms() {
      setStatus('loading');

      try {
        const response = await castMovieFetch(movieId);
        setMovieById([...response.cast]);
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      }
    }
    takeFilms();
  }, [movieId]);

  return (
    <div>
      {status === 'loading' && <Loader />}
      <div className={css.cast}>
        <ul className={css.castList}>
          {movieById &&
            movieById.map(item => (
              <li className={css.castItem} key={item.id}>
                {Boolean(item.profile_path) && (
                  <img
                    className={css.castImage}
                    src={'https://image.tmdb.org/t/p/w500/' + item.profile_path}
                    alt=""
                  />
                )}
                <h3 className={css.castName}>{item.name}</h3>
                <p className={css.castCharacter}>
                  Character <span>{item.character} </span>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Cast;
