import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageBanner p-0 text-center">
                    <div className="topPageOverlay">
                       <Container className="topPageContent ">
                           <Row>
                               <Col lg={12} md={12} sm={12}>
                                   <h1 className="PageTitle">{this.props.pageTitle}</h1>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;