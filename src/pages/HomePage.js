import React, {Component,Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import TopBanner from "../component/topBanner/TopBanner";
import Services from "../component/services/Services";
import Analysis from "../component/Analysis/Analysis";
import Summary from "../component/Summary/Summary";
import RecentProjects from "../component/RecentProjects/RecentProjects";
import Courses from "../component/Courses/Courses";
import Video from "../component/Video/Video";
import ClientReview from "../component/ClientReview/ClientReview";
import Footer from "../component/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;