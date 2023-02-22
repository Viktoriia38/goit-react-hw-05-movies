import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewMovieFetch } from 'services/movies';
import { Loader } from 'components/Loader/Loader';
import css from './Review.module.css';

function Review() {
  const [reviewsById, setReviewsById] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function takeFilms() {
      setStatus('loading');

      try {
        const response = await reviewMovieFetch(movieId);
        setReviewsById([...response]);
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      }
    }
    takeFilms();
  }, [movieId]);

  return [...reviewsById].length > 0 ? (
    <div className={css.review}>
      {status === 'loading' && <Loader />}
      <ul className={css.reviewList}>
        {reviewsById.map(item => (
          <li className={css.reviewItem} key={item.id}>
            <h3 className={css.reviewAuthor}>Author: {item.author}</h3>
            <p className={css.reviewContent}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h2>We don`t have any reviews for this movie.</h2>
  );
}

export default Review;
