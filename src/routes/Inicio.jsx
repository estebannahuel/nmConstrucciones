import { MensajeEscribiendo } from "../components/mensaje";
import React from 'react'; // Asegúrate de que React esté importado
// Si la imagen de "quienes-somos" la usas directamente, descomenta y usa esta línea:
// import quienesSomosImage from "/images/quienes.png"; 
// Asegúrate de que la ruta de la imagen sea correcta en tu proyecto.
// Para el banner principal:
// import bannerPrincipalImage from "/images/banner.png"; 


export const Inicio = () => {
  return (
    <>
      <main>
        {/* Banner principal - ahora más robusto con bg-dark y d-flex para centrado vertical */}
        <div className="banner text-center py-5 bg-dark text-white d-flex align-items-center justify-content-center">
          {/* Contenedor del mensaje para control de ancho y padding en móvil */}
          <div className="container"> {/* Usamos un container de Bootstrap para el ancho general */}
            <div className="row justify-content-center"> {/* Fila para centrar la columna del mensaje */}
              <div className="col-12 col-md-10 col-lg-8"> {/* La columna que controla el ancho del mensaje */}
                <h2 className="display-5 display-md-4 display-lg-3 fw-bold text-center text-uppercase">
                  <MensajeEscribiendo />
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Sección "Nosotros" - Contenedor principal con margen y espaciado de grilla */}
        <section className="nosotros container my-5">
          {/* Título principal de la sección "Nosotros" */}
          <h2 className="text-center display-4 fw-bold mb-4 text-dark text-uppercase">
            Conoce N & M Construcciones
          </h2>
          {/* Un pequeño divisor visual */}
          <hr className="mb-5 border-primary border-3 w-50 mx-auto" /> 

          <div className="row g-4"> {/* g-4 para un buen espacio entre las tarjetas/artículos */}

            {/* Artículo "¿Quiénes Somos?" - Una tarjeta grande, con fondo sutil y sombra */}
            {/* Ajustado el padding vertical (py-4) para mejor espaciado con la imagen */}
            <article className="quienesSomos col-lg-6 col-md-12 p-4 d-flex flex-column justify-content-center align-items-center text-center rounded-3 shadow-sm bg-light-subtle border border-primary border-opacity-50">
              <h2 className="mb-3 text-primary text-uppercase">¿Quiénes Somos?</h2>
              <p className="lead fs-5 text-dark">
                En Construcciones N & M, somos un equipo apasionado por transformar espacios y materializar los sueños de
                nuestros clientes. Fundado en 2023, nuestro emprendimiento se dedica a ofrecer soluciones creativas y de
                alta calidad en el ámbito de la construcción, con un enfoque en la innovación y la sostenibilidad.
              </p>
              {/* Imagen: ajustado el estilo para que se integre mejor */}
              <div 
                style={{ 
                  width: '100%', 
                  maxWidth: '300px', 
                  height: '250px', 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  marginTop: '1.5rem' 
                }}
              >
                <img 
                  src="/images/quienes.png" // Asegúrate de que esta sea la RUTA CORRECTA de tu imagen
                  alt="Equipo de trabajo o proyecto" 
                  className="img-fluid" // img-fluid para responsividad
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center' 
                  }} // Ajuste de la imagen dentro de su contenedor
                />
              </div>
            </article>

            {/* Artículo "Nuestro Equipo" - Tarjeta más pequeña, con fondo sutil y sombra */}
            <article className="nuestroEquipo col-lg-3 col-md-6 p-4 text-center rounded-3 shadow-sm bg-light-subtle border border-secondary border-opacity-50 d-flex flex-column justify-content-center">
              <h3 className="mb-3 text-primary text-uppercase">Nuestro equipo</h3>
              <p className="fs-6 text-dark mb-3">
                Contamos con profesionales altamente capacitados en diversas áreas de la construcción,
                todos comprometidos con la excelencia y la satisfacción del cliente.
              </p>
              {/* Contenido ampliado / Ícono */}
              <ul className="list-unstyled mb-0 text-dark small">
                <li><i className="fas fa-check-circle text-success me-2"></i> Experiencia y profesionalismo</li>
                <li><i className="fas fa-check-circle text-success me-2"></i> Foco en la calidad y seguridad</li>
              </ul>
              <i className="fas fa-users display-4 text-secondary mt-3"></i> {/* Ícono de Font Awesome */}
            </article>

            {/* Artículo "Servicios" - Tarjeta más pequeña, con fondo sutil y sombra */}
            <article className="servicios col-lg-3 col-md-6 p-4 text-center rounded-3 shadow-sm bg-light-subtle border border-success border-opacity-50 d-flex flex-column justify-content-center">
              <h3 className="mb-3 text-primary text-uppercase">Servicios</h3>
              <ul className="list-unstyled text-dark small mb-3">
                <li><i className="fas fa-home text-info me-2"></i> Construcción de viviendas</li>
                <li><i className="fas fa-paint-roller text-info me-2"></i> Renovaciones y remodelaciones</li>
                <li><i className="fas fa-wrench text-info me-2"></i> Durlock, pintura y más</li>
                <li><i className="fas fa-award text-info me-2"></i> Más de 10 años de experiencia</li>
              </ul>
              {/* Contenido ampliado / Ícono */}
              <p className="fs-6 text-dark mb-3">
                Ofrecemos soluciones integrales adaptadas a tus necesidades, garantizando resultados duraderos y de alta calidad.
              </p>
              <i className="fas fa-tools display-4 text-success mt-3"></i> {/* Ícono de Font Awesome */}
              {/* OPCIONAL: Botón sutil de CTA */}
              {/* <a href="/servicios" className="btn btn-outline-primary btn-sm mt-3">Ver todos los servicios</a> */}
            </article>
          </div> {/* Fin del row */}

          {/* Sección "Banners" - Banner destacado con fondo primario y degradado */}
          <div className="banners row my-5 align-items-center bg-primary bg-gradient p-4 rounded-3 shadow-lg text-white">
            <div className="col-md-8 text-center text-md-start">
              <h2 className="mb-md-0 mb-3 fs-3 text-uppercase">Te ayudamos a hacer realidad tus ideas con calidad y profesionalismo.</h2>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="images/banner.png" 
                alt="Banner de Construcciones N & M"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

        </section> {/* Fin de la sección "Nosotros" */}

      </main>
    </>
  );
};