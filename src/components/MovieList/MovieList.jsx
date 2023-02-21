import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <ul className={css.homePageList}>
      {movies &&
        movies.map(item => (
          <li className={css.homePageItem} key={item.id}>
            <NavLink to={`/movies/${item.id}`} id={item.id}>
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
