

export const WhatsAppButton = () => {
  return (
    // Div contenedor del botón de WhatsApp
    // d-block: visible por defecto (en todos los tamaños)
    // d-md-none: oculta el div en pantallas medianas (md) y superiores
    <div 
      className="" 
      style={{
        position: 'fixed', 
        bottom: '20px',    
        right: '20px',     
        zIndex: 1000,      // Aumenté el zIndex para máxima prioridad
        // ESTILOS TEMPORALES DE DEPURACIÓN (DESCOMENTA PARA VER UN CUADRADO ROJO MUY VISIBLE)
        backgroundColor: 'green', // Fondo rojo brillante para que no pase desapercibido
        width: '80px',          // Ancho fijo
        height: '80px',         // Alto fijo
        borderRadius: '50%',    // Para que sea redondo
        display: 'flex',        // Para centrar el contenido
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid white' // Un borde para más visibilidad
      }}
    >
      <a 
        href="https://walink.co/5c532e" // Reemplaza con tu número de WhatsApp
        target="_blank" 
        rel="noopener noreferrer" 
        // Eliminé las clases de Bootstrap del 'a' para que el div de depuración sea el visible
        // Si el div rojo aparece, el problema es que el 'a' o su icono no se renderizan bien dentro
        // className="btn btn-success rounded-circle p-3 shadow-lg" 
        aria-label="Contactar por WhatsApp"
      >
        {/* Aquí puedes probar a poner un texto simple si el icono no aparece */}
        {/* <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>WA</span> */}
        <i className="fab fa-whatsapp fs-3 text-white"></i> {/* Icono de WhatsApp de Font Awesome con texto blanco */}
      </a>
    </div>
  );
};