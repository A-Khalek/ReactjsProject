import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AboutDescription from "../component/AboutDescription/AboutDescription";
import Footer from "../component/Footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation Title="About Me"/>
                <PageTop pageTitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;