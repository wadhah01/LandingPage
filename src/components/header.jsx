import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"></div>
        <div className="intro-text">
        <h1>
  {props.data ? (
    <>
      {props.data.title.split("HelloMyBot!")[0]}<br />
         HelloMyBot!
    </>
  ) : "Loading"}
</h1>
          <p style={{marginTop:10}}>{props.data ? props.data.paragraph : "Loading"}</p>
          <a href="#features" className="btn btn-custom btn-lg page-scroll">
            Learn More
          </a>
        </div>
        <img
          src="/img/intro-bg.jpeg"
          alt="Chatbot Background"
          className="background-image"
        />
      </div>
    </header>
  );
};
