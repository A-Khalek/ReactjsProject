import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row,Col} from "react-bootstrap";
import circleImg from '../../asset/image/circleImg.png'
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import {Link} from "react-router-dom";

class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.ClientReview).then(result=>{
            this.setState({myData:result})
        })
    }

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


        const myList = this.state.myData;
        const myView = myList.map(myList=> {

            return  <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div>
                                <img className="circleImg" src={myList.review_img}></img>
                                <h4 className="clientName">{myList.review_title}</h4>
                                <p className="clientDesc">{myList.review_desc}</p>
                            </div>
                        </Col>
                    </Row>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceNameTitle">CLIENT SAYS</h2>
                        <Slider {...settings}>
                            {myView}
                        </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;