import React, { useState } from "react";
import Arrow from '../../imagenes/icon-arrow-down.svg';
import './Respuesta.css'

function Respuesta({ texto, textoRta, id }) {

  const [estado, setEstado] = useState(false);

  function cambiarEstado(id) {
    if(estado || !estado){
      setEstado(!estado)
    }


    if(!estado){
      // Cerrar otro elemento si es que está abierto
      if(document.querySelector('.seleccionado')){
        if(document.querySelector('.seleccionado'))
          document.querySelector('.seleccionado').classList.remove('seleccionado');

          if(document.querySelector('.visible'))
            {
              document.querySelector('.visible').classList.remove('visible');

              if(document.querySelector('.arrow'))
                {
                  document.querySelector('.arrow').classList.remove('arrow');
                }
        }
    }
      
      // Switchear elemento a ON
      document.getElementById(`${id}`).classList.add('seleccionado');
      document.querySelector(`[valor='${id}']`).classList.add('visible');
      document.querySelector(`[value='${id}']`).classList.add('arrow');
      
    }
    
    if(estado) {
      
      // Switchear elemento a ON
        document.getElementById(`${id}`).classList.remove('seleccionado');
        document.querySelector(`[valor='${id}']`).classList.remove('visible');
        document.querySelector(`[value='${id}']`).classList.remove('arrow');
    }
  }


  return(
    <button className="respuesta" id={id} onClick={() => cambiarEstado(id)}>
      <p className="respuesta-texto">
        {texto}
      </p>
      <img src={Arrow} className="respuesta-arrow" value={id}/>
      <p className="respuesta-wrapper-texto" valor={id}>
        {textoRta}
      </p>
    </button>
  )
}

export default Respuesta;