import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';


class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state={
            MyProjectID:props.id,
            project_name:"",
            short_desc :"",
            project_feature: "",
            live_review:"",
            img_two:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.projectDetails+this.state.MyProjectID).then(result=>{
            this.setState({
                img_two:result[0]['img_two'],
                short_desc:result[0]['short_desc'],
                project_feature:result[0]['project_feature'],
                live_review:result[0]['live_review'],
                project_name:result[0]['project_name']
            })
        }).catch(error=>{

            return error;
        })
    }

    render() {


        return (
            <Fragment>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <img  className="projectDtlsImg" src={this.state.img_two}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="productDetailsTitle">{this.state.project_name}</h1>
                            <h6 className="productDetailsSubTitle">{this.state.short_desc}</h6>
                            <ul>
                                {ReactHtmlParser(this.state.project_feature)}
                            </ul>
                            <Button variant="primary">More info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;