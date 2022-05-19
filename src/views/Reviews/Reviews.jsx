import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Reviews.module.css';


import * as Api from '../../service/api-fetch';


export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        Api.getMoviesReviews(movieId)
        .then(setReviews)
       
    }, [movieId])

    return (
        <>
            {reviews && (
                <ul className={style.list }>{reviews.map(({id,author,content,author_details}) => (
                    <li key={id} className={style.item }>
                        <div>
                            <img className={style.image} src={author_details.avatar_path ? `https://image.tmdb.org/t/p/w200${author_details.avatar_path}` : author_details.avatar_path} alt={author} />
                            <p className={ style.authorName}>{author}</p></div>
                            <p className={style.textReview }>{ content}</p>
                     </li>  

                ))}
                </ul>)}
        </>
)
}
Reviews.propTypes = {
    reviews: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
        author_details:PropTypes.shape({
            avatar_path:PropTypes.string,
        }),
    })
}

// "https://cdn.pixabay.com/photo/2020/03/17/11/31/movie-camera-4939841_960_720.png"