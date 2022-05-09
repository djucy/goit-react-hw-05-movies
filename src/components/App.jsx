import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
 import { ToastContainer, toast } from 'react-toastify';

// import Cast from '../views/Cast/Cast';
// import Reviews from '../views/Reviews/Reviews';
import AppBar from "./AppBar/AppBar";
import NotFoundPage from './NotFoundPage/NotFoundPage';
// import Section from './Section/Section';
import Container from './Container/Container';

const HomePage = lazy(() => import('views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage/MovieDetailsPage.jsx'));
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));

export default function App(){
  return (
    <Container>
    <AppBar></AppBar>

      <Routes>
        <Route path="/" element={<React.Suspense fallback={<>...</>}><HomePage /></React.Suspense>} />
        <Route path="/movies" element={<React.Suspense fallback={<>...</>}><MoviesPage /></React.Suspense>} >
         {/* <Route path="*" element={<NotFoundPage/> }></Route>  */}
        </Route>
        <Route path="/movies/:movieId" element={<React.Suspense fallback={ <>...</>}><MovieDetailsPage/></React.Suspense> } >
          <Route path="cast" element={<Cast/> }/>
          <Route path="reviews" element={<Reviews />} />
          
        </Route>
        
        <Route path="*"  element={<NotFoundPage/> }></Route>
        
      </Routes>
      <ToastContainer/>
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