import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Creemos algo juntos</h1>
                        <p>¡Hola! </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur dicta distinctio dolore eum expedita officia quaerat quia repudiandae sapiente! Alias delectus iusto laboriosam praesentium quae quod sit ullam. Delectus.</p>
                    </Col>
                    <Col md={6}>
                        <div className="w-75">
                            <img className="img-fluid rounded-3 shadow " src='/contact.png' alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address">
                                        <Form.Control type="email" placeholder="name@example.com" className="shadow-sm"/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" className="shadow-sm"/>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                        <Form.Select aria-label="Floating label select example" className="shadow-sm">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                        <Form.Select aria-label="Floating label select example" className="shadow-sm">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col md={12}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments" >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{height: '100px'}}
                                            className="shadow-sm"
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" >Enviar</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Contact