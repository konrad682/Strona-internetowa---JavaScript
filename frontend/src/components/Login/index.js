import React, { Component } from 'react';
import style from'./Login.module.css';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (

            <React.Fragment>
                <div className={style.mainwrapper}>
            <form className={style.box}>
                <h1>Login</h1>
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

                <button className={style.submit} onClick={this.handleFormSubmit}>Login</button><br />
                <Link className={style.link} to="/register">Don't have an account? <span className={style.linksignup}>Signup</span></Link>
                </form>
                </div>

            </React.Fragment>
    );
    }
}
export default Login;
