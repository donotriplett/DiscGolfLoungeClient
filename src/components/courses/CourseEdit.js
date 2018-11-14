import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CourseEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            course: "",
            rating: "",
            numberofholes: "",
            comments: ""
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.usercourses.id,
            course: this.props.usercourses.course,
            rating: this.props.usercourses.rating,
            numberofholes: this.props.usercourses.numberofholes,
            comments: this.props.usercourses.comments
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader toggle={this.props.toggle} charCode="X">Edit a course</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input id="course" type="text" name="course" value={this.state.course} placeholder="Enter a course name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="rating" id="rating" value={this.state.rating} onChange={this.handleChange} placeholder="rating">
                                    <option>Rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input id="numberofholes" type="number" name="numberofholes" value={this.state.numberofholes} placeholder="enter number of holes" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input id="comments" type="text" name="comments" value={this.state.comments} placeholder="enter additional comments" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CourseEdit;