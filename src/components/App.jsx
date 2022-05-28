import { Route, Routes } from 'react-router-dom';
import React, { lazy,Suspense } from 'react';
 import { ToastContainer} from 'react-toastify';
import AppBar from "./AppBar/AppBar";
import Container from './Container/Container';
import HomePage from '../views/HomePage/HomePage';
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

