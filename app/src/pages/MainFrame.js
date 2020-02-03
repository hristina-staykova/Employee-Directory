import React from "react";
import MainPage from "./MainPage.js";

function MainFrame() {
  return (
    <>
      <div className="jumbotron text-center">
        <h1>Employee Directory</h1>
      </div>
      <div className="container">
        <MainPage />
      </div>
      <footer className="text-center">
        ESMT Berlin Coding Bootcamp, Hristina Staykova
      </footer>
    </>
  );
}

export default MainFrame;
