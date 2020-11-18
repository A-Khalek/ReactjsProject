import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import "video-react/dist/video-react.css";
import {Player,BigPlayButton,ControlBar,ReplayControl} from 'video-react';
import videoPoster from '../../asset/image/videoSintel.png'

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="videoCard">
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/*This is video modal section*/}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose} animation={false}>
                   <Modal.Body>
                        <Player poster={videoPoster} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                            <ControlBar autoHide={false}>
                                <ReplayControl seconds={5} order={2.1} />
                                <ReplayControl seconds={10} order={2.2} />
                                <ReplayControl seconds={30} order={2.3} />
                            </ControlBar>
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