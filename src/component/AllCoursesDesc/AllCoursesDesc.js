import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg from "../../asset/image/courseImg.jpg";

class AllCoursesDesc extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 pt-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImg" src={courseImg}/>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h4 className="courseTitle text-justify"> Web Development</h4>
                                    <p className="courseDesc text-justify">I build native and cross platform mobile app for your business</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllCoursesDesc;