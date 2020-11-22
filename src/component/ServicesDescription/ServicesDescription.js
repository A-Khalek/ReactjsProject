import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import webLogo from "../../asset/image/web.svg";
import mobileLogo from "../../asset/image/mobile.svg";
import graphicsLogo from "../../asset/image/graphics.svg";

class ServicesDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">My Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h2 className="serviceName">Web Development</h2>
                                < p className="serviceDescription">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h2 className="serviceName">Mobile App Development</h2>
                                <p className="serviceDescription">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServicesDescription;