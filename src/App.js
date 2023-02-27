import './App.css';
import Boton from './Componentes/Boton'
import Contador from './Componentes/Contador'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {

  const [numeroDeClicks, setNumClicks] = useState(0)

  const manejarClick = ()=>{
    setNumClicks(numeroDeClicks + 1)
  }

  const reinicarContador = ()=>{
    setNumClicks(0)
}

  return (
    <div className="App bg-dark">
      <div className='contenedor-principal'>
        <Contador numeroDeClicks = {numeroDeClicks} />
        <div className='div-botones'>
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={manejarClick} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reinicarContador} />
        </div>
      </div>
    </div>
  );
}

export default App;
