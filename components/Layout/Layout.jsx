import React from "react";
import classes from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
