import React, { Component } from 'react';

import Register from '../components/Register';
import Header from '../components/Header';

class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Register />
            </div>
        );
    }
}

export default RegisterPage;
