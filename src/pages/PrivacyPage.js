import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PrivacyPolicy from "../component/PrivacyPolicy/PrivacyPolicy";
import Footer from "../component/Footer/Footer";
import PageTop from "../component/PageTop/PageTop";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Privacy Page"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;