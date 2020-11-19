import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import PortfolioDescription from "../component/PortfolioDescription/PortfolioDescription";
import Footer from "../component/Footer/Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Portfolio"/>
                <PortfolioDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;