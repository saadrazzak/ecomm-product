import React from 'react'
import Navbar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo'
import Menu from './Menu'
function Header() {
    const headerStyle = {
        width: '100%',
        height: '95px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '100',
      };
  return (
    <>
    <Container style={{  width: '100%', maxWidth: '95%'}} >
      <Row style={headerStyle}>
        <Col xs={2}> <Logo/></Col>
        <Col xs={8}> <Navbar/></Col>
        <Col xs={2}><Menu/></Col>
      </Row>
    </Container>
    </>
  )
}

export default Header
