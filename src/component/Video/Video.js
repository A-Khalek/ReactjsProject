import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import "video-react/dist/video-react.css";
import {Player,BigPlayButton,ControlBar,ReplayControl} from 'video-react';
import videoPoster from '../../asset/image/videoSintel.png'
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            videoDesc:"...",
            videoURL:".."
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    componentDidMount() {
        RestClient.GetRequest(AppURL.videoHome).then(result=>{
            this.setState({videoDesc:result[0]['video_desc'],videoURL:result[0]['video_url']})
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="videoCard">
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDesc">{this.state.videoDesc}</p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/*This is video modal section*/}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose} animation={false}>
                   <Modal.Body>
                        <Player poster={videoPoster} src={this.state.videoURL}>
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;