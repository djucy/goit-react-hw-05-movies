// import Navigation from '../Navigation/Navigation.jsx';

import { NavLink } from "react-router-dom";
import style from '../AppBar/AppBar.module.css';





export default function AppBar() {
    return (
       <> <header >
            <nav className={style.nav }>
            <NavLink to="/" className={({isActive})=>isActive?style.itemActive:style.item }>Home</NavLink>
            <NavLink to="/movies" className={({isActive})=>isActive?style.itemActive:style.item }>Movies</NavLink>
         
            </nav>
           
        </header>
           
 </> 
    )
 }