import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchMovieForm({onSubmit }) {
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
        console.log("movie");
    }

    const handleQueryChange=e => {
        setQuery(e.target.value.toLowerCase());
    }
    return (
        <form onSubmit={handleSubmit }>
            <input 
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
                value={ query}
            onChange={handleQueryChange}></input>
            <button type="submit">GO!</button>

</form>




    )






 }