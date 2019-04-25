import React, { Component } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default HomePage;
