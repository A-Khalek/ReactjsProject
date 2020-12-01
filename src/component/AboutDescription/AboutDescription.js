import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AboutDescription extends Component {

    constructor() {
        super();
        this.state={
            myself:"",
            mission:"",
            vision:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.about).then(result=>{
            if (result==null){
                this.setState({error:true})
            }
            else{
                this.setState({
                    myself:result[0]['myself'],
                    mission:result[0]['mission'],
                    vision:result[0]['vision'],
                    loading:false})
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }


    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false) {
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
        else if(this.state.error==true){
            return <WentWrong/>
        }


    }
}

export default AboutDescription;