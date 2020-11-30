import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import videoPoster from "../../asset/image/videoSintel.png";
import {BigPlayButton, Player} from "video-react";
import ReactHTMLParser from 'react-html-parser';
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";


class CourseDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            MyCourseID:props.id,
            // LongTitle:"",
            SkillAll:"",
            VideoUrl:"",
            // ImgLink:"",
            MoreInfoURL:"",
            // ShortTitle:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.CourseDetails+this.state.MyCourseID).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({
                    VideoUrl: result[0]['video_url'] ,
                    MoreInfoURL: result[0]['course_link'] ,
                    SkillAll:result[0]['all_skill'] ,
                    loading:false

                });
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }



    render() {

        return (
            <Fragment>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="courseDetailsTitle" >Skill You Get</h1>
                            {ReactHTMLParser(this.state.SkillAll)}
                            <Button variant="primary">Buy Now</Button>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Player poster={videoPoster} src={this.state.VideoUrl}>
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;