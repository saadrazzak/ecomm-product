import React from 'react';
import Newsletter from './Newsletter'
function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#C4DFDF',
  };

  const leftSectionStyle = {
    width: '30%',
    padding: '50px'
  };

  const rightSectionStyle = {
    width: '70%',
    padding: '50px'
  };

  const footerStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#93BFCF',
    margin: '0'
  };


  const linkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black',
    listStyleType: 'none',
  };
  const linksectionStyle ={
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#C4DFDF',
  }
  return (
    <>
     <footer style={footerStyle}>
      <div style={leftSectionStyle}>
        <Newsletter/>
      </div>
      <div style={rightSectionStyle}>
         <div style={linksectionStyle}>
         <ul >
          <div >ABOUT US</div>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/privacy-policy">Our Story</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/terms-and-conditions">Reviews</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data">Discounts</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data"> advertisement</a>
          </li>
            </ul>
            <ul >
          <div >HELP</div>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/privacy-policy">Contact Us</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/terms-and-conditions">FAQ</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data">Shipping</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data"> Return Policy</a>
          </li>
            </ul>
            <ul >
          <div>SHOP</div>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/privacy-policy">Stores</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/terms-and-conditions">All products</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data">Designs</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data"> Contact Us</a>
          </li>
            </ul>
         </div>
      </div>
    </footer>
    <ul style={footerStyle2}>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/privacy-policy">Privacy Policy</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/terms-and-conditions">Terms &amp; Conditions</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data">Do Not Sell My Personal Information</a>
          </li>
          <li style={linkStyle}>
            <a style={linkStyle} href="/pages/do-not-sell-my-personal-data"> advertisement</a>
          </li>
            </ul>
    </>
   
  );
}

export default Footer;
