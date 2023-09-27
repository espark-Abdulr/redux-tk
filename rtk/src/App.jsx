import React from "react";
import "./App.css";
// import Badge from "./components/Badge";
import Options from "./components/Options";
import { Route, Routes } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import ViewUsers from "./components/ViewUsers";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Options />}></Route>
        <Route path="/add" element={<AddUsers />}></Route>
        <Route path="/view" element={<ViewUsers />}></Route>
      </Routes>
    </div>
  );
};

export default App;
