import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import ContactDescription from "../component/ContactDescription/ContactDescription";
import Footer from "../component/Footer/Footer";
import PageTop from "../component/PageTop/PageTop";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Contact"/>
                <PageTop pageTitle="Contact"/>
                <ContactDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;