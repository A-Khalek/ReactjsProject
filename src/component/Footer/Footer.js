import React, {Component, Fragment} from 'react';
import  {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class Footer extends Component {

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
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit']})
        })
    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Follow Me</h4>
                            <a target="_blank" href={"//"+this.state.facebook} className="socialNet"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a target="_blank" href={"//"+this.state.youtube} className="socialNet"><FontAwesomeIcon className="Youtube" icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h4 className="clientName">Address</h4>
                            <p className="clientDesc">{this.state.address}</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                            <p className="clientDesc"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>
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
                    <Link to="#" className="copyrightLink">{this.state.footer_credit}</Link>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;