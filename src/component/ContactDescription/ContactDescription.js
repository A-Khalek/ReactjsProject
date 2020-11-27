import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import {Row} from "react-bootstrap/cjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, Marker } from "react-google-maps"
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class ContactDescription extends Component {
    constructor() {
        super();
        this.state={
            address:"..",
            email:"..",
            phone:"..",
            facebook:"..",
            youtube:"..",
            footer_credit:".."
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.footerDetails).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                })
        })
    }


    render() {
        return (
            <Fragment>
                <Container  className="pt-5 pl-0">
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

                        <Col lg={4} md={12} sm={12} className="text-justify pl-3">
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="clientDesc">{this.state.address}</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} />{this.state.email}</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faPhone} />{this.state.phone}</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactDescription;