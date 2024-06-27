import React from "react";

const Header = ({ headerText }) => {
  return (
    <header
      style={{
        backgroundColor: "#0a544f",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2em" }}>{headerText}</h1>
    </header>
  );
};

export default Header;
