import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import emailjs from '@emailjs/browser';
import {useEffect, useRef} from "react";
import style from '../styles/pages/Contact.module.scss'
import Swal from "sweetalert2";
import {scrollToTop} from "../utils/Utils";
const Contact = () => {
    const form = useRef();
    useEffect(() => {
        scrollToTop()
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_USER_ID)
            .then((result) => {
                Swal.fire({
                    title: '¡Gracias!',
                    text: 'Agradezco mucho tu confianza, muy pronto me pondré en contacto contigo',
                    icon: 'success',
                    timer: 4500
                })
            }, (error) => {
                Swal.fire({
                    title: '¡Error!',
                    text: 'No pudimos enviar el correo, intente más tarde',
                    icon: 'error',
                    timer: 3500
                })
            });
    };
    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <h1 className={style.header}>Creemos algo juntos</h1>
                        <p className={style.title}>¡Hola! 👋</p>
                        <p className={style.text}>Para comprender de forma rápida sobre de qué es el proyecto, te pido que llenes el formulario, trata de ser lo más preciso posible con tu información, esto nos ahorrará tiempo a ambos 😉.</p>

                        <Form onSubmit={sendEmail} ref={form}>
                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel
                                        controlId="txtName"
                                        label="Nombre">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className="shadow-sm"
                                            required/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="txtEmail"
                                        label="Email">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="john-doe@example.com"
                                            className="shadow-sm"
                                            required/>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel
                                        controlId="selectService"
                                        label="Servicio">
                                        <Form.Select
                                            className="shadow-sm"
                                            name="service"
                                            required>
                                            <option selected value="Página Web">Página Web</option>
                                            <option value="Landing page">Landing page</option>
                                            <option value="Aplicación móvil">Aplicación móvil</option>
                                            <option value="Otro">Otro</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="selectBudget"
                                        label="Presupuesto">
                                        <Form.Select
                                            className="shadow-sm"
                                            name="budget"
                                            required>
                                            <option selected value="No tengo presupuesto">No tengo presupuesto</option>
                                            <option value="Tengo un presupuesto moderado">Tengo un presupuesto moderado</option>
                                            <option value="Tengo un presupuesto ya definido">Tengo un presupuesto ya definido</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col md={12}>
                                    <FloatingLabel
                                        controlId="txtComment"
                                        label="¿Cuál es tu comentario?">
                                        <Form.Control
                                            as="textarea"
                                            name="comment"
                                            placeholder="Deja un comentario"
                                            style={{height: '100px'}}
                                            className="shadow-sm"
                                            required
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col md={12}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit">Enviar</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={6} className="d-none d-lg-flex justify-content-end">
                        <div className="w-75">
                            <img className="img-fluid rounded-3 shadow " src='/contact.png' alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Contact