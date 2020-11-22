import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import PortfolioDescription from "../component/PortfolioDescription/PortfolioDescription";
import Footer from "../component/Footer/Footer";
import TopBanner from "../component/topBanner/TopBanner";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Portfolio"/>
                <PageTop pageTitle="Portfolio"/>
                <PortfolioDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;