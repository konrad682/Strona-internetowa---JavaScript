import React, { Component } from 'react';
import style from'./Login.module.css';
import { Link } from 'react-router-dom';
import axios, {setToken , getToken,logout,loggedIn} from "../../services/axios";
import {withRouter} from "react-router-dom";
import CommunicateError from "../Login/CommunicateError";

class Login extends Component {


    handleUserInput = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (evt) => {
        this.operation();
        evt.preventDefault();
        this.setState({loginEnabled: false});
        console.log("hello")
        const params = new URLSearchParams();
        params.append('username', this.state.username.trim());
        params.append('password', this.state.password.trim());

        axios.post('/login', params)
            .then((response) => {
                //console.log("Token XD : " + response.data.data.token);
                setToken(response.data.data.token)
                //console.log("get token : " + getToken());
                console.log("loggedIn token : " + loggedIn());
                //logout();
              //  login(response.data.token);
                console.log(response.data)
                this.setState({error: false, loginEnabled: true});
                this.props.history.push('/home');


            })
            .catch((error) => {
                this.setState({error: true, loginEnabled: true});
                console.log("error");
                this.operationError();
                setTimeout(() => {
                    this.setState({error: false});
                }, 2000);
            })

    }


    operation(){
        this.setState({
            showMe: false
        })
    }

    operationError(){
        this.setState({
            showMe: true
        })
    }


    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            showMe: false,

            error: false,
            loginEnabled: true
        }
    }

    render() {

        let statement = null;
        if ( this.state.showMe ) {
            statement = (
                <div>
                    <CommunicateError />
                </div>
            )
        }

        return (
            <div className={style.text}>
            <form>
                {this.state.value}
                <br /><br /><br />
                <h1>Login</h1><br />
                <input
                                className={style.box}
                                placeholder="Username"
                                name="username"
                                type="text"
                                onChange={this.handleUserInput}
                            />
                <input
                                className={style.box}
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this.handleUserInput}
                            />

                <button className={style.submit} onClick={this.handleSubmit} disabled={!this.state.loginEnabled}>Login</button><br />
                <Link className={style.link} to="/register">Don't have an account? <span className={style.linksignup}>Signup</span></Link>
                </form>
                {statement}
                <br /><br /><br /><br />
            </div>
    );
    }
}
export default withRouter(Login);
