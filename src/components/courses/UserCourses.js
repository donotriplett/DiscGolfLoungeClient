import React, { Component } from "react";
import CourseTable from "./CourseTable";
import CourseEdit from "./CourseEdit";
import APIURL from "../../helpers/enviroment";

export default class UserCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercourses: [],
            updatePressed: false,
            courseToUpdate: {}
        }
    }

    componentDidMount = () => {
        this.fetchUserCourses();
    }

    fetchUserCourses = () => {
        fetch(`${APIURL}/usercourses/get`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then((res) => res.json())
            .then((data) => {
                return this.setState({ usercourses: data })
            })
    }

    userCourseDelete = (event) => {
        fetch(`${APIURL}/usercourses/delete/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ course: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then((res) => this.fetchUserCourses())
    }

    coursesUpdate = (event, usercourse) => {
        fetch(`${APIURL}/usercourses/update/${usercourse.id}`, {
            method: 'PUT',
            body: JSON.stringify({ usercourse: usercourse }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchUserCourses();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedCourses = (event, usercourse) => {
        this.setState({
            courseToUpdate: usercourse,
            updatePressed: true
        })
    }

    render() {
        return (
            <div>
                <CourseTable usercourses={this.state.usercourses} updateTable={this.fetchUserCourses} token={this.props.token} delete={this.userCourseDelete} update={this.setUpdatedCourses} />
                {this.state.updatePressed ? <CourseEdit update={this.coursesUpdate} token={this.props.token} usercourses={this.state.courseToUpdate} /> : <div></div>}
            </div>
        )
    }

}

