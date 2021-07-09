import MainLayout from "../components/MainLayout";
import Link from 'next/link'

import style from '../styles/Home.module.scss'
import CardProject from "../components/CardProject";
import CardExperience from "../components/CardExperience"

export default function Home() {
    const dataMock = [
        {
            id: 1,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        },
        {
            id: 2,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        },
        {
            id: 3,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        },
        {
            id: 4,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        },
        {
            id: 5,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        },
        {
            id: 6,
            date: "Abril 2020",
            name: "Pagina Web",
            small_description: "La mejor forma de hospedarse.",
            url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
        }
    ]

    const jobMock = [
        {
            id: 1,
            job: 'Desarrollador Mobile ',
            company: 'Noktos',
            description: 'Encargado del desarrollo y mantenimiento de la aplicación Noktos para el serctor hotelero.'
        },
        {
            id: 2,
            job: 'Desarrollador Mobile ',
            company: 'Noktos',
            description: 'Encargado del desarrollo y mantenimiento de la aplicación Noktos para el serctor hotelero.'
        },
        {
            id: 3,
            job: 'Desarrollador Mobile ',
            company: 'Noktos',
            description: 'Encargado del desarrollo y mantenimiento de la aplicación Noktos para el serctor hotelero.'
        },
        {
            id: 4,
            job: 'Desarrollador Mobile ',
            company: 'Noktos',
            description: 'Encargado del desarrollo y mantenimiento de la aplicación Noktos para el serctor hotelero.'
        }
    ]
    return (
        <MainLayout title="Jesus Brito|Web Developer">
            <div className="container">
                <section className={style.header}>
                    <div className={style.header_row_container}>
                        <div className={style.header_row_column_text}>
                            <p>Jesus Brito</p>
                            <h1>Desarrollador Full Stack</h1>
                            <p>Por 4 años he trabajado con empresas del sector finaciero, gobierno, salud y asegurador
                                para ayudandoarles a programar nuevas ideas.</p>
                        </div>
                        <div className={style.header_row_column_image}>
                            <img src="/profile_image.png" alt="Jesus Brito Foto de perfil"/>
                        </div>
                    </div>
                    <ul>
                        <li><Link href="home">Sobre mí</Link></li>
                        <li><a href="https://blog.jesusbritodeveloper.com/" target="_blank" rel="noreferrer">Blog</a>
                        </li>
                    </ul>
                </section>

                <section className={style.proyects} id="sectionProjects">
                    <h2 className="submenu_header">Proyectos</h2>
                    <div className={style.proyects_list_container}>
                        {
                            dataMock.map(data => (
                                <CardProject key={data.id} name={data.name} date={data.date}
                                             small_description={data.small_description} url={data.url}/>
                            ))
                        }
                    </div>
                </section>

                <section id="sectionExperience">
                    <h2 className="submenu_header">Experiencia</h2>
                    <div className={style.proyects_list_container}>
                        {
                            jobMock.map(data => (
                                <CardExperience key={data.id} job={data.job} company={data.company}
                                                description={data.description}/>
                            ))
                        }
                    </div>
                </section>

                <section className={style.contact} id="sectionContact">
                    <div className={style.contact_column_text}>
                        <h2 className="submenu_header">Creemos algo juntos</h2>
                        <p>No importa si es grande o pequeño yo te ayudo 😉</p>
                        <button className='btn button_blue'>Contactar</button>
                    </div>
                    <div className={style.contact_column_image}>
                        <div className={style.contact_container_image}>
                            <img src='/contact.png' alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    )
}