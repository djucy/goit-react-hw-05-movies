import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as Api from '../../service/api-fetch';
import style from './Cast.module.css';




export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([])

    useEffect(() => {
   

        Api.getMovieCast(movieId)
            .then(setCast)
    }, [movieId])
   
    return (
        <>
            {cast && (
                < ul > {cast.map(({ profile_path, name, character }) => (
    <li key={name}>
                        <img src={`https://image.tmdb.org/t/p/original${profile_path}`} className={ style.image} />
        <p>{name}</p>
        <p>Character:{character}</p>

    </li>))}
        </ul >)}
       </> 
    )
 }