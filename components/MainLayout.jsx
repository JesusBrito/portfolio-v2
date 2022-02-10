import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/MainLayout.module.scss";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React from "react";

const MainLayout = ({title, active, children}) => {

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                          page_path: window.location.pathname,
                        });
                      `,
                    }}
                />
            </Head>
            <header>
                <Navbar bg="light" expand="lg" fixed="top" className={`shadow-sm ${styles.navbar_custom}`}>
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto">
                                <Nav.Link href="home"> Inicio</Nav.Link>
                                <Nav.Link href="#sectionAboutMe">Sobre mí</Nav.Link>
                                <Nav.Link href="#sectionProjects">Proyectos</Nav.Link>
                                <Nav.Link href="#sectionExperience">Experiencia</Nav.Link>
                                <Nav.Link href="#sectionContact">Creemos algo juntos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className={styles.layout_main}>{children}</main>
            <footer className={styles.layout_footer}>
                <div className="container">
                    <Row>
                        <Col md={2}>
                            <div className={styles.layout_footer_networks}>
                                <a
                                    href="https://github.com/JesusBrito"
                                    className={styles.github_logo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github"/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jesusbritobrito"
                                    className={styles.linkedin_logo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin"/>
                                </a>
                                <a
                                    href="https://wa.me/525533684635?text=Creemos%20algo%20juntos"
                                    target="_blank"
                                    className={styles.whatsapp_logo}
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-whatsapp"/>
                                </a>
                            </div>
                        </Col>
                        <Col md={{ span: 4, offset: 6 }}>
                            <Row>
                                <Col md={6}>
                                    <div className={styles.layout_footer_menu_column}>
                                        <Link href="#">
                                            <a href="#"></a>
                                        </Link>
                                        <Link href="#">
                                            <a href="#">Proyectos</a>
                                        </Link>
                                        <Link href="#">
                                            <a href="#">Experiencia</a>
                                        </Link>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={styles.layout_footer_menu_column}>
                                        <Link href="#">
                                            <a href="#">Creemos algo juntos</a>
                                        </Link>
                                        <Link href="#">
                                            <a href="#">Blog</a>
                                        </Link>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <p className={styles.footer_copy}>
                        <i className="far fa-copyright"/> 2022 Jesús Brito
                    </p>
                </div>
            </footer>
            <ScrollToTop/>
        </React.Fragment>
    );
};

export default MainLayout;
