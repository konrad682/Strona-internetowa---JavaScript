import React, { Component } from 'react';

import Contact from '../components/Contact';
import Header from '../components/Header';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Contact />
            </div>
        );
    }
}

export default ContactPage;
