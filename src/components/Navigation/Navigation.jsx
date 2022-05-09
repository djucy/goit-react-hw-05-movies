import { NavLink } from "react-router-dom";
import style from './Navigation.module.css';


export default function Navigation() {

    return (
        <nav className={style.nav }>
            <NavLink to="/" className={style.item }>Home</NavLink>
            <NavLink to="/movies" className={ style.item}>Movies</NavLink>
            
        </nav>

    )
 }