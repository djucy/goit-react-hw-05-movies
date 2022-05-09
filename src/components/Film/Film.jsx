
import style from './Film.module.css';

export default function Film({ title, image, key, id }) {
//     const onMovieClick = () => {
// onClick(id)
    //  }
    return (
        <li id={id} key={ key}>
            <img src={image} alt={title} className={style.image}  />
            <p>{title}</p>
            </li>

    )
}