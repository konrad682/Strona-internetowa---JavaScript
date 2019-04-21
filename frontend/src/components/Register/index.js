import React, { Component } from 'react';
import style from'./Register.module.css';
import { Link } from 'react-router-dom';
class Register extends Component {
    render() {
        return (

            <React.Fragment>
                <div className={style.mainwrapper}>
                    <form className={style.box}>
                        <h1>Register</h1>
                        <input
                            className={style.name}
                            placeholder="Name"
                            name="name"
                            type="text"
                            onChange={this._handleChange}
                        />
                        <input
                            className={style.email}
                            placeholder="E-mail"
                            name="email"
                            type="text"
                            onChange={this._handleChange}
                        />
                        <input
                            className={style.username}
                            placeholder="Username"
                            name="username"
                            type="text"
                            onChange={this._handleChange}
                        />
                        <input
                            className={style.register}
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this._handleChange}
                        />
                        <input
                            className={style.register}
                            placeholder="Confirm password"
                            name="confirmPassword"
                            type="password"
                            onChange={this._handleChange}
                        />

                        <button className={style.submit} onClick={this.handleFormSubmit}>Register</button><br />
                        <Link className={style.link} to="/login">Don't have an account? <span className={style.linksignup}>Login</span></Link>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}
export default Register;
