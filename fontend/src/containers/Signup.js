import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authApi from "../api/authApi";

const Signup = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    re_password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    hasErr: false,
    msg: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authApi.signup(
        formData.email,
        formData.name,
        formData.password,
        formData.re_password
      );
      setSuccess(true);
      setError({ ...error, hasErr: false });
    } catch (err) {
      setError({
        hasErr: true,
        msg: "co loi",
      });
      setSuccess(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>SIGN UP</h1>
      <p>Create new account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        {error.hasErr && (
          <div className="alert alert-danger mt-3" role="alert">
            {error.msg}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            Please open your email and click the activation link to activate
            your account!
          </div>
        )}
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
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
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            value={formData.re_password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </form>
      <p className="mt-3">
        Have a account <Link to="/login">Login Now</Link>
      </p>
    </div>
  );
};

export default Signup;
