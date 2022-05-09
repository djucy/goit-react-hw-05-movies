import style from '../Section/Section.module.css';

export default function Section({children }) {
    return (
        <div className={style.container}>{children }</div>
    )
}