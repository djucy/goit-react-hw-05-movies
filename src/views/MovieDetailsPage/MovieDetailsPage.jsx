import {useState, useEffect } from 'react';
import * as Api from '../../service/api-fetch';
import MovieDetails from '../../components/MovieDetailes/MovieDetailes';
import { NavLink, useParams,Outlet, useLocation, useNavigate } from 'react-router-dom';


// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
      let navigate = useNavigate();
    const location = useLocation();
    // const history = useHistory();
    // console.log(history);

    console.log(location.state);
   
    

    useEffect(() => {
        
        Api.getMovieById(movieId)
            .then(setMovie)
            
    }, [movieId])

       const onBackPreviousPage = () => {
        // navigate("/", { replace: true });
           if (window.history.state && window.history.state.idx > 0) {
    navigate(-1);
} else {
    navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
}
       }
    
    return (
        <>
            <h2>WoW</h2>
           <button type="button" onClick={onBackPreviousPage}>Back</button>
            {movie && <MovieDetails movie={movie}>


            </MovieDetails>}
            <NavLink to={`/movies/${movieId}/cast`}>Cast </NavLink>
            <NavLink to={`reviews`}>Reviews</NavLink> 
        <Outlet />
        </>
       
    )
}
// /movies/${ movieId } /

// import { useNavigate } from "react-router-dom";

// function SignupForm() {
//   let navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await submitForm(event.target);
//     navigate("../success", { replace: true });
//   }

//   return <form onSubmit={handleSubmit}>{/* ... */}</form>;