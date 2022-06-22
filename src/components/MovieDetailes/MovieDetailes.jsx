import { useLocation, NavLink } from 'react-router-dom';
import { BackButton } from '../Button/ButtonBack';
import style from './MovieDetailes.module.css';
import PropTypes from 'prop-types';
import s from '../../views/MovieDetailsPage/MovieDetailsPage.module.css'



export default function MovieDetails({ movie }) {

const location = useLocation();



    
   
    return (
        <>
             <BackButton/>
            <article key={movie.id} className={style.article}>
         
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://cdn.pixabay.com/photo/2021/11/27/18/14/charlie-chaplin-6828680_960_720.jpg"} alt={movie.title} className={style.image}></img>
                <div className={style.description}>
                    <h2>{movie.title}</h2>
                    <p>Vote average:{movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p className={style.description__text}>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres && movie.genres.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                    </p>
                </div>
                
            </article>
            <NavLink to="cast" state={ location.state }
                className={({ isActive }) => isActive ? s.linkActive : s.link}>Cast </NavLink>
            <NavLink to="reviews"
                state={ location.state }
                className={({ isActive }) => isActive ? s.linkActive : s.link}>Reviews</NavLink>
        </>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.object),
    })


}