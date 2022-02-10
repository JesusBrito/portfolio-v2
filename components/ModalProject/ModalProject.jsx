import {Button, Modal} from "react-bootstrap";
import style from './ModalProject.module.scss'
const ModalProject = ({show, setShow, project}) => {
    return <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg">
        <Modal.Header closeButton>
            <Modal.Title>
                <h1 className={style.title}>{project?.name}</h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                src={project?.url}
                alt={project?.name}
                className={style.image}/>
            <div className="mt-4">
                <p className={style.subtitle}>Descripción:</p>
                <p className={style.text}>{project?.largeDescription}</p>

            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ModalProject