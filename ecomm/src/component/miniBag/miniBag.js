import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getCart } from "../../redux/actionCallbacks";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { PlusOutlined, MinusOutlined} from "@ant-design/icons";

function MiniBag() {
  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );

  const [show, setShow] = useState(true);
  const [qntUpdate, setQnt] = useState(false);
  const dispatchRef = useDispatch();

  const handleClose = () => {
    const cartRef = getCart(cartInfo, false)
    dispatchRef(cartRef)
    setShow(false)
  }

  useEffect(()=>{
  },[qntUpdate])
  const increment=(id)=> {
    setQnt(!qntUpdate)
    const found = cartInfo.findIndex(item => item.id === id);
    cartInfo[found].qnt += 1; 
    const respCallBackCart = getCart(cartInfo, true);
    dispatchRef(respCallBackCart);
  }
  const decrement= (id)=>{
    setQnt(!qntUpdate)
    const found = cartInfo.findIndex(item => item.id === id);
    cartInfo[found].qnt -= 1; 
    const respCallBackCart = getCart(cartInfo, true);
    dispatchRef(respCallBackCart);
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}  placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          {cartInfo.map((product, i) => {
            return (
              <div key={i}>
                <Card style={{display: 'flex', flexDirection: 'row'}}>
                  <Card.Img style={{width: "100px"}} variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.brand}
                    </Card.Text>
                    <Card.Text>
                    $ {product.price * product.qnt}
                    </Card.Text>
                    <div style={{display: 'flex', flexDirection: 'row', width: '80px', padding: '3px',border: '1px solid black', alignItems: 'center', justifyContent: 'space-between'}}>
                      <MinusOutlined  onClick={()=> decrement(product.id)}/>
                      {product.qnt}
                     <PlusOutlined onClick={()=>increment(product.id)} />
                     
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MiniBag;