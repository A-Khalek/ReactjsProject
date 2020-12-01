import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ConditionDetails extends Component {

    constructor() {
        super();
        this.state={
            condition:"",
            loading:true,
            error:false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            if (result==null){
                this.setState({error:false})
            }
            else {
                this.setState({condition:result[0]['terms'],loading:false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {
        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }
        else if (this.state.loading==false){
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
        else if (this.state.error==true){
            return <WentWrong/>
        }
    }

}

export default ConditionDetails;