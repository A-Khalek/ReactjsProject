import React, {Component, Fragment} from 'react';
import  {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicsLogo from '../../asset/image/graphics.svg';
import AppURL from "../../RestAPI/AppURL";
import RestClient from "../RestClient/RestClient";
import Loading from "../Loading/Loading";

class Services extends Component {
    constructor() {
        super();
        this.state={
           myData:[],
           loader:true,
            error:false
        }
    }


    componentDidMount() {
        return RestClient.GetRequest(AppURL.serviceDetails).then(result=>{
            if (result==null){
                this.setState({error:true})
            }
            else {
                this.setState({myData:result,loader:false})
            }
        }).catch(error=>{
            this.setState({error:true,loader:false})
        })
    }


    render() {

        if (this.state.loader==true && this.state.error==false){
            return <Loading/>
        }else {
            const myList = this.state.myData;
            const myView = myList.map(myList=>{
                return <Col lg={4} md={6} sm={12} >
                    <div className="serviceCard text-center">
                        <img src={myList.service_img}/>
                        <h2 className="serviceName">{myList.service_name}</h2>
                        < p className="serviceDescription">{myList.service_desc}</p>
                    </div>
                </Col>
            })
            return (
                <Fragment>
                    <Container className="text-center">
                        <h2 className="serviceNameTitle">My Services</h2>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default Services;