import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ServicesDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container  className="pt-5 pl-0">
                    <h2 className="serviceNameTitle text-center">My Services</h2>
                    <Row>
                        <Col lg={8} md={12} sm={12} className="pl-0">
                            <h2 className="serviceName">Quick Connect</h2>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="float-left">Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="float-left">Email Address</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="float-left">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={4} md={12} sm={12} className="text-justify pl-3 ">
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="clientDesc">Address: E-36,Road-7, Arambag Residential Area , Pallabi,Mirpur, Dhaka 1216</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} /> khalek.raju.bd@gmail.com</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faPhone} /> +8801742556567</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServicesDescription;