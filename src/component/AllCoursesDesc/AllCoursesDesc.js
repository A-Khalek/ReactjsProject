import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../RestClient/RestClient";
import AppURL from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllCoursesDesc extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.CourseAll).then(result=>{
            if (result==null){
                this.setState({error:true})
            }
            else{
                this.setState({myData:result,loading:false})
            }

        }).catch(error=>{
            this.setState({ error:true,loading:false})
        })
    }

    render() {

        if(this.state.loading==true && this.state.error==false ){
            return  <Loading/>
        }

        else if (this.state.loading==false)  {
            const myList = this.state.myData;
            const myView = myList.map(myList=> {

                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <img className="courseImg" src={myList.Img_link}/>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <h4 className="courseTitle text-justify">{myList.short_title}</h4>
                            <p className="courseDesc text-justify">{myList.short_desc}</p>
                            <Link to={"/CourseDetails/"+myList.id} className="footerLink float-left courseDetailsBtn">Details</Link>
                        </Col>
                    </Row>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="mt-5 pt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default AllCoursesDesc;