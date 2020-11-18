import React, {Component, Fragment} from 'react';
import  {Col, Container, Row,Card,Button} from "react-bootstrap";
import recProjectImg from "../../asset/image/projImg.jpg"

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">RECENT PROJECTS</h2>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col >

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={recProjectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDesc">
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