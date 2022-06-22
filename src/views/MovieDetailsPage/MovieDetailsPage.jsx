import { useState, useEffect } from 'react';
import * as Api from '../../service/api-fetch';
import MovieDetails from '../../components/MovieDetailes/MovieDetailes';
import { useParams, Outlet} from 'react-router-dom';
// import style from '../MovieDetailsPage/MovieDetailsPage.module.css'




export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    // let navigate = useNavigate();
    // const location = useLocation();
    //   const [searchParams, setSearchParams] = useSearchParams();
    // const query = searchParams.get('query');



    useEffect(() => {

        Api.getMovieById(movieId)
            .then(setMovie)

    }, [movieId])

    
//  const onBackPreviousPage = () => {
//         navigate(location?.state?.from ?? '/');
//     }
    return (
        <>
{/* <button type="button" onClick={onBackPreviousPage} className={style.button}>Back</button> */}
            
            {movie && <MovieDetails movie={movie}>


            </MovieDetails>}
            {/* <NavLink to={`cast`}
                 state={{
                            from: console.log(location),
                        }}
                className={({ isActive }) => isActive ? style.linkActive : style.link}>Cast </NavLink>
            <NavLink to={`reviews`}
                state={{
                            from: console.log(location),
                        }}
                className={({ isActive }) => isActive ? style.linkActive : style.link}>Reviews</NavLink> */}
            <Outlet />
        </>

    )
}
