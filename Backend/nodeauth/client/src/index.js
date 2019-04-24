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
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';
import SearchFormPage from './pages/SearchFormPage';
import DeleteFormPage from './pages/DeleteFormPage';
import NotFound from "./components/NotFound/NotFound";
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
                    <ContainerRoute path="/register" exact component={RegisterPage} />
                    <ContainerRoute path="/home" exact component={MainPage} />
                    <ContainerRoute path="/form" exact component={FormPage} />
                    <ContainerRoute path="/search" exact component={SearchFormPage} />
                    <ContainerRoute path="/delete" exact component={DeleteFormPage} />
                    <ContainerRoute path="/delete" exact component={DeleteFormPage} />
                   <ContainerRoute exact component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

Router.propTypes = {};
Router.defaultProps = {};

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
