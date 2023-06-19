import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MiniBag from "../miniBag/miniBag";
import Whishlist from "../wishlist/Wishlist";
import Dropdown from 'react-bootstrap/Dropdown';
import { UserOutlined, HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../redux/actionCallbacks";
import { Avatar, Badge } from 'antd';

// import Badge from 'react-bootstrap/Badge';
function Menu() {

  const dispatchRef = useDispatch();

  const [modalShow, setModalShow] = React.useState(false);
  const cartOpen = useSelector(
    (combinedState) => combinedState.cartStateRef.isMiniCart
  );
  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );

  const logoStyle = {
    width: "5px",
  };
  const openMinicart = ()=>{
    const respCallBackCart = getCart(cartInfo, true)
    dispatchRef(respCallBackCart);
  }
  return (
    <Container>
      <Row
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col style={logoStyle}>
          
          <Dropdown>
            <Dropdown.Toggle as='span' variant="success" id="dropdown-basic">
            <UserOutlined  style={{ fontSize: '20px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sign Up</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Col>
        <Col style={logoStyle}>
          <HeartOutlined  style={{ fontSize: '20px' }} onClick={() => setModalShow(true)} />
          <Whishlist show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
        <Col style={logoStyle}>
         

         {/* <Badge pill bg="info">{cartInfo.length}</Badge> */}

          <Badge size="small" count={cartInfo.length}>
          <ShoppingOutlined style={{ fontSize: '20px' }} onClick={() => openMinicart()} />
          </Badge>
         {cartOpen && <MiniBag />}
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
