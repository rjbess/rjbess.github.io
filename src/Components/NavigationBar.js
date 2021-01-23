import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: #f2ebe1;
    margin-bottom: 0px;
    padding-left: 7%;
    padding-right: 7%;
  }
  .navbar-brand, .navbar-nav .link {
    color:black !important;
    font-family: Times New Roman  !important;
    font-size: 28px;
    padding:5px;
    }
  }
`

class NavigationBar extends React.Component{
    render(){
        return(
            <Styles>
                <Navbar expand="lg">
                        <Navbar.Brand href="/" >CALTABIANO'S</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <Nav.Link href="/" className="link">HOME</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/services" className="link">SERVICES</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/gallery" className="link">GALLERY</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/contactus" className="link">CONTACT US</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }

}
export default NavigationBar;