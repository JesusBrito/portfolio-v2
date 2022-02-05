import Link from 'next/link'
import {Card} from "react-bootstrap";

const CardProject = ({date, name, small_description, url}) => {
    return(
        <Card>
            <Card.Img variant="top" src={url} alt={name} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <p>{date}</p>
                    <p>{name}</p>
                    <p>{small_description}</p>
                </Card.Text>
                <Link href="#">
                    <a>Ver <i className="fas fa-arrow-right"/></a>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CardProject