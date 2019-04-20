import React, { Component } from 'react';
import './Login.module.css';
//import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1>Login</h1>
                        </div>
                        <form className="box-form">
                            <input
                                className="form-item"
                                placeholder="Username"
                                name="username"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
                        </form>
                        {/*<Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>*/}
                    </div>
                    <div className="signiture">
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Login;
