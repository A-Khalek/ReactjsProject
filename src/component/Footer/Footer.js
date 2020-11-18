import React, {Component, Fragment} from 'react';
import {Container, Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Follow Me</h4>
                            <a href="#" className="socialNet"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a href="#" className="socialNet"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Address</h4>
                            <p className="clientDesc">Address: E-36,Road-7, Arambag Residential Area , Pallabi,Mirpur, Dhaka 1216</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} /> khalek.raju.bd@gmail.com</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faPhone} /> +8801742556567</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Information</h4>
                            <a href="#" className="footerLink">Contact Me</a><br/>
                            <a href="#" className="footerLink">About Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Legal</h4>
                           <a href="#" className="footerLink">Refund Policy</a><br/>
                            <a href="#" className="footerLink">Terms And Condition</a><br/>
                            <a href="#" className="footerLink">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a href="#" className="copyrightLink">khalek.com &copy; 2020-21</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;