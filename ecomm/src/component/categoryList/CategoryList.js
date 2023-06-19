
import React, { useEffect, useState } from "react";
import { getProducts, getCart, getWishlist } from "../../redux/actionCallbacks";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined} from "@ant-design/icons";
import { Button } from "antd";
import { Link } from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
import './style.css'

function CategoryList() {
  const [wish, setWish] = useState(false)
  const dispatchRef = useDispatch();
  const { listId } = useParams();
  console.log('listId', listId)


  const productsInfo = useSelector(
    (combinedState) => combinedState.productsStateRef.products
  );
  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );
  const whishListProducts = useSelector(
    (combinedState) => combinedState.wishlistStateRef.wishlist
  );
  const displayProducts = Object.values(productsInfo);
  let categoryProducts = []

  if(listId === 'men'){
    const mensProducts = displayProducts.filter(p => p.gender === 'MEN' )
    categoryProducts = mensProducts
  }else if(listId === 'women'){
    const womenProducts = displayProducts.filter(p => p.gender === 'WOMEN' )
    categoryProducts = womenProducts
  }else if(listId === 'kid'){
    const kidsProducts = displayProducts.filter(p => p.gender === 'KIDS' )
    categoryProducts = kidsProducts
  }

  useEffect(() => {
    let respCallBack = getProducts();
    dispatchRef(respCallBack);
  }, [dispatchRef]);

  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    ],
  });

  const setProductWishlist=(id)=>{
    setWish(!wish)
    const Product = whishListProducts
    Product.push(id)
    let respCallBack = getWishlist(Product);
    dispatchRef(respCallBack);
  }

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

  console.log("cat", categoryProducts)

  return (
    <>
    <div className="category" >
      <div> filter</div>
      <div className="category-page">
      {categoryProducts && categoryProducts.map((product, i) => {
              return (
                <div className="product-card" key={i}>
                  <Card  >
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
      </div>
    </div>
    
    </>
                      
  );
}

export default CategoryList;


