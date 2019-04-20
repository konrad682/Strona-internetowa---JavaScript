import React, { Component } from 'react';
import style from './Header.module.css';
import logo from "../../assets/oksmith-parrot.svg";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.gridcontainer}>
                    <div className={style.griditem}>
                        <img src={logo} alt="logo-mobile" />
                    </div>
                    <div className={style.griditem}>
                        <Link className={style.link} to="/">
                            <h1>Urząd pracy</h1>
                        </Link>
                    </div>
                    <div className={style.griditem}>
                        <Link className={style.link} to="/Login">
                            <br/>Login/Register
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
