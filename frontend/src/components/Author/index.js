import React, { Component } from 'react';
import style from './Author.module.css';

class Author extends Component {
    render() {
        return (

            <div className={style.text}>

                <h1>Informajce</h1>

                Strona stworzona przez: Konrad Wędzicha<br /><br />

                Wersja: 0.1 <br /><br /><br /><br />

            </div>
        );
    }
}
export default Author;
