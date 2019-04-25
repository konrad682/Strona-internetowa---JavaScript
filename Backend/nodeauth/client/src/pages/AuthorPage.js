import React, { Component } from 'react';

import Author from '../components/Author';
import Header from '../components/Header';

class AuthorPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Author />
            </div>
        );
    }
}

export default AuthorPage;
