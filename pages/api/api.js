// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const returnJobs = () => {
  return [
    {
      id: 1,
      job: 'Desarrollador Frontend React',
      company: 'Noktos',
      icons: [
        {icon: "fab fa-react", class: "react_blue"},
        {icon: "fab fa-bootstrap", class: "bootstrap_purple"},
        {icon: "fab fa-sass", class: "sass_pink"}],
      description: 'Desarrollo de 3 plataformas enfocadas a la reservación de noches de hotel, gestión de reservaciones y una administrativa, que funciona para visualizar toda la información de las ventas, despliegue de reportes y procesos internos. '
    },
    {
      id: 2,
      job: 'Desarrollador Frontend/Mobile',
      company: 'Filup RH',
      icons: [
        {icon: "fab fa-react", class: "react_blue"},
        {icon: "fab fa-css3-alt", class: "css_blue"},
        {icon: "fab fa-apple", class: "apple_black"},
        {icon: "fab fa-android", class: "mobile_green"}],
      description: 'Durante mi estancia apoyé en el desarrollo de nuevos módulos y el mantenimiento de la plataforma web, mediante la cual se administra la información de los empleados, horarios y todo lo referente a las nóminas. También desarrollé nuevas aplicaciones móviles orientadas a la administración del capital humano, además de dar mantenimiento y soporte a desarrollos previos.'
    },
    {
      id: 3,
      job: 'Desarrollador Frontend/Mobile',
      company: 'Noktos',
      icons: [
        {icon: "fab fa-react", class: "react_blue"},
        {icon: "fab fa-bootstrap", class: "bootstrap_purple"},
        {icon: "fab fa-css3-alt", class: "css_blue"}],
      description: 'Fui responsable del desarrollo de una plataforma web Tipo OTA para venta de noches de hotel enfocada a clientes corporativos en todo México.'
    },
    {
      id: 4,
      job: 'Desarrollador Web',
      company: 'SEDU - CDMX',
      icons: [
        {icon: "fab fa-laravel", class: "html_orange"},
        {icon: "fab fa-css3-alt", class: "css_blue"},
        {icon: "fab fa-bootstrap", class: "bootstrap_purple"}],
      description: 'Diseño y desarrollo de un sistema interno para levantamiento de información dentro de la secretaría enfocado a las necesidades de las diferentes instituciones educativas en la CDMX.'
    }
  ]
}
export const returnKnowledge = () => {
  return [
    {
      id: 1,
      icon: "fab fa-react",
      class: "react_blue",
      title: "Frontend React",
      text: "<p>Llevo un par de años trabajando con <b>React</b>, utilizo <b>Redux</b> para el manejo del estado de la aplicación, tengo conocimientos en <b>Next js</b> para Server Side Render, temas de SEO y analíticas. Utilizo Fetch y Axios para consumo de APIs. También manejo Javascript moderno (ES6)</p>"
    },
    {
      id: 2,
      icon: "fab fa-node-js",
      class: "node_green",
      title: "Backend Node.js",
      text: "<p>Conocimientos básicos sobre <b>Node js</b> creación de <b>API´s REST con Express</b>, uso de <b>JWT</b> para manejo de sesiones, Conexión con <b>MongoDB</b> y <b>MySQL</b>.</p>"
    },
    {
      id: 3,
      icon: "fas fa-code",
      class: "html_orange",
      title: "Tecnologías Web",
      text: "<p>Utilizo CSS moderno y resposivo mediante <b>flexbox y grids</b>, además tengo experiencia con <b>Bootstrap</b> y otros frameworks como <b>Tailwind</b>. Entre las tecnologías que suelo utilizar está el preprocesador <b>Sass</b> para poder estilizar más rápido y poder reutilizar el código.</p>"
    },
    {
      id: 4,
      icon: "fas fa-mobile-alt",
      class: "mobile_green",
      title: "Mobile",
      text: "<p>Desarrollo de aplicaciones nativas multiplataforma utilizando el <b>SDK de Flutter</b>, consumo de API Rest, manejo de estados con <b>BLOC</b>, utilización de sensores y hardware, utilización de mapas y geolocalización en tiempo real.</p>"
    },
    {
      id: 5,
      icon: "fas fa-server",
      class: "cloud_blue",
      title: "Cloud",
      text: "<p>He trabajado con <b>AWS</b> y <b>Azure</b> para realizar despliegues de APIs desarrolladas con Node y Laravel además de aplicaciones frontend desarrolladas con React. Cuento con la certificación <b>AZ-900</b> proporcionada por Microsoft.</p>"
    }

  ]
}
export const returnProjects = () => {
  return [
    {
      id: 1,
      date: "Mayo 2020",
      name: "Pagina Web",
      smallDescription: "Página web promocional de cursos y talleres de acuarelas.",
      largeDescription: "lorem",
      url: "/projects/project_trazo.png"
    },
    {
      id: 2,
      date: "Agosto 2020",
      name: "Sistema Web",
      smallDescription: "Sistema web para promoción y venta de acuarelas de un artista visual.",
      largeDescription: "lorem",
      url: "/projects/project_watercolor.png"
    },
    {
      id: 3,
      date: "Abril 2020",
      name: "Pagina Web",
      smallDescription: "Página web para promoción y contacto desarrollada para una artista visual.",
      largeDescription: "lorem",
      url: "/projects/project_cecilia.png"
    },
    {
      id: 4,
      date: "Febrero 2020",
      name: "Sistema Web",
      smallDescription: "Plataforma para compra de noches de hotel para la cadena Extended Suites",
      largeDescription: "lorem",
      url: "/projects/project_extended.png"
    },
    {
      id: 5,
      date: "Junio 2021",
      name: "Aplicaciones móviles",
      smallDescription: "Aplicaciones móviles enfocadas a ofrecer y solicitar servicios profesionales.",
      largeDescription: "Desarrollo de aplicaciones móviles enfocadas a ofrecer y solicitar servicios profesionales. El proyecto contempla dos aplicaciones, una para que los prestadores de servicios puedan anunciarse y poder ofrecer sus conocimientos, la segunda aplicación está enfocada al cliente, desde donde puede solicitar un servicio, dar seguimiento al mismo además de consultar y gestionar sus servicios anteriores.",
      url: "/projects/project_gpservices.png"
    },
    {
      id: 6,
      date: "Abril 2020",
      name: "Pagina Web",
      smallDescription: "La mejor forma de hospedarse.",
      largeDescription: "lorem",
      url: "https://res.cloudinary.com/drgf9lfmf/image/upload/v1625795698/hotel-exterior_nqvnqz.jpg"
    }
  ]
}
