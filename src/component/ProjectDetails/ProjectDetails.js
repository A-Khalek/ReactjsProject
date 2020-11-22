import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import projectDetailsImg from "../../asset/image/projectDetailsImg.webp";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <img  className="courseImg" src={projectDetailsImg}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="productDetailsTitle">Foll Bazzar</h1>
                            <h6 className="productDetailsSubTitle">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</h6>
                            <ul>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Admin Can Add, Edit, Delete Product Dynamically</li>
                                <li>Dynamic shipping point facilities</li>
                                <li>Admin can send special offer for special user</li>
                                <li>App force update system form server</li>
                                <li>App can receive push notification anytime also after the app is closed.</li>
                                <li>Admin can send free message in app inbox</li>
                                <li>Admin can push notification to specific user</li>
                                <li>User can make wishlist</li>
                                <li>User can see order history and invoice alsov</li>
                                <li>Dynamic Product Slider</li>
                                <li>Video Blog</li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;