import { useState, useEffect } from 'react';
import SearchMovieForm from '../../components/SearchMovieForm/SearchMovieForm';
import * as Api from '../../service/api-fetch';
import FilmList from '../../components/FilmList/FilmList';
import Button from '../../components/Button/Button';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const onSearchMovie = query => setQuery(query);

    useEffect(() => {
        if (query === '') {
            return;
         }
        setMovies([]);
     Api.fetchGetMovie(query,page)
        .then(newArrayMovies => {
            setMovies(state => [...state, ...newArrayMovies]);
            // setPage(page)
        })
    
}, [query,page])
    
    const downloadMore = () => {
        console.log('tap')
        setPage(page=>page+1)
     }
//      useEffect(() => {
//     if (searchName === '') {
//       return
//      }
//     setStatus(Status.PENDING);
//     setImages([]);
//    getImages();
//     scroll.scrollToTop();
   
//   }, [searchName]);

    return (
<>
         
            <SearchMovieForm onSubmit={onSearchMovie}></SearchMovieForm>
            {movies && <FilmList filmes={movies}></FilmList>}
            {movies.length === 20 && <Button onLoadMore={downloadMore}/>}
</>
    )





 }