import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Newsletter() {
    return (
        <>
        <h1>Stay In The Know</h1>
        <p> Sign up to get first dibs on new launches, promos, 20% off your first purchase, and other news.</p>
         <Form>
          <Row className="align-items-center">
            <Col xs={10} >
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
            <Col xs={2} >
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        </>
       
      );
}

export default Newsletter;