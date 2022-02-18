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
                <meta name="description" content="Desarrollador Full Stack con 3 años de experiencia, trabajo con tecnologías como React, Node js, Flutter, MySql, Azure y AWS, he desarrollado proyectos para la industria privada y pública y estoy disponible para desarrollar cualquier tipo de proyecto y ayudar a las personas y a las empresas a cumplir sus metas"/>
                <meta name="keywords" content="proyectos web, páginas web, desarrollo web, desarrollo de aplicaciones"/>
                <meta name="author" content="Juan Jesús Brito Brito" />
                <meta name="copyright" content="Juan Jesús Brito Brito" />
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
                <meta name="description" content=""/>
            </Head>
            <header>
                <Navbar bg="light" expand="lg" fixed="top" className={`shadow-sm ${styles.navbar_custom}`}>
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto">
                                <Link href="/">
                                    <a className="nav-link">Inicio</a>
                                </Link>
                                <Link href={active === 1 ? '#sectionAboutMe':'/#sectionAboutMe'}>
                                    <a className="nav-link">Sobre mí</a>
                                </Link>
                                <Link href={active === 1 ? '#sectionProjects':'/#sectionProjects'}>
                                    <a className="nav-link">Proyectos</a>
                                </Link>
                                <Link href={active === 1 ? '#sectionExperience':'/#sectionExperience'}>
                                    <a className="nav-link">Experiencia</a>
                                </Link>
                                <Link href={active === 1 ? '/#sectionExperience':'#'}>
                                    <a className="nav-link">Creemos algo juntos</a>
                                </Link>
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
                                        <Link href="#sectionAboutMe">
                                            <a>Sobre mí</a>
                                        </Link>
                                        <Link href="#sectionProjects">
                                            <a>Proyectos</a>
                                        </Link>
                                        <Link href="#sectionExperience">
                                            <a>Experiencia</a>
                                        </Link>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={styles.layout_footer_menu_column}>
                                        <Link href="/contacto">
                                            <a>Creemos algo juntos</a>
                                        </Link>
                                        <Link href="#">
                                            <a href="https://blog.jesusbritodeveloper.com/" target="_blank"
                                               rel="noreferrer">Blog</a>
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
