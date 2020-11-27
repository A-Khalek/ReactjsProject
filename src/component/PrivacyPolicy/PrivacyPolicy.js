import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';


class PrivacyPolicy extends Component {
    constructor() {
        super();
        this.state={
            policy:"..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            this.setState({policy:result[0]['privacy']})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="courseDesc">
                            {ReactHtmlParser(this.state.policy)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyPolicy;