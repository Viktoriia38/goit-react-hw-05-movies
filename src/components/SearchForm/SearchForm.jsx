import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './SearchForm.module.css';

function SearchForm({ handleSubmit }) {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');

  const [name, setName] = useState(searchName ?? '');
  console.log(name);

  //   // console.log(name);

  const handleInput = e => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit(name);
    reset();
    // console.log('Hello');
  };

  const reset = () => {
    setName('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.searchForm}>
      <label htmlFor="">
        <input
          onChange={handleInput}
          className={css.searchQuery}
          type="text"
          name={name}
          value={name || ''}
          placeholder="Search movie..."
        />
      </label>
      <button type="submit" className={css.searchButton}>
        <span className={css.buttonName}>Search</span>
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};

export default SearchForm;
