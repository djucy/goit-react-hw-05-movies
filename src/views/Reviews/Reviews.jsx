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
                <ul>{reviews.map(({id,author,content,author_details}) => (
                    <li key={id}>
                        {/* <img className={style.image } src={author_details.avatar_path}/> */}
                        <p>{author}</p>
                        <p>Review: { content}</p>
                  </li>  

                ))}
            </ul>)}
            
            </>

)


}