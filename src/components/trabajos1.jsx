import { NavLink, useParams } from "react-router-dom";
import { pelis } from "../hooks/leer";
import React, { useState } from "react";

export const Trabajos1 = () => {
  const { foto: album } = pelis();
  const { id } = useParams();

  const currentAlbum = album.find(album => album.id === parseInt(id));
  const albumDeFotos = currentAlbum?.casa1 || [];

  const [fotoActual, setFotoActual] = useState(null); // índice de la imagen ampliada

  const ampliar = (index) => {
    setFotoActual(index);
  };

  const cerrarModal = () => {
    setFotoActual(null);
  };

  const siguiente = () => {
    if (fotoActual < albumDeFotos.length - 1) {
      setFotoActual(fotoActual + 1);
    }
  };

  const anterior = () => {
    if (fotoActual > 0) {
      setFotoActual(fotoActual - 1);
    }
  };

  return (
    <>
      {/* Encabezado de la página */}
      <div className="text-center my-5 py-4 text-white"> 
        <h1 className="text-primary text-uppercase fw-bold mb-3">Galería de Fotos</h1>
        <NavLink to={'/trabajos'} className="btn btn-dark btn-lg text-uppercase fw-bold">
          Volver a Trabajos
        </NavLink>
      </div>

      {/* Contenedor de las miniaturas de fotos */}
      <div className="container py-4">
        <div className="row g-4 justify-content-center">
          {
            albumDeFotos.length === 0
              ? <h3 className="text-center my-5 text-muted">No se encuentran resultados ❌</h3>
              : albumDeFotos.map((item, index) => (
                <div className="col-auto" key={index}>
                  <div className="card shadow-sm border border-secondary border-opacity-50" style={{ width: '280px' }}>
                    <img
                      onClick={() => ampliar(index)}
                      src={item}
                      alt={`foto-${index}`}
                      className="img-fluid rounded-top"
                      style={{ width: '100%', height: '220px', objectFit: 'cover', cursor: 'pointer' }}
                    />
                    <div className="card-footer text-center bg-light">
                      <small className="text-muted">Clic para ampliar</small>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>

      {/* Modal de la imagen ampliada a pantalla completa */}
      {
        fotoActual !== null && (
          <div
            className="modal d-flex justify-content-center align-items-center show"
            tabIndex="-1"
            role="dialog"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)', 
              zIndex: 1050
            }}
          >
            <div className="modal-dialog modal-fullscreen" role="document">
              {/* **CORRECCIÓN: Marco y sombra aplicados al modal-content** */}
              <div 
                className="modal-content bg-dark border-0 d-flex flex-column justify-content-center align-items-center h-100"
                style={{
                  border: '5px solid #fff', // Marco blanco
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)', // Sombra más pronunciada
                  zIndex: 99999
                }}
              >
                {/* **CORRECCIÓN: Padding inferior agregado al modal-body** */}
                <div className="modal-body p-0 d-flex flex-column align-items-center justify-content-center h-100 pb-5"> {/* Agregado pb-5 para espacio inferior */}
                  {/* Contenedor de la imagen ampliada */}
                  <div
                    style={{
                      width: '100vw', 
                      height: 'calc(100vh - 120px)', // Ajustado para más espacio para los botones y padding
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'black',
                      borderRadius: '0', 
                      overflow: 'hidden'
                      
                    }}
                  >
                    <img
                      src={albumDeFotos?.[fotoActual]}
                      alt="ampliada"
                      className="img-fluid"
                      style={{
                        objectFit: 'contain', 
                        maxWidth: '100%',
                        maxHeight: '100%'
                        
                      }}
                    />
                  </div>

                  <div className="d-flex gap-3 mt-4">
                    <button
                      onClick={anterior}
                      disabled={fotoActual === 0}
                      className="btn btn-light btn-lg text-uppercase fw-bold" 
                    >
                     <i class="fas fa-arrow-circle-left"></i>
                    </button>
                    <button
                      onClick={cerrarModal}
                      className="btn btn-danger btn-lg text-uppercase fw-bold"
                    >
                      <i class="fas fa-window-close"></i>
                    </button>
                    <button
                      onClick={siguiente}
                      disabled={fotoActual === albumDeFotos.length - 1}
                      className="btn btn-light btn-lg text-uppercase fw-bold" 
                    >
                      <i class="fas fa-arrow-circle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};