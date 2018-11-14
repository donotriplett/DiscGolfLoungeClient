import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Route, Switch, } from "react-router-dom"
import Course from "../courses/Course";
import UserCourses from "../courses/UserCourses";
import Splash from "./Splash";

const Sidebar = (props) => (

    <div className="sidebar">
        <Breadcrumb>
            <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/courses">Indiana Courses</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/usercourses">Your Courses</BreadcrumbItem>
        </Breadcrumb>
        <Switch>
            <Route exact path="/"><Splash /></Route>
            <Route exact path="/courses"><Course token={props.sessionToken} /></Route>
            <Route exact path="/usercourses"><UserCourses token={props.sessionToken} /></Route>
        </Switch>
    </div>
)

export default Sidebar