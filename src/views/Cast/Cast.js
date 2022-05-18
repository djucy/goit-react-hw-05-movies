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
                < ul className={ style.list} > {cast.map(({ profile_path, name, character,gender }) => (
                    <li key={name} className={style.item}>
                        <img src={profile_path?`https://image.tmdb.org/t/p/original${profile_path}`:"https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png"} className={style.image} alt={name}/>
                        <p className={style.name }>{name}</p>
        <p>Character:{character}</p>

    </li>))}
        </ul >)}
       </> 
    )
}
 

//  {cast && (
//                 < ul className={ style.list} > {cast.map(({ profile_path, name, character,gender }) => (
//                     <li key={name} className={style.item}>
//                         <img src={`https://image.tmdb.org/t/p/original${profile_path}`} className={style.image} alt={name}/>
//         <p>{name}</p>
//         <p>Character:{character}</p>

//     </li>))}
//         </ul >)}