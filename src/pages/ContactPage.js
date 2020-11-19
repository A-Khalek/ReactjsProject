import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ContactDescription from "../component/ContactDescription/ContactDescription";
import Footer from "../component/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Contact"/>
                <ContactDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;