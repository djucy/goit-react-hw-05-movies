import { useState,useEffect } from 'react';
import * as Api from '../../service/api-fetch.js';
import FilmList from '../../components/FilmList/FilmList';
import Button from 'components/Button/Button'
import { Outlet } from 'react-router';




export default function HomePage() {
    const [filmes, setFilmes] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        return Api.fetchGetFilms(page)
            // .then(response => response.results)
            // .then(setFilmes)
            .then(newArrayFilmes => {
                setFilmes(state => [...state, ...newArrayFilmes]);
                setPage(page);
            })
        
    }, [page]);
    const downloadMoreFilmes = () => {
     setPage(state=> state+1)   
    }
   return (
      <>
     {/* <Outlet/> */}
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