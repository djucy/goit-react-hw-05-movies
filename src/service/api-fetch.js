
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "e32d0a5f8ee39ad2c612579abb31460d"

export function fetchGetFilms(page) {
    return fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.rejected(
                new Error("Please, try again")
            );
        })
        .then(response => response.results)

}

export function fetchGetMovie(query, page) {
    return fetch(
        ` ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false `)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.rejected(
                new Error("Please, try again")
            );
        })
        .then(response => response.results)

}

export function getMovieById(movieId) {
    return fetch(
        ` ${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.rejected(
                new Error("Please, try again")
            );
        })
}
export function getMovieCast(movieId) {
    return fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.rejected(
                new Error("Please, try again")
            );
        })
        .then(response => response.cast)
}

export function getMoviesReviews(movieId) {
    return fetch(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.rejected(
                new Error("Please, try again")
            );
        })
        .then(response => response.results)
}
