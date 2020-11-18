import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import courseImg from "../../asset/image/courseImg.jpg"

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">Our Courses</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                           <Row>
                               <Col lg={6} md={12} sm={12}><h4>Image</h4></Col>
                               <Col lg={6} md={12} sm={12}>
                                   <h4>Web Development</h4>
                                   <p>I build native and cross platform mobile app for your business</p>
                                   <button variant="primary">Details</button>
                               </Col>
                           </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={12} sm={12}><h4>Image</h4></Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4>Web Development</h4>
                                    <p>I build native and cross platform mobile app for your business</p>
                                    <button variant="primary">Details</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={12} sm={12}><h4>Image</h4></Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4>Web Development</h4>
                                    <p>I build native and cross platform mobile app for your business</p>
                                    <button variant="primary">Details</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={12} sm={12}><h4>Image</h4></Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4>Web Development</h4>
                                    <p>I build native and cross platform mobile app for your business</p>
                                    <button variant="primary">Details</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Courses;