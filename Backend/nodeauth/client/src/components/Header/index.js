import React, { Component } from 'react';
import style from './Header.module.css';
import logo from "../../assets/oksmith-parrot.svg";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
class Header extends Component {

handleSubmit = () =>{
    this.props.history.push('/login');
}


    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoggedIn: false
        }
    }


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
                        <br />
                        <button className={style.button} onClick={() => this.handleSubmit()}>
                            {this.state.isLoggedIn? 'Wylogowanie' : 'Logowanie/Rejestracja'}</button><br />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
