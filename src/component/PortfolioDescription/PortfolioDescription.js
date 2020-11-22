import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import recProjectImg from "../../asset/image/projImg.jpg";
import {Link} from "react-router-dom";

class PortfolioDescription extends Component {
    render() {
        return (
            <Fragment>
               <Container className="mt-4 pt-5">
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
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
                                   <Link to="/projectDetails">
                                       <Button variant="primary" >
                                           Details
                                       </Button>
                                   </Link>
                               </Card.Body>
                           </Card>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default PortfolioDescription;