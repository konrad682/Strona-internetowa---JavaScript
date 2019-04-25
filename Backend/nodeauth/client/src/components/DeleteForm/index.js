import React, { Component } from 'react';
import style from'./DeleteForm.module.css';
import axios, {loggedIn} from "../../services/axios";
import Question from "../DeleteForm/Question";
import {withRouter} from "react-router-dom";
class DeleteForm extends Component {


    handleUserInput = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (evt) => {
        this.operation();
        evt.preventDefault();
        console.log("deleteForm")
        this.setState({DeleteformComplete: false});
        const params = new URLSearchParams();
        params.append('valueToDelete', this.state.valueToDelete.trim());


        axios.post('/delete', params)
            .then((response) => {
                console.log("response");
                console.log(response.data);
                this.setState({error: false, DeleteformComplete: true});
               // this.props.history.push('/mainpage');
            })
            .catch((error) => {

                this.setState({error: true, DeleteformComplete: true});
                console.log("error");

                setTimeout(() => {
                    this.setState({error: false});
                }, 2000);
            })

    }
    checkUserIsLogiIn = () =>{
        if(!loggedIn()){
            this.props.history.push('/login');
        }
    }

    constructor(props, context) {
        super(props, context);
        this.checkUserIsLogiIn();
        this.state = {
            valueToDelete: '',
            showMe: false
        }
    }

    operation(){
        this.setState({
            showMe: true
        })
    }

    render() {
        let questions = null;

        if ( this.state.showMe ) {
            questions = (
                <div>
                    <Question/>
                </div>
            )
        }
        return (
            <div className={style.text}>
            <form>
                <br />
                    <h1>Usunięcie formualrza</h1><br /><br />
                    <p>Wpisz E-mail formularza, który chcesz usunąć</p>

                <input
                    className={style.name}
                    placeholder="E-mail formularza"
                    name="valueToDelete"
                    type="text"
                    onChange={this.handleUserInput}
                />

                <button className={style.submit} onClick={this.handleSubmit}>Wyślij</button>
            </form>

                {questions}
                <br /><br /><br /><br /><br />
            </div>
        );
    }
}
export default withRouter(DeleteForm);
