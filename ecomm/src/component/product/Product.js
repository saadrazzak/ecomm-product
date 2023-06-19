import React, { useEffect, useState } from "react";
import { getProducts, getCart, getWishlist } from "../../redux/actionCallbacks";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined} from "@ant-design/icons";
import { Button } from "antd";
import './style.css';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';

function Product() {
    const [wish, setWish] = useState(false)
  const dispatchRef = useDispatch();
  const { productId } = useParams();

  const productsInfo = useSelector(
    (combinedState) => combinedState.productsStateRef.products
  );
  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );
  const whishListProducts = useSelector(
    (combinedState) => combinedState.wishlistStateRef.wishlist
  );
  useEffect(() => {
    let respCallBack = getProducts();
    dispatchRef(respCallBack);
  }, [dispatchRef]);

  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    ],
  });
  const displayProducts = Object.values(productsInfo);
  const productIdNum = parseInt(productId);
  const product = displayProducts.filter(
    (product) => product.id === productIdNum
  );
  const productDetail = product[0];
  const [mainImage, setMainImage] = useState(productDetail?.imageURL);
  const handleImageClick = (image) => {
    setMainImage(image);
  };
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200"
  ];
  const setProductWishlist=()=>{
    setWish(!wish)
    const Product = whishListProducts
    Product.push(productIdNum)
    let respCallBack = getWishlist(Product);
    dispatchRef(respCallBack);
  }
  const addProductToCart = () => {
    const cart = cartInfo;

    if (Array.isArray(cartInfo) && cartInfo.length) {
      const found = cartInfo.findIndex(item => item.id === productIdNum);
      if (found>=0 ) {
        cartInfo[found].qnt += 1; 
        const respCallBackCart = getCart(cartInfo, true);
        dispatchRef(respCallBackCart);
       
      } else {
        product[0].qnt = 1;
        cart.push(product[0]);
        const respCallBackCart = getCart(cart, true);
        dispatchRef(respCallBackCart);
      }
    } else {
        product[0].qnt = 1;
      const respCallBackCart = getCart(product, true);
      dispatchRef(respCallBackCart);
    }
  };

  return (
    <>
      {productDetail && (
        <>
          <Container>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={2}>
                    <div className="image-list">
                      {
                         images.map((img)=>{
                                return <>
                                     <img

                                        src={ img}
                                        alt="Product"
                                         style={{width:'80px', height:'80px', padding: '5px'}}
                                        className={
                                        mainImage === {img} ? "active" : ""
                                        }
                                        onClick={() => handleImageClick(img)}
                                    />
                                </>
                          })
                      }
                    </div>
                  </Col>
                  <Col md={10}>
                    <Card>
                
                      <Card.Img className='main-image' style={{width:'100%', height:'550px'}} variant="top" src={mainImage?  mainImage: productDetail?.imageURL} alt="Product" />
                  
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>Product description goes here.</Card.Text>
                    <Card.Text>Price: $99.99</Card.Text>
                    <Button
                      onClick={() => addProductToCart()}
                      icon={ cartInfo.some(prod => prod.id === productDetail?.id) ? <Space>
                        <IconFont style={{ fontSize: '20px' }}  type="icon-shoppingcart" />
                      </Space>:<ShoppingCartOutlined style={{ fontSize: '20px' }} /> }
                    >
                     {cartInfo.some(prod => prod.id === productDetail?.id) ? 'Added in cart':'Add to cart'}
                    </Button>
                    <Button 
                    onClick={setProductWishlist} 
                    icon={whishListProducts?.includes(productIdNum)? <HeartFilled  style={{ fontSize: '18px' }} />  :<HeartOutlined style={{ fontSize: '18px' }}  />  }
                    > {whishListProducts?.includes(productIdNum)?  'Saved' :'Save'  }
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default Product;
