import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function PrivateRoutes(props) {
  return (
    <>
      <Header /><div className="container mt-5">  {props.Component} </div><Footer />
    </>
  );
}

export default PrivateRoutes;
