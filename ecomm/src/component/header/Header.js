import React from 'react'
import Navbar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo'
import Menu from './Menu'
import './header.css'
function Header() {
    const headerStyle = {
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '100',
        maxWidth: '100%',
        background: 'white'
      };
      const rowStyle = {
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
        background: 'white'
      };
  return (
    <>
    <div id="scroll-container">
      <div id="scroll-text"> Here's a React component that renders the provided HTML structure.</div>
    </div>
    <Container style={headerStyle} >
      <Row style={rowStyle}>
        <Col xs={2}> <Logo/></Col>
        <Col xs={8}> <Navbar/></Col>
        <Col xs={2}><Menu/></Col>
      </Row>
    </Container>
    </>
  )
}

export default Header
