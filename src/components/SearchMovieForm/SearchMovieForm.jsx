import { useState } from 'react';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import style from 'components/SearchMovieForm/SearchMovieForm.module.css'

export default function SearchMovieForm({ onSubmit }) {
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            return toast.warn('Введите название фильма!', {
                theme: 'colored',
            });
        }
     
        onSubmit(query);
        setQuery('');
    }

    const handleQueryChange = e => {
        setQuery(e.target.value.toLowerCase());
    }
    return (
        <div className={style.searchbar}>
            <form onSubmit={handleSubmit} className={style.searchForm}>
                <button type="submit" className={style.searchForm__button}>
                    <span className={style.searchForm__button__label}>Search</span>
                </button>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={query}
                    onChange={handleQueryChange}
                    className={style.searchForm__input}></input>
            </form>
        </div>
    )
}
SearchMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}