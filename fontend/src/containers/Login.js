import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
            value={formData.email}
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
            value={formData.password}
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
