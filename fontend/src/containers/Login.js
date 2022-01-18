import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password));
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <Row className="justify-content-center">
      <Col md={4}>
        <h1 className="text-center">LOGIN</h1>
        <Form noValidate onSubmit={onSubmit}>
          <Form.Group className="mt-3" controlId="validationEmail">
            <Form.Label>
              <strong>Email</strong>
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={formData.email}
              required
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="validationPassword">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={formData.password}
              required
              onChange={onChange}
            />
          </Form.Group>

          <Button className="mt-3 w-100" type="submit" variant="primary">
            <strong>Login</strong>
          </Button>

          <Alert className="mt-3 text-center text-capitalize" variant="danger">
            Email or password is incorrect
          </Alert>
        </Form>
      </Col>
    </Row>
  );
};

// <div>
//   <h1>Sign In</h1>
//   <p>Sign into your account</p>
//   <form onSubmit={(e) => onSubmit(e)}>
//     <div className="mb-3">
//       <input
//         className="form-control"
//         type="email"
//         placeholder="Email"
//         name="email"
//         value={formData.email}
//         onChange={(e) => onChange(e)}
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <input
//         className="form-control"
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={formData.password}
//         onChange={(e) => onChange(e)}
//         required
//       />
//     </div>
//     <button className="btn btn-primary" type="submit">
//       Login
//     </button>
//   </form>
//   <p className="mt-3">
//     Don't have a account <Link to="/signup">Sign Up</Link>
//   </p>
//   <p className="mt-3">
//     <Link to="/reset-password">Reset Password</Link>
//   </p>
// </div>;

export default Login;
