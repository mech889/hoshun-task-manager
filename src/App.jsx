import React from "react";
import MainButtons from "./components/MainButtons";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "5rem" }}>
      <h1>禾順數位科技</h1>
      <p>歡迎使用派工與報價系統</p>
      <MainButtons />
    </div>
  );
};

export default App;
