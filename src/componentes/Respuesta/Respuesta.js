import React, { useState } from "react";
import Arrow from '../../imagenes/icon-arrow-down.svg';
import './Respuesta.css'

function Respuesta({ texto, textoRta }) {

  const [estado, setEstado] = useState(false)

  function cambiarEstado() {
    if(estado || !estado){
      setEstado(!estado)
      console.log(estado)
    }

    if(!estado){
      document.querySelector('.respuesta').classList.add('seleccionado')
      document.querySelector('.respuesta-wrapper-texto').classList.add('visible')
    }
    
    if(estado) {
        document.querySelector('.respuesta').classList.remove('seleccionado')
        document.querySelector('.respuesta-wrapper-texto').classList.remove('visible')
    }
  }

  return(
    <button className="respuesta" onClick={() => cambiarEstado()}>
      <p className="respuesta-texto">
        {texto}
      </p>
      <img src={Arrow} className="respuesta-arrow"/>
      <p className="respuesta-wrapper-texto">
        {textoRta}
      </p>
    </button>
  )
}

export default Respuesta;