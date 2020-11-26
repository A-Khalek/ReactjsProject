import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import courseImg from "../../asset/image/courseImg.jpg"
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class Courses extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }


    componentDidMount() {
        RestClient.GetRequest(AppURL.CourseHome).then(result=>{
            this.setState({myData:result})
        })
    }


    render() {

        const myList = this.state.myData;
        const myView = myList.map(myList=> {

            return <Col lg={6} md={12} sm={12} className="p-2">
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <img className="courseImg" src={myList.Img_link}/>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <h4 className="courseTitle text-justify">{myList.short_title}</h4>
                        <p className="courseDesc text-justify">{myList.short_desc}</p>
                        <Link to="/CourseDetails" className="footerLink float-left courseDetailsBtn">Details</Link>
                    </Col>
                </Row>
            </Col>
        })


        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">Our Courses</h2>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;