import React, { Component } from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/oksmith-parrot.svg';
class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>

                    <div className={style.footer__container}>
                        <div className={style.logo}>
                            <img src={logo} alt="logo-mobile"
                                 width={100}
                                 height={100}
                            />
                            <div className={style.logo__caption}>
                                    <h1>Urząd pracy</h1>
                            </div>
                        </div>


                        <div className={style.links}>
                            <h3>Urząd Pracy</h3>
                            <h3>Informacje</h3>
                            <h3>Kontakt</h3>
                            <Link className={style.link} to="/">
                                Strona główna
                            </Link>
                            <Link className={style.link} to="/regulations">
                                Regulamin
                            </Link>
                            <Link className={style.link} to="/contact">
                                Kontakt
                            </Link>
                            <Link className={style.link} to="/login">
                                Logowanie
                            </Link>
                            <Link className={style.link} to="/author">
                                Autor
                            </Link>
                            <br />
                            <Link className={style.link} to="/register">
                                Rejestracja
                            </Link>
                        </div>
                    </div>

             </div>
        );
    }
}

export default Footer;
