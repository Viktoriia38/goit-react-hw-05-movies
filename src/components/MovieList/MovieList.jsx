import { NavLink, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.homePageList}>
      {movies &&
        movies.map(item => (
          <li className={css.homePageItem} key={item.id}>
            <NavLink
              state={{ from: location }}
              to={`/movies/${item.id}`}
              id={item.id}
            >
              {item.name} {item.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: propTypes.array.isRequired,
};
