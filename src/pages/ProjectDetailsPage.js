import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";

class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Project Details"/>
                <PageTop pageTitle="Project Details"/>
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;