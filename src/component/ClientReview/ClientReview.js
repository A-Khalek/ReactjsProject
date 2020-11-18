import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row,Col} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: true,
            infinite: false,
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
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;