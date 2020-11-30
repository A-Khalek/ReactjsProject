import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";

class PortfolioDescription extends Component {
    constructor(props) {
        super();
        this.state={
            projectId:props.id,
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.projectSelectAll).then(result=>{
            this.setState({myData:result,loading:false})
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {

        if(this.state.loading==true && this.state.error==false){
           return <Loading/>
        }else {
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
                    <Container className="mt-4 pt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }



    }
}

export default PortfolioDescription;