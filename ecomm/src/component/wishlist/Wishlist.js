import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux";

function Whishlist(props) {

  const productsInfo = useSelector(
    (combinedState) => combinedState.productsStateRef.products
  );

  const whishListProducts = useSelector(
    (combinedState) => combinedState.wishlistStateRef.wishlist
  );
  const displayProducts = Object.values(productsInfo);
  
  const filteredObjects = displayProducts.filter((obj) => whishListProducts.includes(obj.id));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Your Whishlist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {whishListProducts.length ===0 ? 
        <Card.Title>   Your have not added any item to your WishList</Card.Title>
        : 
         <div style={{display : 'flex'}}>
         {filteredObjects.map((product, i) => {
             return (
               <div key={i}>
                  <Card style={{ width: '18rem' }}>
                   <Card.Body>
                     <Card.Title> {product.name}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted"> ${product.price}</Card.Subtitle>
                     <Card.Text>
                       {product.brand}
                     </Card.Text>
                    
                     <Button
                      variant="outline-secondary"
                    >
                      Remove
                    </Button>
                    <Button
                      variant="outline-primary"
                    >
                      More details
                    </Button>
                   </Card.Body>
                 </Card>
               </div>
             );
           })}
         </div>
        }
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Whishlist;