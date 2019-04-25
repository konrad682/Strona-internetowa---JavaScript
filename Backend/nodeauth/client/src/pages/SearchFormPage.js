import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';
import Header from '../components/Header';

class SearchFormPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchForm />
            </div>
        );
    }
}

export default SearchFormPage;
