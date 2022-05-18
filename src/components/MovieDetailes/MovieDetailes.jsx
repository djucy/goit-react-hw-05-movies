// import { useLocation, useNavigate } from "react-router-dom";
import style from './MovieDetailes.module.css';



export default function MovieDetails({ movie }) {
   

 
    return (
         <>
         
            <article key={movie.id} className={style.article}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className={style.image }></img>
                <div className={style.description }>
                    <h2>{movie.title}</h2>
                    <p>Vote average:{ movie.vote_average}</p>
            <h3>Overview</h3>
            <p className={style.description__text }>{ movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres && movie.genres.map(({ id, name }) => (
                <li id={id}>{name}</li>
            ))}
                </p>
            </div>
               



</article> </>
    )
}
