import React, { Component } from 'react';
import style from'./Form.module.css';
import axios from "../../services/axios";
import {withRouter} from "react-router-dom";
class Form extends Component {


    handleUserInput = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("form")
        this.setState({formComplete: false});
        const params = new URLSearchParams();
        params.append('city', this.state.city.trim());
        params.append('state', this.state.state.trim());
        params.append('name1', this.state.name1.trim());
        params.append('surname', this.state.surname.trim());
        params.append('email1', this.state.email1.trim());
        params.append('university', this.state.university.trim());
        params.append('position', this.state.position.trim());
        params.append('textarea', this.state.textarea.trim());

        axios.post('/form', params)
            .then((response) => {
                console.log("response");
                console.log(response.data);
                this.setState({error: false, formComplete: true});
                this.props.history.push('/mainpage');
            })
            .catch((error) => {

                this.setState({error: true, formComplete: true});
                console.log("error");

                setTimeout(() => {
                    this.setState({error: false});
                }, 2000);
            })

    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            city: '',
            state: '',
            name1: '',
            surname: '',
            email1: '',
            university: '',
            position: '',
            textarea: ''
        }
    }


    render() {
        return (
            <div className={style.text}>
                    <form>
                        <h1>Formularz</h1>
                        <br />
                        <p>Wypłenij formularz:</p>
                        <input
                            className={style.box}
                            placeholder="City"
                            name="city"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="state"
                            name="state"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="Name"
                            name="name1"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="Surname"
                            name="surname"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="email"
                            name="email1"
                            type="email"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="University"
                            name="university"
                            type="text"
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={style.box}
                            placeholder="position"
                            name="position"
                            type="text"
                            onChange={this.handleUserInput}
                        />

                        <input
                            className={style.box}
                            placeholder="textarea"
                            name="textarea"
                            type="text"
                            onChange={this.handleUserInput}
                        />

                        <button className={style.submit} onClick={this.handleSubmit}>Wyślij</button><br />

                    </form>
            </div>

        );
    }
}
export default withRouter(Form);
