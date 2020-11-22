import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/topNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import ConditionDetails from "../component/ConditionDetails/ConditionDetails";

class ConditionPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Title="Condition"/>
                <PageTop pageTitle="Terms & Condition"/>
                <ConditionDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ConditionPage;