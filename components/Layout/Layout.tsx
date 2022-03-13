import React from "react";
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <main className="min-h-screen ">{children}</main>
    </div>
  );
};

export default Layout;
