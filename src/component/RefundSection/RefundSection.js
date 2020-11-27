import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser  from 'react-html-parser';


class RefundSection extends Component {

    constructor() {
        super();
        this.state={
            refund:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
             this.setState({refund:result[0]['refund']})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                           <ul>
                               {ReactHtmlParser(this.state.refund)}
                           </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundSection;