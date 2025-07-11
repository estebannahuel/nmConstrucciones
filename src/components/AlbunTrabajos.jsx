import { NavLink } from "react-router-dom"
import { pelis } from "../hooks/leer"
import { Trabajos1 } from "./trabajos1"
import { useState } from "react"

export const AlbunTrabajos = () => {

    const { peliculas } = pelis()

    return (
        <>
            {/* Título de la sección */}
            <h1 className="text-center my-5 text-primary text-uppercase fw-bold">Trabajos Realizados</h1> {/* m-5 se convierte en my-5 para un margen vertical, text-primary, text-uppercase, fw-bold para consistencia */}

            {/* Contenedor de las tarjetas - ahora usa el sistema de grilla de Bootstrap */}
            <div className="container py-4"> {/* Agrega un contenedor para centrar y un padding vertical */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"> {/* Grilla responsiva */}

                    {
                        peliculas.map(({ id, titulo, descripcion, imagen, button }) => // 'button' se mantiene aquí por si lo usas en otro lado, aunque no se usa en el NavLink
                            <div className="col" key={id} > {/* Cada 'tarjeta' se convierte en una columna de la grilla */}
                                <div className="card h-100 shadow-sm border border-secondary border-opacity-50 bg-light"> {/* Tarjeta de Bootstrap, altura igualada, sombra, borde y fondo claro sutil */}
                                    <img
                                        src={imagen}
                                        className="card-img-top img-fluid"
                                        alt={titulo || "Imagen de trabajo"} // Mejorar el alt text
                                        style={{ height: '200px', objectFit: 'cover' }} // Altura fija para imágenes de tarjeta
                                    />

                                    <div className="card-body p-3 d-flex flex-column"> {/* Padding aumentado y flexbox para alinear el botón */}
                                        <h5 className="card-title text-primary text-uppercase mb-2">{titulo}</h5> {/* Título de la tarjeta: color primario, mayúsculas, margen inferior */}
                                        <p className="card-text text-dark flex-grow-1">{descripcion}</p> {/* Texto oscuro, flex-grow para ocupar espacio */}

                                        {/* Botón "Ver fotos" */}
                                        <div className="mt-auto"> {/* Empuja el botón a la parte inferior de la tarjeta */}
                                            <NavLink to={`/trabajos1/${id}`} className="btn btn-primary text-uppercase fw-bold">Ver fotos</NavLink> {/* Estilo de botón primario, mayúsculas, bold */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div> {/* Fin del contenedor de tarjetas */}

            {/* Botón "Ver más" */}
            <div className="text-center my-5"> {/* Centrado y margen vertical */}
                <NavLink to={'https://www.facebook.com/profile.php?id=61578407722655&sk=photos_albums'} target="_blank" className="btn btn-dark btn-lg text-uppercase fw-bold shadow">Ver más en Facebook</NavLink> {/* Estilo de botón oscuro, grande, mayúsculas, bold y sombra */}
            </div>
        </>
    )
}
