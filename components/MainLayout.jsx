import Head from "next/head";
import Link from "next/link";
import styles from '../styles/components/MainLayout.module.scss'
import ScrollToTop from "./ScrollToTop";
const MainLayout = ({title, active, children}) => {
    return (
        <div className={styles.layout_grid_container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.layout_header}>
                <div className="container">
                    <div className={styles.layout_header_container}>
                        <ul>
                            <li>
                                <Link href="#">
                                    Sobre mí
                                </Link>
                            </li>
                            <li>
                                <Link href="#sectionProjects">
                                    <a href="#">Proyectos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#sectionExperience">
                                    <a href="#">Experiencia</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#sectionContact">
                                    <a href="#">Creemos algo juntos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className={styles.layout_main}>
                {children}
            </main>
            <footer className={styles.layout_footer}>
                <div className="container">
                    <div className={styles.layout_footer_container}>
                        <div className={styles.layout_footer_networks_column}>
                            <div className={styles.layout_footer_networks}>
                                <a href="https://github.com/JesusBrito" className={styles.github_logo} target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/jesusbritobrito" className={styles.linkedin_logo} target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"/>
                                </a>
                                <a href="https://wa.me/525533684635?text=Creemos%20algo%20juntos" target="_blank" className={styles.whatsapp_logo}  rel="noreferrer">
                                    <i className="fab fa-whatsapp"/>
                                </a>
                            </div>
                            <p><i className="far fa-copyright"/> 2021 Jesus Brito</p>
                        </div>
                        <div className={styles.layout_footer_menu}>
                            <div className={styles.layout_footer_menu_column}>
                                <Link href="#">
                                    <a href="#">Sobre mí</a>
                                </Link>
                                <Link href="#">
                                    <a href="#">Proyectos</a>
                                </Link>
                                <Link href="#">
                                    <a href="#">Experiencia</a>
                                </Link>
                            </div>
                            <div className={styles.layout_footer_menu_column}>
                                <Link href="#">
                                    <a href="#">Creemos algo juntos</a>
                                </Link>
                                <Link href="#">
                                    <a href="#">Blog</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollToTop/>
        </div>
    )
}

export default MainLayout