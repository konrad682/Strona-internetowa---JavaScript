import React from 'react';
import style from './Question.module.css'

const Question = ( props ) =>{
  return(
   <div className="Question">
       <div className={style.body}>
            <p>Imię: {props.name}</p>
            <p>Nazwisko: {props.surname}</p>
            <p>E-mail: {props.email}</p>
            <p>Miasto: {props.city}</p>
            <p>Pozycja: {props.position}</p>
            <p>Universytet: {props.university}</p>
            <p>Pole tekstowe: {props.textarea}</p>
       </div>
   </div>
  )
};

export default Question;