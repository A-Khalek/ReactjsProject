import React, {Component, Fragment} from 'react';
import  {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicsLogo from '../../asset/image/graphics.svg';
import AppURL from "../../RestAPI/AppURL";
import RestClient from "../RestClient/RestClient";

class Services extends Component {
    constructor() {
        super();
        this.state={
            serviceName:"",
            serviceDesc:"",
            serviceImg:""
        }
    }


    componentDidMount() {
        return RestClient.GetRequest(AppURL.serviceDetails).then(result=>{
            this.setState({serviceName:result[0]['service_name'],serviceDesc:result[0]['service_desc'],
                serviceImg:result[0]['service_img']})
        }).catch(error=>{
            this.setState({serviceName:'????',serviceDesc:'????',
                serviceImg:'????'})
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">My Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={this.state.serviceImg}/>
                                <h2 className="serviceName">{this.state.serviceName}</h2>
                                < p className="serviceDescription">{this.state.serviceDesc}</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h2 className="serviceName">Mobile App Development</h2>
                                <p className="serviceDescription">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;