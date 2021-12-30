import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => (
  <div>
    <Navbar />
    <div className="container mt-5">{props.children}</div>
  </div>
);

export default Layout;
