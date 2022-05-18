import { useState,useEffect } from 'react';
import * as Api from '../../service/api-fetch.js';
import FilmList from '../../components/FilmList/FilmList';
import Button from 'components/Button/Button'




export default function HomePage() {
    const [filmes, setFilmes] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        return Api.fetchGetFilms(page,filmes)
            // .then(response => response.results)
            // .then(setFilmes)
            .then(newArrayFilmes => {
                setFilmes(state => [...state, ...newArrayFilmes]);
            })
        
    }, [page]);
    const downloadMoreFilmes = () => {
     setPage(state=> state+1)   
    }
   return (
      <>
     
           {filmes && <FilmList filmes={filmes} ></FilmList>} 
           <Button onLoadMore={downloadMoreFilmes}></Button>
           </>
     )
 }
// export default function HomePage() {
//     const [films, setFilms] = useState([]);

//   useEffect(() => {
//     return API.fetchTrending()
//       .then((response) => [...films, ...response.results])
//       .then(setFilms);
//   }, []);
//     return (
//         <h1>Hello</h1>
//     )
// }
// image = { filmes.backdrop_path } title = { filmes.title } id = { filmes.id }