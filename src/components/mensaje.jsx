import { useState, useEffect } from 'react';

export const MensajeEscribiendo = () => {
    const mensajeCompleto = `Coonstruimos tus sueños
Confiabilidad y calidad, la base de tu nuevo hogar...
`;
    const [mensaje, setMensaje] = useState('');
    const velocidad = 150; // velocidad en ms (más bajo = más rápido)

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setMensaje((prev) => prev + mensajeCompleto[index]);
            index++;
            if (index === mensajeCompleto.length - 1) {
                clearInterval(interval);
            }
        }, velocidad);

        return () => clearInterval(interval); // limpia si el componente se desmonta
    }, []);

    return (
        <div className='mensaje'>

            <h1>{mensaje}</h1>

        </div>
    )
}

