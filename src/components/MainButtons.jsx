import React from "react";

const MainButtons = () => {
  const buttonStyle = {
    padding: "1rem 2rem",
    margin: "1rem",
    fontSize: "1.2rem",
    cursor: "pointer"
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => alert("前往排工系統")}>排工系統</button>
      <button style={buttonStyle} onClick={() => alert("前往報價系統")}>報價系統</button>
    </div>
  );
};

export default MainButtons;
