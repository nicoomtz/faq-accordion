import React from 'react';
import './App.css';
import Woman from './imagenes/illustration-woman-online-desktop.svg'
import Pattern from './imagenes/bg-pattern-desktop.svg'
import Pregunta from './componentes/Pregunta/Pregunta';

function App() {
  return (
    <div className='flexbox'>
    <div className='container'>
      <img src={Pattern} alt='pattern' className='pattern' />
      <img src={Woman} alt='logo'className='logo-mujer'/>
      <Pregunta />
    </div>
    </div>
  );
}

export default App;
