import React from 'react';
import style from './Communicate.module.css'

const CommunicateError = ( props ) =>{
  return(
   <div className="Question">
       <div className={style.body}>
            <p>{props.comm}</p>

       </div>
   </div>
  )
};

export default CommunicateError;