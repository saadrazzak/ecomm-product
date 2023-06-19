import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getCart, getWishlist } from "../../redux/actionCallbacks";
import MiniBag from "../miniBag/miniBag";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';


function SlickCarousel() {
  const [wish, setWish] = useState(false)
  // const [key, setKey] = useState('men');
  const productsInfo = useSelector(
    (combinedState) => combinedState.productsStateRef.products
  );

  const whishListProducts = useSelector(
    (combinedState) => combinedState.wishlistStateRef.wishlist
  );
  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );
  const cartOpen = useSelector(
    (combinedState) => combinedState.cartStateRef.isMiniCart
  );
  const displayProducts = Object.values(productsInfo);
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    ],
  });

  const mensProducts = displayProducts.filter(p => p.gender === 'MEN' && p.category !== 'RUNNING')
  const womensProducts = displayProducts.filter(p => p.gender === 'WOMEN' && p.category !== 'RUNNING')
  console.log(mensProducts, womensProducts)
  const dispatchRef = useDispatch();

  useEffect(() => {
    let respCallBack = getProducts();
    dispatchRef(respCallBack);
  }, [dispatchRef]);

  const settings = {
    infinite: true, // Allow infinite scrolling
    speed: 900, // Transition speed in milliseconds
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 2, // Number of slides to scroll at a time
    draggable: true,
    responsive: [
      {
        breakpoint: 768, // Adjust the settings for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const addProductToCart = (id) => {
    const cart = cartInfo;
    const Product = displayProducts.filter((product) => product.id === id);

    if (Array.isArray(cartInfo) && cartInfo.length) {
      const found = cartInfo.findIndex(item => item.id === id);
      if (found>=0 ) {
        cartInfo[found].qnt += 1; 
        const respCallBackCart = getCart(cartInfo, true);
        dispatchRef(respCallBackCart);
       
      } else {
        Product[0].qnt = 1;
        cart.push(Product[0]);
        const respCallBackCart = getCart(cart, true);
        dispatchRef(respCallBackCart);
      }
    } else {
      Product[0].qnt = 1;
      const respCallBackCart = getCart(Product, true);
      dispatchRef(respCallBackCart);
    }
  };
  const setProductWishlist=(id)=>{
    setWish(!wish)
    const Product = whishListProducts
    Product.push(id)
    let respCallBack = getWishlist(Product);
    dispatchRef(respCallBack);
  }
  
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
        <h1>MEN'S BESTSELLING'S</h1>
        <Slider style={{ width: "90%" }} {...settings}>
          {mensProducts.map((product, i) => {
            return (
              <div className="cardB" key={i}>
                <Card>
                  <Card.Img variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    {whishListProducts?.includes(product.id)? <HeartFilled style={{ fontSize: '20px', position: 'absolute', right: '20px' , top: '10px'}} /> :  <HeartOutlined  style={{ fontSize: '20px', position: 'absolute', right: '20px', top: '10px' }} onClick={()=>setProductWishlist(product.id)}  /> }
                    <Card.Text>
                    {product.brand}
                    </Card.Text>
                    <Button
                      onClick={() => addProductToCart(product.id)}
                      icon={ cartInfo.some(prod => prod.id === product.id) ? <Space>
                        <IconFont style={{ fontSize: '20px' }}  type="icon-shoppingcart" />
                      </Space>:<ShoppingCartOutlined style={{ fontSize: '20px' }} /> }
                    >
                     {cartInfo.some(prod => prod.id === product.id) ? 'Added in cart':'Add to cart'}
                    </Button>
                    <Button> <Link to={`/productDetails/${product.id}`}>Details</Link></Button>
                  </Card.Body>
                </Card>
               
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
            <h1>WOMEN'S BESTSELLING'S</h1>

        <Slider style={{ width: "90%" }} {...settings}>
          {womensProducts.map((product, i) => {
            return (
              <div className="cardB" key={i}>
                <Card>
                  <Card.Img variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    {whishListProducts?.includes(product.id)? <HeartFilled  style={{ fontSize: '20px', position: 'absolute', right: '20px' , top: '10px' }}/> :  <HeartOutlined  style={{ fontSize: '20px', position: 'absolute', right: '20px', top: '10px' }} onClick={()=>setProductWishlist(product.id)}  /> }
                   
                    <Card.Text>
                     {product.brand}
                    </Card.Text>
                    <Button
                      onClick={() => addProductToCart(product.id)}
                      icon={ cartInfo.some(prod => prod.id === product.id) ? <Space>
                        <IconFont style={{ fontSize: '20px' }}  type="icon-shoppingcart" />
                      </Space>:<ShoppingCartOutlined style={{ fontSize: '20px' }} /> }
                    >
                     {cartInfo.some(prod => prod.id === product.id) ? 'Added in cart':'Add to cart'}
                    </Button>
                    <Button> <Link to={`/productDetails/${product.id}`}>Details</Link></Button>
                  </Card.Body>
                </Card>
               
                
              </div>
            );
          })}
        </Slider>
      </div>


      {cartOpen && <MiniBag />}
    </>
  );
}

export default SlickCarousel;
