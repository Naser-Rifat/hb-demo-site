import React from "react";
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <main className="bg-gray-100 min-h-screen ">{children}</main>
    </div>
  );
};

export default Layout;
