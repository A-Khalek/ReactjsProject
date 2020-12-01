import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, ResponsiveContainer, XAxis,Tooltip} from "recharts";
import BarChart from "recharts/lib/chart/BarChart";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Analysis extends Component {
    
    constructor() {
        super();
        this.state={
            data:[],
            techDesc:" ",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
            if (result==null){
                this.setState({error:true})
            }
            else {
                this.setState({data:result,loading:false})
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
        RestClient.GetRequest(AppURL.tectDesc).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else {
                this.setState({techDesc:result[0]['technology_desc'],loading:false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {
        var blue = 'rgba(0,115,230,0.8)';
        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false) {
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceNameTitle">Technology Used</h1>
                        <Row>
                            <Col style={{width: '100%', height: '300px'}} lg={6} md={12} sm={12}>f
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="technology"/>
                                        <Tooltip/>
                                        <Bar dataKey="project" fill={blue}></Bar>
                                    </BarChart>
                                </ResponsiveContainer>

                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div>
                                    <p className="desc text-justify">
                                        {ReactHtmlParser(this.state.techDesc)}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if (this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default Analysis;