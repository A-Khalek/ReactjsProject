import React, {Component, Fragment} from 'react';
import  {Col, Container,Card, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summary p-0">
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row className="text-center ">
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection" >
                                        <Col >
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Client</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col  lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How i work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify "><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering </p>
                                                <p className="cardSubTitle text-justify "><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis  </p>
                                                <p className="cardSubTitle text-justify "><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing </p>
                                                <p className="cardSubTitle text-justify "><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
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