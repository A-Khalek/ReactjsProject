import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, ResponsiveContainer, XAxis,Tooltip} from "recharts";
import BarChart from "recharts/lib/chart/BarChart";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component {
    
    constructor() {
        super();
        this.state={
            data:[],
            techDesc:" "
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
            this.setState({data:result})
        })
        RestClient.GetRequest(AppURL.tectDesc).then(result=>{
            this.setState({techDesc:result[0]['technology_desc']})
        })
    }

    render() {
        var blue='rgba(0,115,230,0.8)';
        return (
            <div>
              <Fragment>
                  <Container className="text-center">
                      <h1 className="serviceNameTitle">Technology Used</h1>
                      <Row>
                          <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>f
                              <ResponsiveContainer>
                                  <BarChart width={100} height={300} data={this.state.data} >
                                      <XAxis dataKey="technology"/>
                                      <Tooltip/>
                                      <Bar dataKey="project" fill={blue}></Bar>
                                  </BarChart>
                              </ResponsiveContainer>

                          </Col>
                          <Col lg={6} md={12} sm={12}>
                              <div>
                                <p className="desc text-justify">
                                    { ReactHtmlParser(this.state.techDesc) }
                                </p>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </Fragment>
            </div>
        );
    }
}

export default Analysis;