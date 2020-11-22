import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import RefundSection from "../component/RefundSection/RefundSection";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;