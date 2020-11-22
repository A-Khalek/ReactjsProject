import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ContactDescription from "../component/ContactDescription/ContactDescription";
import Footer from "../component/Footer/Footer";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <ContactDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;