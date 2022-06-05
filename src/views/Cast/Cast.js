import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
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
                < ul className={style.list} > {cast.map(({ profile_path, name, character }) => (
                    <li key={name} className={style.item}>
                        <img src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}` : "https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png"} className={style.image} alt={name} />
                        <p className={style.name}>{name}</p>
                        <p>Character:{character}</p>

                    </li>))}
                </ul >)}
        </>
    )
}

Cast.propTypes = {
    cast: PropTypes.shape({
        profile_path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    }),
}

