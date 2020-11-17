import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../../asset/css/custom.css';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg'

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBack:"navBackground",
            navBarFont:"navItemColor"
        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle:"navTitleScroll",navBarLogo:[blueLogo],navBack:"navBackgroundScroll",
                navBarFont:"navItemColorScroll"})

        }
        else if (window.scrollY<100) {
            this.setState({navBarTitle:"navTitle",navBarLogo:[whiteLogo],navBack:"navBackground",
                navBarFont:"navItemColor"})
        }

    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <>
                <Navbar className={this.state.navBack} fixed="top" collapseOnSelect expand="lg"  variant="dark">
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Md. Abdul Khalek</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarFont} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarFont} href="#deets">SEVICES</Nav.Link>
                            <Nav.Link className={this.state.navBarFont} href="#deets">COURSE</Nav.Link>
                            <Nav.Link className={this.state.navBarFont} href="#deets">PRORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarFont} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navBarFont} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default TopNavigation;