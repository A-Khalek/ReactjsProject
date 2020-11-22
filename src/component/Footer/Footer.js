import React, {Component, Fragment} from 'react';
import  {Container, Row, Col,Nav, NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Follow Me</h4>
                            <a href="https://www.facebook.com/" className="socialNet"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a href="https://www.youtube.com/" className="socialNet"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Address</h4>
                            <p className="clientDesc">Address: E-36,Road-7, Arambag Residential Area , Pallabi,Mirpur, Dhaka 1216</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} /> khalek.raju.bd@gmail.com</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faPhone} /> +8801742556567</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Information</h4>
                            <Link to="/contact" className="footerLink">Contact Me</Link><br/>
                            <Link to="/about" className="footerLink">About Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Legal</h4>
                           <Link className="footerLink" to="/Refund" >Refund Policy</Link><br/>
                            <Link to="/TermsCondition" className="footerLink">Terms And Condition</Link><br/>
                            <Link to="/Privacy" className="footerLink">Privacy Policy</Link>
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