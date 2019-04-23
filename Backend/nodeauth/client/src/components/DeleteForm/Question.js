import React from 'react';
import style from './Question.module.css'

const Question = () =>{
  return(
   <div className="Question">
       <div className={style.body}>
           <p> Usunięto formularz o podanym emailu ! </p>
       </div>
   </div>
  )
};

export default Question;