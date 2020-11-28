import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class PortfolioDescription extends Component {
    constructor(props) {
        super();
        this.state={
            projectId:props.id,
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.projectSelectAll).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList = this.state.myData;
        const myView =   myList.map(myList=>{
            return <Col sm={12} md={6} lg={4} className="p-2">
                <Card className="projectCard">
                    <Card.Img variant="top" className="recentProjectImg"  src={myList.img_one} />
                    <Card.Body>

                        <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="projectCardTitleDesc">{myList.short_desc}</Card.Text>
                        <Link to={"/projectDetails/"+myList.id}>
                            <Button variant="primary" >
                                Details
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        })

        return (
            <Fragment>
               <Container className="mt-4 pt-5">
                   <Row>
                       {myView}
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default PortfolioDescription;