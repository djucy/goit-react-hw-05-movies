import { useState,useEffect } from 'react';
import * as Api from '../../service/api-fetch.js';
import FilmList from '../../components/FilmList/FilmList';
import Button from 'components/Button/Button'





export default function HomePage() {
    const [filmes, setFilmes] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        return Api.fetchGetFilms(page)
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
   
           {filmes && <FilmList filmes={filmes} ></FilmList>} 
           <Button onLoadMore={downloadMoreFilmes}></Button>
           
           </>
     )
 }
