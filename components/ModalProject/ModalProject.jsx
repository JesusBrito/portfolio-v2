import {Button, Modal} from "react-bootstrap";
import Image from 'next/image'

const ModalProject = ({show, setShow, project}) => {
    return <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg">
        <Modal.Header closeButton>
            <Modal.Title>{project?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image
                src={project?.url}
                alt={project?.name}
                width="1920px"
                height="1080px"
                layout="responsive"/>
            {project?.largeDescription}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ModalProject