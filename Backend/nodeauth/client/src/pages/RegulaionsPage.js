import React, { Component } from 'react';

import Regulations from '../components/Regulations';
import Header from '../components/Header';

class RegulationsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Regulations />
            </div>
        );
    }
}

export default RegulationsPage;
