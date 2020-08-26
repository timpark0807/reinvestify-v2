import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

function Calculator() {

    const [payment, setPayment] = useState('0')
    const [price, setPrice] = useState('0')
    const [down, setDown] = useState('0')
    const [term, setTerm] = useState('0')
    const [interest, setInterest] = useState('0')

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      setPayment((parseInt(price) + 10).toString())
    };

    return (
      <div> 
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Form>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Purchase Price</Form.Label>
                      <Form.Control placeholder="Price" onChange={e => setPrice(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Down Payment</Form.Label>
                      <Form.Control defaultValue='20' onChange={e => setDown(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Term</Form.Label>
                      <Form.Control as="select" defaultValue='30' onChange={e => setTerm(e.target.value)}>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Interest Rate</Form.Label>
                      <Form.Control defaultValue='4.0' onChange={e => setInterest(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClick}> 
                      Submit
                    </Button>

                  </Form>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={8}>
              <Card>
                {payment}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
export default Calculator;
  