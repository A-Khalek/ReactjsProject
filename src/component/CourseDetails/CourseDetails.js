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
            LongTitle:"",
            ShortDesc:"",
            LongDesc:"",
            TotalLecture :"",
            TotalStudent :"",
            AllSkill:"",
            VideoUrl:"",
            ImgLink:"",
            Moreinfo:"",
            ShortTitle:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.CourseDetails+this.state.MyCourseID).then(result=>{
            this.setState({
                ShortDesc:result[0]['short_desc'],
                LongDesc:result[0]['long_desc'],
                AllSkill:result[0]['all_skill'],
                VideoUrl:result[0]['video_url'],
                ImgLink:result[0]['Img_link'],
                moreinfo:result[0]['more_info']
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
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="courseDetailsTitle" >Skill You Get</h1>
                            <h2 className="courseDetailsTitle">{this.state.LongTitle}</h2>
                            {ReactHTMLParser(this.state.LongDesc)}
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