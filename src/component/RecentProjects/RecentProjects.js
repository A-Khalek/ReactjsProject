import React, {Component, Fragment} from 'react';
import  {Col, Container, Row,Card,Button} from "react-bootstrap";
import recProjectImg from "../../asset/image/projImg.jpg"
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";



class RecentProjects extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.project3).then(result=>{
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
                                    <Link to={"/projectDetails/"+myList.id+"/"+myList.project_name}>
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
                <Container className="text-center">
                    <h2 className="serviceNameTitle">RECENT PROJECTS</h2>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;