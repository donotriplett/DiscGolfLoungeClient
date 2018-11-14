import React, { Component } from "react";
import "./CourseResults.css";
import CourseTransfer from "./CourseTransfer";

class CourseResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseToTransfer: [],
            modalOpen: false,
            course: "",
            rating: "",
            numberofholes: "",
            comments: ""
        }
    }

    transferCourse = (event, usercourse) => {
        event.preventDefault();
        fetch("http://localhost:3000/usercourses/create", {
            method: "POST",
            body: JSON.stringify({ usercourse: usercourse }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then(this.setState({ modalOpen: !this.state.modalOpen }))
    }

    setTransferedCourses = (event, usercourse) => {
        console.log(usercourse);
        this.setState({
            courseToTransfer: usercourse,
        })
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <ul id="results">
                {
                    this.props.results.map((result) =>
                        <li id="mappedresults" key={result.id}>
                            <h6>{result.coursename}</h6>
                            <h6>{result.address}</h6>
                            <h6>{result.city}{", "}{result.state}{" "}{result.zipcode}</h6>
                            <h6>Number of Holes: {result.numberofholes}</h6>
                            <button
                            data={result} onClick={event => {this.setTransferedCourses(event, result); this.toggle() }}>
                            {this.state.modalOpen ? <CourseTransfer toggle={this.toggle} transfer={this.transferCourse} token={this.props.token} usercourse={this.state.courseToTransfer} /> : <div></div>}
                            Add to visited
                            </button>
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default CourseResults