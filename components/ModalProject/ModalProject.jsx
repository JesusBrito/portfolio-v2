import {Button, Modal} from "react-bootstrap";
import Image from 'next/image'
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
            <Image
                src={project?.url}
                alt={project?.name}
                width="1920px"
                height="1080px"
                layout="responsive"/>
            <p className={style.text}>{project?.largeDescription}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ModalProject