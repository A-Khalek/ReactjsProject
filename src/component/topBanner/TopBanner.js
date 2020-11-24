import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";




class TopBanner extends Component {

    componentDidMount() {
        RestClient.getRequest(AppURL.homeTitle);
    }

    render() {
        return (
            <Fragment>
             <Container fluid={true} className="topFixedBanner p-0" >
                <div className="topBannerOverlay" >
                    <Container className="topContent">
                       <Row>
                           <Col className="text-center">
                               <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                               <h4 className="topSubTitle">Mobile & Web Developer</h4>
                               <Button variant="primary">More Info</Button>
                           </Col>
                       </Row>
                    </Container>
                </div>
             </Container>
            </Fragment>
        );
    }
}

export default TopBanner;