import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = (props) => {
  const { formData, setFormData } = useState({
    email: "",
    password: "",
  });

  // const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Is the user authenticated ?
  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign into your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={FormData.email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={FormData.password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have a account <Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3">
        <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};

export default Login;
