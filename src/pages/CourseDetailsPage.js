import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import Footer from "../component/Footer/Footer";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import PageTop from "../component/PageTop/PageTop";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            MyCourseID:match.params.CourseID
        }
    }


    componentDidMount() {
        window.scroll(0,0)

    }
    render() {

        return (
            <Fragment>
                <TopNavigation Title="Course Details"/>
                <PageTop pageTitle="Course Details"/>
                <CourseDetails id={this.state.MyCourseID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;