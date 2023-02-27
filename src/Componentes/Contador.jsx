import React from 'react';
import '../HojasDeEstilo/Contador.css'

function Contador ({numeroDeClicks}){

  return(
    <div className='contador'>
      {numeroDeClicks}
    </div>
  )

}

export default Contador