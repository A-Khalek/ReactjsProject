import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class ConditionDetails extends Component {

    constructor() {
        super();
        this.state={
            condition:"",
            
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            this.setState({condition:result[0]['terms']})
        })
    }

    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                       <p>
                           {this.state.condition}
                       </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ConditionDetails;