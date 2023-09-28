import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/mySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

const AddUsers = () => {
  // const [users,setUsers] = useState([])
  const data = useSelector((c) => {
    return c.UserData.users;
  });
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const userInformation = {
    unique: uuidv4(),
    name: name,
    age: age,
  };
  const DataHandler = (event) => {
    // console.log("Name: ", name);
    // console.log("Age: ", age);
    dispatch(addUser(userInformation));
    toast.info("User Has Been Added", {
      position: "top-center",
      autoClose: "1000",
      hideProgressBar: true,
      newestOnTop: false,
      closeOnClickrtl: false,
      pauseOnFocusLossdraggablepauseOnHovertheme: true,
      theme: "dark",
    });
    setName("");
    setAge("");
    event.preventDefault();
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <NavLink to={"/"}>
          <button className="btn btn-info">Back To Home</button>
        </NavLink>
      </div>
      <div style={{ color: "white" }}>
        <form onSubmit={DataHandler}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <br />
            <label for="exampleInputPassword1">Age</label>
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              required
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddUsers;
