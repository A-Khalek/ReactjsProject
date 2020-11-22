import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import ContactDescription from "../component/ContactDescription/ContactDescription";
import Footer from "../component/Footer/Footer";
import TopBanner from "../component/topBanner/TopBanner";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Contact"/>
                <TopBanner pageTitle="Contact"/>
                <ContactDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;