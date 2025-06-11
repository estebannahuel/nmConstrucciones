import React from 'react'; // Asegúrate de importar React

export const Contactos = () => {
  return (
    <>
      {/* Centra el título del contacto con margen superior e inferior */}
      <h1 className="text-center my-3 text-primary fw-bold text-uppercase">Contacto</h1> {/* Título estilizado */}

      {/* Contenedor principal con margen y padding que usas, ahora con fondo oscuro y padding */}
      <div className="container my-5 py-5  rounded-3 "> {/* Cambiado a container para centrado y bg-dark */}

        {/* El formulario en sí. Lo mantenemos más claro para que resalte dentro del contenedor oscuro. */}
        {/* Usamos 'p-4' para padding interno y 'mb-5' para margen inferior. */}
        {/* 'shadow' añade una sombra sutil. 'rounded' le da bordes redondeados. */}
        {/* 'bg-light' le da un fondo claro. 'mx-auto' y 'mw-700' para centrar y limitar el ancho. */}
        <form className="form p-4 mb-3 shadow rounded bg-light mx-auto" 
              style={{ maxWidth: '700px' }} // mw-700 no es una clase de Bootstrap, usamos inline style
              action="https://formsubmit.co/construccionesnm2025@gmail.com" 
              method="POST">
          
          {/* mb-3 para margen inferior, form-control para estilos base de inputs */}
          <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" />

          {/* mb-3 para margen inferior, form-control para estilos base de inputs */}
          <input className="form-control mb-3" type="email" name="email" id="email" placeholder="Gmail" />

          {/* mb-3 para margen inferior, form-control para estilos base de inputs */}
          <input className="form-control mb-3" type="text" name="telefono" id="telefono" placeholder="Telefono" />

          {/* mb-3 para margen inferior, form-select para estilos base de selects */}
          <select className="form-select mb-3" name="profecion" id="profecion">
            <option value="">Selecciona un Servicio</option> {/* Opción por defecto más clara */}
            <option value="Albañileria">Albañilería</option>
            <option value="Plomeria">Plomería</option>
            <option value="Pintura">Pintura</option>
            <option value="Durlock">Durlock</option>
            <option value="Gasista">Gasista</option>
            <option value="Electrisidad">Electricidad</option>
          </select>

          {/* mb-4 para un poco más de margen inferior, form-control para estilos base de textarea */}
          <textarea className="form-control mb-4" name="comentario" id="comentario" rows="5" placeholder="Escribe aquí"></textarea>

          {/* d-grid y gap-2 para que los botones se apilen y tengan espacio */}
          <div className="d-grid gap-2">
            {/* btn btn-secondary cambiado a btn-outline-secondary para mejor contraste sobre fondo claro */}
            <button className="btn btn-outline-secondary text-dark fw-bold" type="reset">Borrar</button>

            {/* btn btn-primary para el botón Enviar */}
            <button className="btn btn-primary fw-bold" type="submit">Enviar</button>
          </div>

          {/* Campos ocultos de FormSubmit */}
          <input type="hidden" name="_next" value="https://nm-construcciones.vercel.app/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>

      </div>
    </>
  )
}