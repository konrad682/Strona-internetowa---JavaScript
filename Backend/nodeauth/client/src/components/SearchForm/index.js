import React, { Component } from 'react';
import style from './SearchForm.module.css';
import axios from "../../services/axios";
import Question from "./Question";
class SearchForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            optionForm: 'Surname',
            searchText: '',
            showMe: true,
            FormList: [],
            displayQuestion: false
        }

       // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    operation(){
        this.setState({
            showMe: !this.state.showMe
        })
    }

    handleUserInputOption = (evt) => {

        const value = evt.target.value;
        this.setState({optionForm: evt.target.value});

    }

    handleUserInput = (evt) => {

        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({[name]: value});

    }

    handleSubmit = (evt) => {
        this.operation();
        evt.preventDefault();
        this.setState({searchFormComplete: false});
        console.log("search")
        const params = new URLSearchParams();
        params.append('optionForm', this.state.optionForm.trim());
        params.append('searchText', this.state.searchText.trim());

        axios.post('/search', params)
            .then((response) => {
                console.log("response");
                this.setState({FormList: response.data.data});
                //console.log(response.data);
                console.log(this.state.FormList);
                this.setState({error: false, searchFormComplete: true});
            })
            .catch((error) => {

                this.setState({error: true, searchFormComplete: true});
                console.log("error");

                setTimeout(() => {
                    this.setState({error: false});
                }, 2000);
            })

        // console.log(this.state.value)
        // alert('wybrałes opcje ' + this.state.value);
        // event.preventDefault();
    }



    render() {
        let questions = null;
        //if ( this.state.showMe ) {
            questions = (
                <div>
                    { this.state.FormList.map((item, index) => {
                        return <Question key={item._id}
                                         name={item.name1}
                                         surname={item.surname}
                                         email={item.email1}
                                         city = {item.city}
                                         position = {item.position}
                                         university = {item.university}
                                         textarea = {item.textarea}
                        />
                    })}
                </div>
            )
       // }

        return (

                <div className={style.text}>

                    <h2>Wyszukiwarka: </h2><br />

                        <form onSubmit={this.handleSubmit}>
                            <div className={style.body}>
                                <label>
                                    Wybierz opcję przez, którą chcesz wyszukiwać:<br/>
                                    <select className={style.selectbox} value={this.state.optionForm} onChange={this.handleUserInputOption}>
                                        <option value="Position">Pozycja</option>
                                        <option value="University">Uniwersytet</option>
                                        <option value="Name">Imię</option>
                                        <option value="Surname">Nazwisko</option>
                                    </select>
                                </label>
                            </div>
                            <input
                                value={this.state.searchText}
                                className={style.body}
                                placeholder="Wpisz tekst..."
                                name="searchText"
                                type="text"
                                onChange={this.handleUserInput}
                            />

                            <button className={style.submit} onClick={this.handleSubmit}>Search</button>
                            <br/>
                        </form>

                    {questions}

                 </div>
        );
    }
}
export default SearchForm;
