import React, { Component } from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import "./CourseTable.css";
import CourseCreate from './CourseCreate';

class CourseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div id="header"><h2>Visited Courses<Button id="add-course" onClick={this.toggle}>Add Course</Button></h2></div>
                        {this.state.modalOpen ? <CourseCreate updateTable={this.props.updateTable} toggle={this.toggle} token={this.props.token} /> : <div></div>}
                        <hr />
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Rating (0-10)</th>
                                    <th>Number of Holes</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.usercourses.map((usercourse, id) => {
                                        return (
                                            <tr key={id}>
                                                <th scope="row">{usercourse.course}</th>
                                                <td>{usercourse.rating}</td>
                                                <td>{usercourse.numberofholes}</td>
                                                <td id="usercomments">{usercourse.comments}</td>
                                                <td>
                                                    <Button id={usercourse.id} className="delete-button" onClick={this.props.delete} outline color="secondary">Delete</Button>
                                                    <Button id={usercourse.id} onClick={e => this.props.update(e, usercourse)} outline color="secondary">Update</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default CourseTable;