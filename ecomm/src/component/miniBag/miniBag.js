import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getCart } from "../../redux/actionCallbacks";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { PlusOutlined, MinusOutlined, CloseOutlined} from "@ant-design/icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function MiniBag() {


  const cartInfo = useSelector(
    (combinedState) => combinedState.cartStateRef.cart
  );

  const [showModal, setModalShow] = useState(false);
  const [deleteItemID, setDeleteItemID] = useState(null);
  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = () => setModalShow(true);

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
  const deleteItem = (id)=>{
    setQnt(!qntUpdate)
    const remainingItem = cartInfo.filter(item => item.id !== id);
    const respCallBackCart = getCart(remainingItem, true);
    dispatchRef(respCallBackCart);
  }


  function DeletePopUp({name}) {

    return (
      <>  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>are you sure you want remove this item from cart!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={()=>{
              deleteItem(deleteItemID)
              setDeleteItemID(null)
              handleCloseModal()
            }
            }>
              Remove Item
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}  placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartInfo.length === 0 ? 'Your cart is currently empty.' : "Your cart items!" }
          {cartInfo.map((product, i) => {
            return (
              <div key={i}>
                <Card style={{display: 'flex', flexDirection: 'row'}}>
                  <Card.Img style={{width: "130px"}} variant="top" src={product.imageURL} />
                  <Card.Body>
                  <DeletePopUp name={product.name}/>
                    <Card.Title>{product.name} </Card.Title>
                    <CloseOutlined onClick={()=>
                      {
                        setDeleteItemID(product.id)
                        handleShowModal()
                        }}  style={{position: "absolute", right: "25px", top: "15px" }}/> 
                    <Card.Text>
                      {product.brand}
                    </Card.Text>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                    <div style={{display: 'flex', flexDirection: 'row', width: '80px', padding: '3px',border: '1px solid black', alignItems: 'center', justifyContent: 'space-between'}}>
                      <MinusOutlined  onClick={()=> decrement(product.id)}/>
                      {product.qnt}
                     <PlusOutlined onClick={()=>increment(product.id)} />
                     
                    </div>
                    <Card.Text>
                    $ {product.price * product.qnt}
                    </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          
        </Offcanvas.Body>
       { cartInfo.length !== 0 &&
        <>
         <Card.Title>Subtotal {cartInfo.reduce((acc, cur)=> acc + (cur.price * cur.qnt), 0)} </Card.Title>
         <Button variant="primary" size="lg">
             Checkout
           </Button></>
       }
      </Offcanvas>
    </>
  );
}

export default MiniBag;