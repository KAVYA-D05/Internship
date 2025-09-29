import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", textAlign: "center" }}>{children}</div>
    </div>
  );
};

export default Layout;
