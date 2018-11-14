import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import CourseResults from "./CourseResults";
import "./Course.css";

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            filteredResults: [],
            usercourses: [],
            updatePressed: false,
            courseToUpdate: {}
        }
    }

    handleKeyUp = () => {
        let val = document.getElementById('searchInput').value;
        if (val === "") {
            this.setState({
                filteredResults: []
            })
        } else {
            let results = this.state.results

            let filtered = results.filter(result => {
                if (result.coursename.toLowerCase().includes(val.toLowerCase())) {
                    return result
                } else if (result.city.toLowerCase().includes(val.toLowerCase())) {
                    return result
                } else {
                    return null
                }
            })
            this.setState({ filteredResults: filtered, results: results })
        }
    }

    fetchCourses = () => {
        fetch("http://localhost:3000/courses/get", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then((res) => res.json())
            .then((coursesData) => {
                return this.setState({ results: coursesData })
            })
    }

    componentDidMount() {
        this.fetchCourses();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col md="2" />
                        <Col md="8">
                            <Form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                                <FormGroup>
                                    <h2> Search for a disc golf course in Indiana </h2>
                                    <hr />
                                    <Input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search by course or city" required />
                                    <CourseResults results={this.state.filteredResults} token={this.props.token} />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="2" id="right-picture" />
                    </Row>
                </Container>
            </div>
        );
    }
}