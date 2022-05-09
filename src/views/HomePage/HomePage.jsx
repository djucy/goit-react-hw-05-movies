import { useState,useEffect } from 'react';
import * as Api from '../../service/api-fetch.js';
import FilmList from '../../components/FilmList/FilmList';




export default function HomePage() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        return Api.fetchGetFilms()
            // .then(response => response.results)
            // .then(setFilmes)
            .then(newArrayFilmes => {
                setFilmes(state => [...state, ...newArrayFilmes]);
            })
        
    }, []);

   return (
      <>
     
           {filmes && <FilmList filmes={filmes} ></FilmList>} 
          
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