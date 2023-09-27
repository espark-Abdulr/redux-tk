import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/mySlice";

const AddUsers = () => {
  // const [users,setUsers] = useState([])
  const data = useSelector((c) => {
    return c.UserData.users;
  });
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  
  const userInformation = {
    id: data.length + 1,
    name: name,
    age: age,
  };
  const DataHandler = (event) => {
    // console.log("Name: ", name);
    // console.log("Age: ", age);
    dispatch(addUser(userInformation));
    event.preventDefault();
  };
  return (
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
            defaultValue={name}
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
            defaultValue={age}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
