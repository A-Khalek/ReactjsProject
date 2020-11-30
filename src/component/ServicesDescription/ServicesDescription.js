import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";    
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class ServicesDescription extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        return RestClient.GetRequest(AppURL.serviceDetails).then(result=>{
            this.setState({myData:result})
        }).catch(error=>{
            return this.setState({error:true})
        })
    }


    render() {

        let myList = this.state.myData;
        let myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12} >
                <div className="serviceCard text-center">
                    <img src={myList.service_img}/>
                    <h2 className="serviceName">{myList.service_name}</h2>
                    < p className="serviceDescription">{myList.service_desc}</p>
                </div>
            </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">My Services</h2>
                    <Row >
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServicesDescription;