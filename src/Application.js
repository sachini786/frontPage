import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import logo from "./logo.jpg";
import "./Application.css";

function Application() {
  return (
    <div className="container">
      <div className="subContainer1">
        <div>
          <strong>
            <p className="mainTopic">
              Let's talk about <br />
              everything!
            </p>
          </strong>
          <p className="subTopic">
            ORECAL is provied more servies for the customers.
            <br />
            if you have any problem contact us.
          </p>
          <img className="image" src={logo} alt="Logo" />
        </div>
      </div>
      <div className="subContainer2">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Your Name"
              style={{ paddingRight: "200px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Email"
              style={{ paddingRight: "200px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Subject" />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Write your Massage"
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
          <div>
            <Button type="button" className="button">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Application;
