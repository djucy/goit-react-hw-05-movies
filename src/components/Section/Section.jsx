import style from '../Section/Section.module.css';
import PropTypes from 'prop-types'


export default function Section({children }) {
    return (
        <div className={style.container}>{children }</div>
    )
}

Section.propTypes = {
children:PropTypes.object.isRequired,

}