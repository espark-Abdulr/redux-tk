import React from "react";
import "./App.css";
// import Badge from "./components/Badge";
import Options from "./components/Options";
import { Route, Routes } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import ViewUsers from "./components/ViewUsers";
import { useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";

const App = () => {
  const isLogin = useSelector((c) => {
    return c.UserData.isLogin;
    // console.log(c.UserData.isLogin);
  });
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Options />}></Route>
        <Route path="/add" element={<AddUsers />}></Route>
        <Route path="/view" element={<ViewUsers />}></Route>
      </Routes> */}
      {isLogin === true ? (
        <Routes>
          <Route path="/" element={<Options />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/options" element={<Options />}></Route>
          <Route path="/add" element={<AddUsers />}></Route>
          <Route path="/view" element={<ViewUsers />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="*" element={<Signin />}></Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
