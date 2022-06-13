import React from 'react';
import Respuesta from '../Respuesta/Respuesta';
import './Pregunta.css'

function Pregunta() {
  return (
    <div className='pregunta-container'>
      <h1 className='pregunta-title'>FAQ</h1>
      <div className='pregunta-preguntas'>
        <Respuesta 
        texto="How many team members can I invite?"
        textoRta='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
        id={1}/>
        <div className='linea'></div>
        <Respuesta 
        texto="What is the maximum file upload size?"
        textoRta='No more than 2GB. All files in your account must fit your allotted storage space.'
        id={2}/>
        
        <div className='linea'></div>
        <Respuesta 
        texto="How do I reset my password?"
        textoRta='Click “Forgot password” from the login page or “Change password” from your profile page.
        A reset link will be emailed to you.'
        id={3}/>
        <div className='linea'
        ></div>
        <Respuesta 
        texto="Can I cancel my subscription?"
        textoRta='Yes! Send us a message and we’ll process your request no questions asked.'
        id={4}/>
        <div className='linea'></div>
        <Respuesta 
        texto="Do you provide additional support?"
        textoRta='Chat and email support is available 24/7. Phone lines are open during normal business hours.'
        id={5}/>
        <div className='linea'></div>
      </div>
      
    </div>
    
  )
}

export default Pregunta;