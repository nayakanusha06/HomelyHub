import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header"; // Make sure to import the Header component
import Footer from "./Footer"; // Make sure to import the Footer component

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
