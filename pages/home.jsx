import MainLayout from "../components/MainLayout";
import {Button, Col, Container, Row} from "react-bootstrap";
import style from '../styles/pages/Home.module.scss'
import CardProject from "../components/CardProject/CardProject";
import CardExperience from "../components/CardExperience/CardExperience";
import CardKnowledge from "../components/CardKnowledge/CardKnowledge";
import {useRouter} from "next/router";
import {returnJobs, returnKnowledge, returnProjects} from "./api/api";
import {useEffect, useState} from "react";
import {scrollToTop} from "../utils/Utils";
import ModalProject from "../components/ModalProject/ModalProject";

const Home = () => {
    const router = useRouter();
    const jobMock = returnJobs()
    const knowledgeMock = returnKnowledge()
    const projectsMock = returnProjects()
    const [mdProject, setMdProject] = useState(false)
    const [dataProject, setDataProject] = useState(null)
    useEffect(() => {
        scrollToTop()
    }, [])

    const goToContact = () => {
        router.push("contact")
    }

    const showProject = (project) => {
        setMdProject(true)
        setDataProject(project)
    }

    return (
        <MainLayout>
            <Container>
                <section className={style.header} id="sectionAbout">
                    <Row>
                        <Col sm={12} md={9} className="order-2 order-md-1 mt-3 m-md-0">
                            <p>Jesus Brito</p>
                            <h1>Desarrollador Full Stack</h1>
                            <p>Por 4 años he trabajado con empresas del sector finaciero, gobierno, salud y asegurador
                                ayudándoles a programar nuevas ideas.</p>
                            <ul>
                                <li><a href="https://blog.jesusbritodeveloper.com/" target="_blank"
                                       rel="noreferrer">Blog</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={3}
                             className="d-flex justify-content-center align-items-center order-1 order-md-2">
                            <img src="/profile_image.png" className="w-75 rounded-circle shadow"
                                 alt="Jesus Brito Foto de perfil"/>
                        </Col>
                    </Row>
                </section>

                <section className="mb-5 animate__animated animate__jackInTheBox" id="sectionAboutMe">
                    <h2 className={style.submenu_header}>Sobre mí</h2>
                    <p className={style.text}>Soy un desarrollador Full Stack Mobile apasionado por compartir mi
                        conocimiento con otras personas. Me considero autodidacta, proactivo, innovador y creativo, en
                        busca de crecimiento constante que me lleven a probar nuevas experiencias.</p>
                    <p className={style.text}>Pienso que las relaciones personales son importantes para el crecimiento
                        profesional y es por eso, que disfruto mucho la compañía de mis seres queridos. Soy amante de
                        las nuevas tecnologías y todo lo que engloba este apasionante mundo, uno de mis pasatiempos es
                        la lectura de ciencia ficción, así como de la científica.</p>
                </section>

                <section className="mb-5 animate__animated animate__jackInTheBox" id="sectionKnowledge">
                    <h2 className={style.submenu_header}>Conocimientos</h2>
                    <Row>
                        {
                            knowledgeMock.map(data => (
                                <Col className="my-3" md={4} key={data.id}>
                                    <CardKnowledge
                                        icon={data.icon}
                                        classIcon={data.class}
                                        title={data.title}
                                        text={data.text}
                                        url={data.url}/>
                                </Col>
                            ))
                        }
                    </Row>
                </section>

                <section className="mb-5" id="sectionProjects">
                    <h2 className={style.submenu_header}>Proyectos</h2>
                    <Row>
                        {
                            projectsMock.map(data => (
                                <Col className="my-3" md={4} key={data.id}>
                                    <CardProject
                                        project={data}
                                        showProject={showProject}/>
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section className="mb-5" id="sectionExperience">
                    <h2 className={style.submenu_header}>Experiencia</h2>
                    <Row>
                        {
                            jobMock.map(data => (
                                <Col className="my-3" md={4} key={data.id}>
                                    <CardExperience
                                        job={data.job}
                                        company={data.company}
                                        icons={data.icons}
                                        description={data.description}/>
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section id="sectionContact" className="pb-5">
                    <Row className={style.contact}>
                        <Col md={7} className="d-flex align-items-center align-items-md-start justify-content-center flex-column">
                            <h2 className={style.submenu_header}>Creemos algo juntos</h2>
                            <p>No importa si es grande o pequeño yo te ayudo 😉</p>

                            <Row className="w-100">
                                <Col md={6}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" onClick={() => goToContact()}>Contactar</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Col>

                        <Col md={5} className="d-flex justify-content-center mt-3 m-md-0">
                            <div className="w-75">
                                <img className="img-fluid rounded-3 shadow " src='/contact.png' alt=""/>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
            <ModalProject
                show={mdProject}
                setShow={setMdProject}
                project={dataProject}/>
        </MainLayout>
    )
}

export default Home