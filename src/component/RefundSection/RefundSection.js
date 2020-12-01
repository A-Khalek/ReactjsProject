import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser  from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";


class RefundSection extends Component {

    constructor() {
        super();
        this.state={
            refund:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else {
                this.setState({refund:result[0]['refund'],loading:false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {
        if (this.state.loading==true && this.state.error == false){
            return <Loading/>
        }
        else if (this.state.loading == false) {
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
        else if (this.state.error == true){
            return <WentWrong/>
        }
    }
}

export default RefundSection;