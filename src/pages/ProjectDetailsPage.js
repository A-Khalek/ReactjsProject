import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";

class ProjectDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            projectPassID: match.params.ProjectId,
            projectPassName: match.params.projectName
        }
    }




    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Project Details"/>
                <PageTop pageTitle={this.state.projectPassName}/>
                <ProjectDetails id={this.state.projectPassID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;