import { useEffect, useState } from 'react';
import trabajos from '../data/obrasDurlock.json'
import fotosSaavedra from '../data/fotosSaavedra.json'



export const pelis = () => {



    const [peliculas, setPeliculas] = useState(trabajos)
    const [foto, setFotos] = useState(fotosSaavedra)
   

  
    

    return {
        peliculas,
        foto,
    }


}

