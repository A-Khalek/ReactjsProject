import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllCoursesDesc from "../component/AllCoursesDesc/AllCoursesDesc";
import Footer from "../component/Footer/Footer";
import TopBanner from "../component/topBanner/TopBanner";

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Course"/>
                <TopBanner pageTitle="Courses"/>
                <AllCoursesDesc/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;