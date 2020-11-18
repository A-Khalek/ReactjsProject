import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row,Col} from "react-bootstrap";
import circleImg from '../../asset/image/circleImg.png'

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: true,
            infinite: true,
            vertical:true,
            verticalSwiping:true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">CLIENT SAYS</h2>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Slider {...settings}>
                                <div>
                                    <img className="circleImg" src={circleImg}></img>
                                    <h4 className="clientName">Md. Abdul Khalek</h4>
                                    <p className="clientDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. </p>
                                </div>

                                <div>
                                    <img className="circleImg" src={circleImg}></img>
                                    <h4 className="clientName">Md. Abdul Khalek</h4>
                                    <p className="clientDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. </p>
                                </div>
                                <div>
                                    <img className="circleImg" src={circleImg}></img>
                                    <h4 className="clientName">Md. Abdul Khalek</h4>
                                    <p className="clientDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. </p>
                                </div>
                                <div>
                                    <img className="circleImg" src={circleImg}></img>
                                    <h4 className="clientName">Md. Abdul Khalek</h4>
                                    <p className="clientDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. </p>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;