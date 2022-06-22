import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


import SearchMovieForm from '../../components/SearchMovieForm/SearchMovieForm';
import * as Api from '../../service/api-fetch';
import FilmList from '../../components/FilmList/FilmList';
import Button from '../../components/Button/Button';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return;
        }
        setMovies([]);
        Api.fetchGetMovie(query, page)
            .then(newArrayMovies => {
                setMovies(state => [...state, ...newArrayMovies]);
            
            })

    }, [query, page])

    const downloadMore = () => {
        setPage(page => page + 1)
    }
    const onSearchMovie = value => {

        setSearchParams({ query: `${value}` });

    };

    return (
        <>
            <SearchMovieForm onSubmit={onSearchMovie}></SearchMovieForm>
            {movies && <FilmList filmes={movies}></FilmList>}
            {movies.length === 20 && <Button onLoadMore={downloadMore} />}
        </>
    )





}
