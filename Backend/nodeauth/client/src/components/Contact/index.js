import React, { Component } from 'react';
import style from './Contact.module.css';

class Contact extends Component {
    render() {
        return (

            <div className={style.text}>

                <div className={style.gridcontainer}>
                    <h2> Kontakt </h2>
                </div>
                <div className={style.gridcontainer}>
                    Jeśli masz pytanie odnosnie strony ? chcesz rozpocząć współpracę ? napisz do mnie lub zadzwoń:
                </div>
                <div className={style.gridcontainer}>
                    <br />
                    email: konrad682@gmail.com
                </div>
                <div className={style.gridcontainer}>
                    tel: 111-222-333
                    <br /> <br /> <br /> <br /> <br />
                </div>

            </div>
        );
    }
}
export default Contact;
