import React, { Component } from 'react';

import DeleteForm from '../components/DeleteForm';
import Header from '../components/Header';

class DeleteFormPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <DeleteForm />
            </div>
        );
    }
}

export default DeleteFormPage;
