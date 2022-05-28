import style from '../Button/Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
 
    return (
        <button type="button" onClick={onLoadMore} className={style.button }>Download more</button>)
    
}
 
Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}