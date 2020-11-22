import React, {Component, Fragment} from 'react';
import {Switch,Route}from 'react-router-dom';
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import RefundPage from "../pages/RefundPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/services" component={ServicePage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/Refund" component={RefundPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;