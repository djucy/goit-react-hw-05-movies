import style from '../Container/Container.module.css';
import PropTypes from 'prop-types';

export default function Container({ children }) {
    return (
        <div className={style.container}>{children}</div>
    )
}

Container.propTypes = {
    
    children: PropTypes.array.isRequired,
}