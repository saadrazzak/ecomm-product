import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [openMen, setMen] = useState(false);
  const [openWomen, setWomen] = useState(false);
  const collapseStyle = {
    position: "absolute",
    top: "70px",
    textAlign: "center",
    width: "inherit",
    paddingTop: '20px',
    background: 'white'
  };
  const textStyle = {
    color: "black",
    textDecoration: "none",
    background: "linear-gradient(to right, black, black) no-repeat",
    backgroundSize: "0% 2px",
    backgroundPosition: "left bottom",
    transition: "background-size 0.6s ease",
    // height: '50px'
  };
  const textStyle2 = {
    color: "black",
    textDecoration: "none",
    background: "linear-gradient(to right, black, black) no-repeat",
    backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",
    transition: "background-size 0.6s ease",
    // height: '50px'
  };
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link to={`/productListing/${'men'}`} as={Link}
            style={openMen ? textStyle2 : textStyle}
            onMouseEnter={(eve) => {
              setMen(true);
            }}
            onMouseLeave={(eve) => {
              setMen(false);
            }}
            href="/home"
          >
            MEN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to={`/productListing/${'women'}`} as={Link}
            style={openWomen ? textStyle2 : textStyle}
            onMouseEnter={(eve) => {
              setWomen(true);
            }}
            onMouseLeave={(eve) => {
              setWomen(false);
            }}
            eventKey="link-1"
          >
            WOMEN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            to={`/productListing/${'kid'}`} as={Link}
          style={textStyle} eventKey="link-2">
            KIDS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={textStyle} eventKey="link-2">
            BRAND
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={textStyle} eventKey="disabled">
            COLLECTION
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Collapse
        style={collapseStyle}
        onMouseEnter={(eve) => {
          setMen(true);
        }}
        onMouseLeave={() => setMen(false)}
        in={openMen}
      >
        <div id="example-collapse-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Collapse>
      <Collapse
        style={collapseStyle}
        onMouseEnter={() => setWomen(true)}
        onMouseLeave={() => setWomen(false)}
        in={openWomen}
      >
        <div id="example-collapse-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Collapse>
    </>
  );
}

export default Navbar;
