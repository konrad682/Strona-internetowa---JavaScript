import React from 'react';
import style from './Communicate.module.css'

const CommunicateError = () =>{
  return(
   <div className="Question">
       <div className={style.body}>
            <p>Błędny login lub hasło</p>

       </div>
   </div>
  )
};

export default CommunicateError;