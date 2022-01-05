import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticated);
    dispatch(load_user);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">{children}</div>
    </div>
  );
};

export default Layout;
