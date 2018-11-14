import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Auth.css";
import APIURL from "../../helpers/enviroment";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showError: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/user/create`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password } }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((response) => {
                if (response.status !== 200) {
                    this.setState({ showError: true })
                } else {
                    response.json().then((data) => {
                        this.props.setToken(data.sessionToken)
                    })
                }
            })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <h6>Please fill out the form to create an account</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required />
                    </FormGroup>
                    {this.state.showError === true ? <div className="login-error">User already exists, please use a different username!</div> : ""}
                    <Button type="submit" id="submit-button"><h6>Submit</h6></Button>
                </Form>
            </div>
        )
    }
}