import Link from 'next/link'
import style from '../styles/components/CardProyect.module.scss'

const CardProject = ({date, name, small_description, url}) => {
    return(
        <div className={style.card}>
            <div className={style.card_header}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={name}/>
            </div>
            <div className={style.card_body}>
                <p>{date}</p>
                <p>{name}</p>
                <p>{small_description}</p>
            </div>
            <div className={style.card_footer}>
                <Link href="#">
                    <a>Ver <i className="fas fa-arrow-right"/></a>
                </Link>
            </div>
        </div>
    )
}

export default CardProject