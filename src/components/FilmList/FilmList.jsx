
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './FilmList.module.css';

export default function FilmList({ filmes, value }) {
    const location = useLocation();



    console.log(filmes.length)
    return (
        <>
            <ul className={style.list}>
                {filmes.map(({ id, poster_path, title }) => (
                    <Link to={`/movies/${id}`}
                        state={{
                            from: console.log(location),
                        }}



                        className={style.item} key={id} > <li id={id} key={id}>
                            <img src={!poster_path ? "https://cdn.pixabay.com/photo/2021/11/27/18/14/charlie-chaplin-6828680_960_720.jpg" : `https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className={style.image} />
                            <p className={style.title}>{title}</p>
                        </li></Link>


                ))
                }
            </ul >
        </>

    )

}

FilmList.propTypes = {
    filmes: PropTypes.array.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
}

