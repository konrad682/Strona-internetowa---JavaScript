import React, { Component } from 'react';
import style from './Home.module.css';
import reka from '../../assets/reka.jpg'
import employee from '../../assets/employee.png'
import login from '../../assets/login.jpg'
import pytajnik from '../../assets/pytajnik.png'

class Home extends Component {
    render() {
        return (
            <div className={style.text}>

                <h2> Funkcje na stronie: </h2>

                <br/><br />

                <div className={style.wrapper}>
                    <div>
                        <img src={pytajnik} alt="pytajnik"
                             width={250}
                             height={250}
                        />
                    </div>
                    <div>
                        <br />
                        <a> Do czego służy strona</a>
                        <p> Po zalogowaniu się, możesz uzupełnić swój własny formularz dotyczący ciebie. a następnie przesłać go do naszej bazy danych.
                        </p>
                    </div>
                    <div>
                        <img src={login} alt="login"
                             width={250}
                             height={250}
                        />
                    </div>
                    <div>
                        <br />
                        <a>Logowanie/Rejestracja</a>
                        <p>
                            Zarejestrowanie daje mozliwość korzystania ze wszystkich możliwości strony. Po zalogowaniu się możesz uzupełnić formularz, a nastepnie przeglądać formularze osób, które już taki formularz wypełniły.
                        </p>
                    </div>
                    <div>
                        <img src={employee} alt="pracownik"
                             width={250}
                             height={250}
                        />
                    </div>
                    <div>
                        <br />
                        <a>Odkryj nowych pracowników</a>

                        <p>
                            Po zalogowaniu, możesz poznać wszytskich przyszłych pracowników. Sortuj uzytkowników wsród wszytskich, którzy już złozyli formularz.
                        </p>
                    </div>
                    <div>
                        <img src={reka} alt="reka"
                             width={250}
                             height={250}
                        />
                    </div>
                    <div>
                        <br />
                        <a>Jeszcze nigdy nie byłeś tak blisko</a>

                        <p>
                            Dzięki tej stronie możesz szybko znaleźć pracę. Czekaj tylko jak pracodwaca się odezwie.
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;
