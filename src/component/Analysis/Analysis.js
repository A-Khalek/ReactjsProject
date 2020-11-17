import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, ResponsiveContainer, XAxis,Tooltip} from "recharts";
import BarChart from "recharts/lib/chart/BarChart";

class Analysis extends Component {
    
    constructor() {
        super();
        this.state={
            data:[
                {Technology:'JAVA',Project:100},
                {Technology:'KOTLIN',Project:40},
                {Technology:'SQL',Project:100},
                {Technology:'BOOT',Project:80},
                {Technology:'JQUERY',Project:95},
                {Technology:'REACT',Project:60},
                {Technology:'PHP',Project:65},
                {Technology:'ANGULAR',Project:100}
            ]
        }
    }
    
    render() {
        var blue='rgba(0,115,230,0.8)';
        return (
            <div>
              <Fragment>
                  <Container className="text-center">
                      <h1 className="serviceNameTitle">Technology Used</h1>
                      <Row>
                          <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                              <ResponsiveContainer>
                                  <BarChart width={100} height={300} data={this.state.data} >
                                      <XAxis dataKey="Technology"/>
                                      <Tooltip/>
                                      <Bar dataKey="Project" fill={blue}>

                                      </Bar>
                                  </BarChart>
                              </ResponsiveContainer>

                          </Col>
                          <Col lg={6} md={12} sm={12}>
                              <div>
                                <p className="desc text-justify">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.
                                   <br/><br/> Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                                    <br/><br/> According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
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