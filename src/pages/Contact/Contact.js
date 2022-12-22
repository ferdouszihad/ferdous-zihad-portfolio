import React from "react";
import Title from "../shared/Title";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Title>Contact With Me</Title>
      <div className="container my-5">
        <Form>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name=""
              placeholder="Please Tell me your Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label>Please share a message</Form.Label>
            <Form.Control as="textarea" name="msg" required rows={3} />
          </Form.Group>

          <Button variant="primary">Contact Now</Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
