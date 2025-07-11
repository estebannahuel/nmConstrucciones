import React from 'react'; // Asegúrate de importar React si no lo haces globalmente

export const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-white pt-5 pb-3"> {/* Fondo oscuro, texto blanco, padding superior e inferior */}
        <div className="container"> {/* Contenedor para centrar y limitar el ancho */}
          <div className="row justify-content-center align-items-center g-4"> {/* Fila principal, centrado, gap entre columnas */}
            
            {/* Logo de la empresa */}
            <div className="col-12 col-md-4 text-center"> {/* Ocupa todo el ancho en móvil, 1/3 en tablet/desktop */}
              <img className="img-fluid mb-3 logo" src="/images/logo1.jpg" alt="Logo de la empresa" style={{ maxWidth: '180px' }} /> {/* Logo responsivo, margen inferior */}
            </div>

            {/* Navegación del Footer (Redes y Contactos) */}
            <div className="col-12 col-md-8"> {/* Ocupa todo el ancho en móvil, 2/3 en tablet/desktop */}
              <div className="row justify-content-center g-4"> {/* Nueva fila para redes y contactos, centrado */}
                
                {/* Redes Sociales */}
                <div className="col-12 col-sm-6 col-lg-4 text-center"> {/* 1/2 en sm, 1/3 en lg */}
                  <h3 className="fs-5 mb-3 text-uppercase text-primary">Redes</h3> {/* Título más pequeño, mayúsculas, color primario */}
                  <ul className="list-unstyled mb-0"> {/* Quita puntos y margen inferior */}
                    <li>
                      <a target="_blank" href="https://www.facebook.com/61578407722655" className="text-white text-decoration-none hover-secondary"> {/* Texto blanco, sin subrayado, hover personalizado */}
                        <i className="fab fa-facebook-f me-2"></i> Facebook {/* Icono con margen a la derecha */}
                      </a>
                    </li>
                    {/* Puedes añadir más redes aquí */}
                  </ul>
                </div>

                {/* Contactos */}
                <div className="col-12 col-sm-6 col-lg-4 text-center"> {/* 1/2 en sm, 1/3 en lg */}
                  <h3 className="fs-5 mb-3 text-uppercase text-primary">Contacto</h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a target="_blank" href="https://walink.co/8d9f41" className="text-white text-decoration-none hover-secondary">
                        <i className="fas fa-phone-alt me-2"></i> Tel: 11-5617-1376 {/* Puedes usar un icono de teléfono si tienes Font Awesome */}
                      </a>
                    </li>
                    {/* Puedes añadir más contactos aquí (email, dirección, etc.) */}
                  </ul>
                </div>

                {/* Otra columna para servicios o enlaces útiles, si lo necesitas */}
                {/* <div className="col-12 col-sm-6 col-lg-4 text-center">
                    <h3 className="fs-5 mb-3 text-uppercase text-primary">Servicios</h3>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#" className="text-white text-decoration-none hover-secondary">Construcción</a></li>
                        <li><a href="#" className="text-white text-decoration-none hover-secondary">Reformas</a></li>
                    </ul>
                </div> */}

              </div> {/* Fin de la fila de navegación */}
            </div> {/* Fin de la columna de navegación */}

          </div> {/* Fin de la fila principal del footer */}

          {/* Sección de Derechos Reservados */}
          <div className="derechos text-center pt-3 mt-4 border-top border-secondary "> {/* Borde superior, margen superior */}
            <p className="text-light mb-1 small">Derechos reservados &copy; 2024</p> {/* CORREGIDO: Cambiado a text-light */}
            <p className="text-light small">Autoría de Web Design Solutions</p> 
          </div>

        </div> {/* Fin del container principal */}
      </footer>

      {/* CSS personalizado para el hover (puedes ponerlo en tu archivo CSS global) */}
      <style jsx>{`
        .hover-secondary:hover {
          color: var(--bs-secondary) !important; /* Color gris de Bootstrap al pasar el mouse */
        }
      `}</style>
    </>
  );
};