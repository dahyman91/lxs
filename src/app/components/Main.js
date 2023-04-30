"use client";

import React from "react";
import Header from "./Header";

import "./Hero.css";

function hero() {
  return (
    <div
      className="main"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundImage: 'url("../../../assets/placeholder.jpg")',
      }}
    >
      <Header />
    </div>
  );
}

export default hero;
