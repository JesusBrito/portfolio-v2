import Link from "next/link";
import { Card } from "react-bootstrap";
import style from "./CardProject.module.scss";

const CardProject = ({ project, showProject }) => {
  const { date, name, smallDescription, url } = project;
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={url} alt={name} loading="lazy" />
      <Card.Body>
        <div className={style.card_body}>
          <Card.Title>
            <p>{date}</p>
          </Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{smallDescription}</Card.Text>
        </div>
        <div className={style.card_footer}>
          <a onClick={() => showProject(project)}>
            Ver <i className="fas fa-arrow-right" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProject;
