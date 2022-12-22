import React from "react";
import Title from "../shared/Title";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const msg = form.msg.value;
    toast(`Thanks!! ${name} for reaching me`);

    setTimeout(() => {
      toast.success(`Yes!!!! I have got Your message 💌💌`);
    }, 5000);
    setTimeout(() => {
      toast.info(`I will Reply you at ${email} As soon as possible`);
    }, 8000);
    form.reset();

    navigate("/home");

    console.log(name, email, msg);
  };
  return (
    <section id="contact">
      <Title>Contact With Me</Title>
      <div className="container my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
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

          <Button variant="primary" type="submit">
            Contact Now
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
