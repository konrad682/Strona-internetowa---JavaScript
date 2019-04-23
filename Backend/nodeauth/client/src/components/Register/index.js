import React, { Component } from 'react';
import style from'./Register.module.css';
import { Link } from 'react-router-dom';
import axios from "../../services/axios";
import {withRouter} from "react-router-dom";
import CommunicateError from "./CommunicateError";
class Register extends Component {


    handleUserInput = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("register")
        this.setState({registerComplete: false});
        const params = new URLSearchParams();
        params.append('name', this.state.name.trim());
        params.append('email', this.state.email.trim());
        params.append('username', this.state.username.trim());
        params.append('password', this.state.password.trim());
        params.append('confirmPassword', this.state.confirmPassword.trim());

        axios.post('/register', params)
            .then((response) => {
                this.operation();
                console.log("response");
                console.log(response.data);
                this.setState({responseList: response.data.data});
                console.log(this.state.responseList);
                if(response.data.status == "Error"){
                    console.log("Niepowodzenie");
                    this.operationError();
                }
                else {
                    this.setState({error: false, registerComplete: true});
                    this.props.history.push('/login');
                }
            })
            .catch((error) => {

            this.setState({error: true, registerComplete: true});
            console.log("error");

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
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            responseList: [],
            showMe: false
        }
    }


    render() {

        let statement = null;
        if ( this.state.showMe ) {
            statement = (
            <div>
                { this.state.responseList.map((item, index) => {
                    return <CommunicateError
                        key={item.param}
                        comm = {item.msg}
                    />
                })}
            </div>
            )
        }


        return (

           <div className={style.text}>
                    <form>
                        <br /> <br /> <br />
                        <h1>Register</h1> <br />
                        <input
                            className={style.box}
                            placeholder="Name"
                            name="name"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="E-mail"
                            name="email"
                            type="text"
                            onChange={this.handleUserInput}
                        />
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
                        <input
                            className={style.box}
                            placeholder="Confirm password"
                            name="confirmPassword"
                            type="password"
                            onChange={this.handleUserInput}
                        />

                        <button className={style.submit} onClick={this.handleSubmit}>Register</button><br />
                        <Link className={style.link} to="/login">Don't have an account? <span className={style.linksignup}>Login</span></Link>
                    </form>
               {statement}
                <br /> <br /> <br /> <br /> <br />
                </div>
        );
    }
}
export default withRouter(Register);
