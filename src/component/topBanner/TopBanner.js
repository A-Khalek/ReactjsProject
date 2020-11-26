import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";





export default  class TopBanner extends Component {

    constructor() {
        super();
        this.state={
            title:"",
            subTitle:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.homeTitle).then(result=>{
            this.setState({title:result[0]['home_title'],subTitle:result[0]['home_subtitle']})
        })
    }

    render() {
        return (
            <Fragment>
             <Container fluid={true} className="topFixedBanner p-0" >
                <div className="topBannerOverlay" >
                    <Container className="topContent">
                       <Row>
                           <Col className="text-center">
                               <h1 className="topTitle">{this.state.title}</h1>
                               <h4 className="topSubTitle">{this.state.subTitle}</h4>
                               <Button variant="primary">More Info</Button>
                           </Col>
                       </Row>
                    </Container>
                </div>
             </Container>
            </Fragment>
        );
    }
}

