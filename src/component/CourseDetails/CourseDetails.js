import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import videoPoster from "../../asset/image/videoSintel.png";
import {BigPlayButton, Player} from "video-react";
import ReactHTMLParser from 'react-html-parser';


class CourseDetails extends Component {
        constructor(props) {
            super(props);

        }


    render() {


            let ShortDesc="";
            let LongDesc="";
            let TotalLecture ="";
            let TotalStudent ="";
            let AllSkill="";
            let VideoUrl="";
            let ImgLink="";

            let CourseDetailsArray =this.props.courseData;
            if (CourseDetailsArray==1){


                 ShortDesc= CourseDetailsArray[0]['short_desc'];;
                 LongDesc= CourseDetailsArray[0]['long_title'];;
                 TotalLecture = CourseDetailsArray[0]['total_lecture'];;
                 TotalStudent = CourseDetailsArray[0]['total_student'];;
                 AllSkill= CourseDetailsArray[0]['all_skill'];;
                 VideoUrl= CourseDetailsArray[0]['video_url'];;
                 ImgLink= CourseDetailsArray[0]['Img_link'];;

            }


        return (
            <Fragment>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="courseDetailsTitle" >Skill You Get</h1>
                            {ReactHTMLParser(LongDesc)}
                            <p>{TotalStudent}</p>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player poster={videoPoster} src={ImgLink}>
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