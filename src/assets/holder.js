userCourseDelete = (event) => {
    fetch(`http://localhost:3000/usercourses/delete/${event.target.id}`, {
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
    fetch(`http://localhost:3000/usercourses/update/${usercourse.id}`, {
        method: 'PUT',
        body: JSON.stringify({ usercourse: usercourse }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
        .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchUserCourses();
        })
}

setUpdatedCourses = (event, usercourse) => {
    this.setState({
        courseToUpdate: usercourse,
        updatePressed: true
    })
}