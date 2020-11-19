import React, {Component, Fragment} from 'react';
import {Switch,Route}from 'react-router-dom';
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="services" component={ServicePage}/>
                    <Route path="course" component={CoursePage}/>
                    <Route path="portfolio" component={PortfolioPage}/>
                    <Route path="courses" component={CoursePage}/>
                    <Route path="about" component={AboutPage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;