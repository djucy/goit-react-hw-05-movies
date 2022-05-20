import { Route, Routes,BrowserRouter } from 'react-router-dom';
import React, { lazy,Suspense } from 'react';
 import { ToastContainer} from 'react-toastify';
import AppBar from "./AppBar/AppBar";
import Container from './Container/Container';
import HomePage from '../views/HomePage/HomePage';
// const HomePage = lazy(() => import('views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage/MovieDetailsPage.jsx'));
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../components/NotFoundPage/NotFoundPage'));

export default function App(){
  return (
    <Container>
    <AppBar />
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<AppBar />}> */}
            <Route path="/" element={<HomePage />} /> 
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> 
            </Route>
            <Route path="*"  element={<NotFoundPage/> }></Route>
        {/* </Route> */}
        
        
        
        </Routes>
   
      <ToastContainer />
    </Suspense>
     </Container>
  );
};

// export default function App() {
  // const [filmes, setFilmes] = useState([]);
  //   return fetch(
  //       'https://api.themoviedb.org/3/trending/movie/day?api_key=e32d0a5f8ee39ad2c612579abb31460d',)
  //       .then(response => {
  //           if (response.ok) {
  //               return response.json();
  //           }
  //           return Promise.rejected(
  //               new Error("Please, try again")
  //           );
  //       })
  //     .then(response =>  {return [...response.results] })
  //       // .then(filmes => setFilmes([...filmes]));
  // .then(newArrayFilmes => {
  //       setFilmes(state =>[...state, ...newArrayFilmes]);
  //     })
//   return (
//     <HomePage></HomePage>
//   )
//  }