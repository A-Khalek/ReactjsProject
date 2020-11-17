import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summary p-0">
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={6}>
                                    <h1>Total Projects</h1>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <h1>Total Clients</h1>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <h1>How i Work</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;