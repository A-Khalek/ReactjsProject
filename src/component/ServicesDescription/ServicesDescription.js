import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ServicesDescription extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        return RestClient.GetRequest(AppURL.serviceDetails).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else {
                this.setState({myData:result,loading:false})
            }

        }).catch(error=>{
            return this.setState({error:true,loading:false})
        })
    }


    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if (this.state.loading== false) {
            let myList = this.state.myData;
            let myView = myList.map(myList=>{
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
                        <Row >
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }

        else if (this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default ServicesDescription;