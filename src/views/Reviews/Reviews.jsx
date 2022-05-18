import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                        <div><img className={style.image} src={`https://image.tmdb.org/t/p/w200${author_details.avatar_path}`}/>
                            <p className={ style.authorName}>{author}</p></div>
                        <p className={style.textReview }>{ content}</p>
                  </li>  

                ))}
            </ul>)}
            
            </>

)


}