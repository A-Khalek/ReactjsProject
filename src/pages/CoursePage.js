import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllCoursesDesc from "../component/AllCoursesDesc/AllCoursesDesc";
import Footer from "../component/Footer/Footer";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Course"/>
                <PageTop pageTitle="All Courses"/>
                <AllCoursesDesc/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;