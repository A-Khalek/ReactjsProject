import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import videoPoster from "../../asset/image/videoSintel.png";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="courseDetailsTitle" >Skill You Get</h1>
                            <ul>
                                <li>Ultimate Dynamic product category</li>
                                <li>Admin can add, edit, delete product dynamically</li>
                                <li>Dynamic shipping pint facilites </li>
                                <li>App force update system for server.</li>
                                <li>User can make wish list.</li>
                            </ul>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player poster={videoPoster} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;