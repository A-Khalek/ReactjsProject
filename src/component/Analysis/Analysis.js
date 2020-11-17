import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Analysis extends Component {
    render() {
        return (
            <div>
              <Fragment>
                  <Container className="text-center">
                      <h1 className="serviceNameTitle">Technology Used</h1>
                      <Row>
                          <Col lg={6} md={12} sm={12}>
                              <div>
                                
                              </div>
                          </Col>
                          <Col lg={6} md={12} sm={12}>
                              <div>
                                <p className="desc text-justify">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.
                                   <br/><br/> Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                                    <br/><br/> According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </Fragment>
            </div>
        );
    }
}

export default Analysis;