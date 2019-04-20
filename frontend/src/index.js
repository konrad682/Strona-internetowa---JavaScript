import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegulationsPage from './pages/RegulaionsPage';
import AuthorPage from './pages/AuthorPage';
import ContactPage from './pages/ContactPage';
import ContainerRoute from './components/ContainerRoute/ContainerRoute';


class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <ContainerRoute path="/" exact component={HomePage} />
                    <ContainerRoute path="/login" exact component={LoginPage} />
                    <ContainerRoute path="/regulations" exact component={RegulationsPage} />
                    <ContainerRoute path="/author" exact component={AuthorPage} />
                    <ContainerRoute path="/contact" exact component={ContactPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}



ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
