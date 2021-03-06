import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import {Row} from "react-bootstrap/cjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ContactDescription extends Component {
    constructor() {
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.footerDetails).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else {
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    loading:false
                })
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    sendContact(){
      let  name =  document.getElementById("name").value;
      let  email =  document.getElementById("email").value;
      let  msg =  document.getElementById("msg").value;

      let jsonObject = {name:name,email:email,msg:msg};

      RestClient.PostRequest(AppURL.ContactSend,JSON.stringify(jsonObject)).then(result=>{
        // alert(result)
      }).catch(error=>{
        this.setState({error:true,loading:false})
      })
    }



    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if (this.state.loading== false) {
            return (
                <Fragment>
                    <Container  className="pt-5 pl-0">
                        <Row>
                            <Col lg={8} md={12} sm={12} className="pl-0">
                                <h2 className="serviceName">Quick Connect</h2>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="float-left">Name</Form.Label>
                                        <Form.Control id="name" type="email" placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="float-left">Email Address</Form.Label>
                                        <Form.Control id="email" type="email" placeholder="Email Address" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="float-left">Message</Form.Label>
                                        <Form.Control id="msg" as="textarea" rows={3} />
                                    </Form.Group>


                                    <Button onClick={this.sendContact} variant="primary">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>

                            <Col lg={4} md={12} sm={12} className="text-justify pl-3">
                                <h2 className="serviceName">Discuss Now</h2>
                                <p className="clientDesc">{this.state.address}</p>
                                <p className="clientDesc"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                                <p className="clientDesc"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>

                            </Col>
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

export default ContactDescription;