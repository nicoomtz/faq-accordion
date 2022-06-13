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
      document.getElementById(`${id}`).classList.add('seleccionado');
      document.querySelector(`[valor='${id}']`).classList.add('visible');
      document.querySelector('.respuesta-arrow').classList.add('arrow');
    }
    
    if(estado) {
        document.getElementById(`${id}`).classList.remove('seleccionado');
        document.querySelector(`[valor='${id}']`).classList.remove('visible');
        document.querySelector('.respuesta-arrow').classList.remove('arrow');
    }
  }


  return(
    <button className="respuesta" id={id} onClick={() => cambiarEstado(id)}>
      <p className="respuesta-texto">
        {texto}
      </p>
      <img src={Arrow} className="respuesta-arrow"/>
      <p className="respuesta-wrapper-texto" valor={id}>
        {textoRta}
      </p>
    </button>
  )
}

export default Respuesta;