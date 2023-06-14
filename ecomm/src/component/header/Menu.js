import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    UserOutlined,
    HeartOutlined,
    ShoppingOutlined
  } from '@ant-design/icons';
function Menu() {

const logoStyle = {
    width: '5px',
}
  return (
    <Container  >
    <Row style={{  width: '100%', display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}} >
      <Col style={logoStyle}> <UserOutlined /></Col>
      <Col style={logoStyle}> <HeartOutlined /></Col>
      <Col style={logoStyle}> <ShoppingOutlined /></Col>
    </Row>
  </Container>
  )
}

export default Menu