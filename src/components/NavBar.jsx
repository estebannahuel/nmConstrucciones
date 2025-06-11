import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav id="menu" className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Cambiado a navbar-dark y bg-dark */}
                {/* 1. LOGO: Ahora con un NavLink al inicio y clase navbar-brand */}
                <NavLink to="/" className="navbar-brand me-auto me-lg-0"> {/* me-auto en móvil, me-lg-0 en desktop para mover el toggler */}
                    <img 
                        src="../public/images/logo.png" 
                        alt="Logo de la empresa" 
                        width="150" 
                        height="auto" 
                        className="d-inline-block align-top" 
                    />
                </NavLink>

                {/* BOTÓN HAMBURGER: Alineado a la derecha en móvil */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENÚ COLAPSABLE: Centrado o a la derecha */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav"> {/* justify-content-center para centrar los elementos de navegación */}
                    <ul id="nav-ul" className="navbar-nav"> {/* Quité ms-auto aquí para permitir el centrado del ul */}
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-white text-uppercase mx-2"> {/* Texto blanco, mayúsculas, margen horizontal */}
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/trabajos' className="nav-link text-white text-uppercase mx-2"> {/* Texto blanco, mayúsculas, margen horizontal */}
                                Trabajos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contactos' className="nav-link text-white text-uppercase mx-2"> {/* Texto blanco, mayúsculas, margen horizontal */}
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}