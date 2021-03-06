import React, {Component, Fragment} from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../../asset/css/custom.css';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg'
import {Link, NavLink} from "react-router-dom";
import '../../asset/css/responsive.css';

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant: 'dark',
            navBack:"navBackground",
            navBarFont:"navItemColor",
            pageTitle:props.Title
        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle:"navTitleScroll",navBarLogo:[blueLogo],navBack:"navBackgroundScroll",
                navBarFont:"navItemColorScroll",navVariant:'light'})

        }
        else if (window.scrollY<100) {
            this.setState({navBarTitle:"navTitle",navBarLogo:[whiteLogo],navBack:"navBackground",
                navBarFont:"navItemColor",navVariant:'dark'})
        }

    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBack} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVariant}>
                    <Navbar.Brand  ><Link className={this.state.navBarTitle } to="/"><img src={this.state.navBarLogo}/> AirVoice Software Ltd.</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <title>{this.state.pageTitle}</title>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/services">SEVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/course">COURSE</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/portfolio">PRORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarFont} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;