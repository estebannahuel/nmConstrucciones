import React, { useState, useRef } from "react"; // Importa useState y useRef
import { NavLink } from "react-router-dom";
// Asegúrate de que los archivos CSS y JS de Bootstrap estén importados en tu App.js o index.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


export const NavBar = () => {
    // Estado para controlar si el menú colapsable está abierto o cerrado
    // Lo inicializamos como 'true' porque por defecto está colapsado en móvil
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Ref para el botón de hamburguesa (navbar-toggler)
    const navTogglerRef = useRef(null);

    // Función para manejar el clic en el botón de hamburguesa
    const handleTogglerClick = () => {
        setIsNavCollapsed(!isNavCollapsed); // Alterna el estado del menú
    };

    // Función para manejar el clic en un NavLink
    const handleNavLinkClick = () => {
        // Si el menú no está colapsado (es decir, está abierto), lo cerramos
        if (!isNavCollapsed) {
            // Simulamos un clic en el botón de hamburguesa para que Bootstrap lo cierre
            if (navTogglerRef.current) {
                navTogglerRef.current.click();
            }
            setIsNavCollapsed(true); // También actualizamos nuestro estado interno
        }
    };

    return (
        <>
            <nav id="menu" className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* 1. LOGO: Ahora con un NavLink al inicio y clase navbar-brand */}
                <NavLink to="/" className="navbar-brand me-auto me-lg-0 ">
                    <img
                        src="/images/logo1.jpg"
                        alt="Logo de la empresa"
                        width="100"
                        height="auto"
                        className="d-inline-block align-top logo"
                    />
                </NavLink>

                {/* BOTÓN HAMBURGER: Alineado a la derecha en móvil */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    // Controlamos aria-expanded con nuestro estado de React
                    aria-expanded={!isNavCollapsed ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={handleTogglerClick} // Asignamos nuestra función para el clic
                    ref={navTogglerRef} // Asignamos el ref a este botón
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENÚ COLAPSABLE: Centrado o a la derecha */}
                <div
                    className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`}
                    id="navbarNav"
                >
                    <ul id="nav-ul" className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to='/'
                                className="nav-link text-white text-uppercase mx-2"
                                onClick={handleNavLinkClick} // <-- ¡Añadir esta línea!
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/trabajos'
                                className="nav-link text-white text-uppercase mx-2"
                                onClick={handleNavLinkClick} // <-- ¡Añadir esta línea!
                            >
                                Trabajos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/contactos'
                                className="nav-link text-white text-uppercase mx-2"
                                onClick={handleNavLinkClick} // <-- ¡Añadir esta línea!
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};