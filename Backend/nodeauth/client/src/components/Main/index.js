import React, { Component } from 'react';
import style from './Main.module.css';
import {withRouter} from "react-router-dom";
import {loggedIn} from "../../services/axios";


class Main extends Component {

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log("form");
        this.props.history.push('/form');
    }
    handleSubmitFind = (evt) => {
        evt.preventDefault();
        console.log("search");
        this.props.history.push('/search');
    }
    handleSubmitDelete = (evt) => {
        evt.preventDefault();
        console.log("delete");
        this.props.history.push('/delete');
    }

    checkUserIsLogiIn = () =>{
        if(!loggedIn()){
            this.props.history.push('/login');
        }
    }

    constructor(props, context) {
        super(props, context);
        this.checkUserIsLogiIn();
    }


    render() {
        return (
            <div className={style.text}>

                <h2> Wybierz opcję: </h2>

                <br/><br />

                <div className={style.wrapper}>
                    <div>

                        <br /><br /><button className={style.submit} onClick={this.handleSubmitForm}>Formularz</button><br />

                    </div>
                    <div>
                        <br />
                        <div className={style.color}>
                         Formularz
                        </div>
                        <p>
                            Wypełnij formularz aby zostać znalezionym przez innych ! Nie czekaj !
                        </p>
                    </div>
                    <div>
                        <br /><br /><button className={style.submit} onClick={this.handleSubmitFind}>Szukanie</button><br />
                    </div>
                    <div>
                        <br />
                        <div className={style.color}>
                            Znajdź pracownika
                        </div>
                        <p>
                            Już teraz możesz bez wysiłku znaleźć pracownika sortując poprzez odpowiednie kategorie !
                        </p>
                    </div>
                    <div>
                        <br /><br /><button className={style.submit} onClick={this.handleSubmitDelete}>Usunięcie</button><br />
                    </div>
                    <div>
                        <br />
                        <div className={style.color}>
                            Usunięcie z bazy
                        </div>
                        <p>
                            Mozliwość usunięcia formularza z bazy !
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
