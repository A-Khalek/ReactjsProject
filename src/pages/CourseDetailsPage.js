import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import Footer from "../component/Footer/Footer";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import PageTop from "../component/PageTop/PageTop";
import RestClient from "../component/RestClient/RestClient";
import AppURL from "../RestAPI/AppURL";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            MyCourseID:match.params.CourseId,
            CourseData:[]
        }
    }
    componentDidMount() {
        window.scroll(0,0)

        RestClient.GetRequest(AppURL.CourseDetails+this.state.MyProjectID).then(result=>{
            this.setState({CourseData:result})
        }).catch(error=>{

        })
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Course Details"/>
                <PageTop pageTitle="Course Details"/>
                <CourseDetails courseData={this.state.CourseData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;