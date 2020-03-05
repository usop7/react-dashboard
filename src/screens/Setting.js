import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Setting extends React.Component {
  render() {
    return (
      <div className='contentDiv'>
        <h2>Setting</h2>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Favorite Category</Form.Label>
            <Form.Control as="select">
              <option>Politics</option>
              <option>Business</option>
              <option>Finance</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Messages</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="warning" className="newsBtn">Save</Button>
        </Form>
        
      </div>
    )
  }
}