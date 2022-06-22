import { useState, useEffect } from 'react';
import * as Api from '../../service/api-fetch';
import MovieDetails from '../../components/MovieDetailes/MovieDetailes';
import { useParams, Outlet} from 'react-router-dom';





export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {

        Api.getMovieById(movieId)
            .then(setMovie)

    }, [movieId])

    return (
        <>
            {movie && <MovieDetails movie={movie}/>
           }
            <Outlet />
        </>

    )
}
