import Link from 'next/link'
import {Card} from "react-bootstrap";
import style from './CardProject.module.scss'

const CardProject = ({date, name, smallDescription, url}) => {
    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={url} alt={name}/>
            <Card.Body>
                <div className={style.card_body}>
                    <Card.Title>
                        <p>{date}</p>
                    </Card.Title>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text>{smallDescription}</Card.Text>
                </div>
                <div className={style.card_footer}>
                    <Link href="#">
                        <a>Ver <i className="fas fa-arrow-right"/></a>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardProject