// import { useLocation, useNavigate } from "react-router-dom";
import style from './MovieDetailes.module.css';
import PropTypes from 'prop-types';



export default function MovieDetails({ movie }) {
   

 
    return (
    <>
         
         <article key={movie.id} className={style.article}>
            <img src={movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:"https://cdn.pixabay.com/photo/2021/11/27/18/14/charlie-chaplin-6828680_960_720.jpg"} alt={movie.title} className={style.image }></img>
            <div className={style.description }>
                    <h2>{movie.title}</h2>
                    <p>Vote average:{ movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p className={style.description__text }>{ movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres && movie.genres.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                    </p>
            </div>
            </article>
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