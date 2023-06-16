import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getCart } from "../../redux/actionCallbacks";
import MiniBag from "../miniBag/miniBag";

function SlickCarousel() {
  const productsInfo = useSelector(
    (combinedState) => combinedState.productsStateRef.products
  );

  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );
  const cartOpen = useSelector(
    (combinedState) => combinedState.cartStateRef.isMiniCart
  );
  const displayProducts = Object.values(productsInfo);

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
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slider style={{ width: "90%" }} {...settings}>
          {displayProducts.map((product, i) => {
            return (
              <div className="cardB" key={i}>
                <Card>
                  <Card.Img variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      Some quick make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="outline-secondary"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add to cart
                    </Button>
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
