import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ServicesDescription from "../component/ServicesDescription/ServicesDescription";
import Footer from "../component/Footer/Footer";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Service"/>
                <PageTop pageTitle="Services"/>
                <ServicesDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;