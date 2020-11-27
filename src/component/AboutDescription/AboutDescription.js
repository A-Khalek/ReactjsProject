import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class AboutDescription extends Component {

    constructor() {
        super();
        this.state={
            myself:"...",
            mission:"...",
            vision:"..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.about).then(result=>{
            this.setState({myself:result[0]['myself']})
        })
        RestClient.GetRequest(AppURL.about).then(result=>{
            this.setState({mission:result[0]['mission']})
        })
        RestClient.GetRequest(AppURL.about).then(result=>{
            this.setState({vision:result[0]['vision']})
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="pt-4 mt-4">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Who i AM</h1>
                            <hr/>
                            <p className="serviceDescription">{this.state.myself}</p>

                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">{this.state.mission}</p>

                            <h1 className="serviceName">My Vision</h1>
                            <hr/>
                            <p className="serviceDescription">{this.state.vision}</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;