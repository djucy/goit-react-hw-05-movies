
import { Link,  useNavigate,useLocation } from 'react-router-dom';
import style from './FilmList.module.css';
// import Button from '../Button/Button';
// import Film from '../Film/Film';

export default function FilmList({ filmes,value }) {
    const location = useLocation();
    let navigate = useNavigate();
    console.log(location);
    console.log(navigate);
    // const onMovieClick = (id) => {
    //     onClick(id);
    //  }
    console.log(filmes.length)
    return (
        <>
            <ul className={style.list}>
            {filmes.map(({ id, poster_path, title }) => (
                <Link to=
                    {{
                        pathname: `/movies/${id}`,
                        // state: { from: location },
    //                     navigate:{
    //   ...location,
    //   search: `query=${value}`,
    // }
                        
                    }} className={style.item } key={id}><li id={id} key={id}>
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className={style.image}  />
                        <p className={ style.title}>{title}</p>
            </li></Link>

        
))}
            </ul>
            {/* {filmes.length===20 && <Button/>} */}
            </>

    )

}


// import { useNavigate } from "react-router-dom";

// function SignupForm() {
//   let navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await submitForm(event.target);
//     navigate("../success", { replace: true });
//   }

//   return <form onSubmit={handleSubmit}>{/* ... */}</form>;


{/* <li id={id} key={ id}>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className={style.image}  />
            <h2>{title}</h2>
            </li> */}

            // <Film key={id} image={`https://image.tmdb.org/t/p/original${poster_path}`} title={title} alt={title} id={id} />