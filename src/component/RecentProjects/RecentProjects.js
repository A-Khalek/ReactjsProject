import React, {Component, Fragment} from 'react';
import  {Col, Container, Row,Card,Button} from "react-bootstrap";
import recProjectImg from "../../asset/image/recentProjectImg.svg"

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">RECENT PROJECTS</h2>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col >

                        <Col sm={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;