import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, removeUser } from "../features/mySlice";
import "./View.css";
import { NavLink } from "react-router-dom";

const ViewUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((c) => {
    return c.UserData.users;
  });

  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const editObj = {
    name: newName,
    age: newAge,
    unique: editId,
  };

  const Deletehandler = (obj) => {
    dispatch(removeUser(obj));
  };

  const EditHandler = (user) => {
    setShowEdit(true);
    setNewName(user.name);
    setNewAge(user.age);
    setEditId(user.unique);
    // editObj.age = newAge;
    // console.log("Old: ",user);
  };
  const DoEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(editUser(editObj));
    setShowEdit(false);
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
      {/* {console.log(data[0].unique)} */}
      {showEdit ? (
        <form
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "white",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              padding: "0px 10px",
            }}
          >
            <button onClick={() => setShowEdit(false)}>Cancel Edit</button>
          </div>
          <input
            type="text"
            style={{ width: "90%" }}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            style={{ width: "90%" }}
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <button style={{ width: "90%" }} onClick={DoEdit}>
            Submit
          </button>
        </form>
      ) : (
        <table className="table-dark" style={{ width: "100vw" }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Edit option</th>
              <th scope="col">Delete Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachUser, index) => (
              <tr key={index}>
                <td>{eachUser.name}</td>
                <td>{eachUser.age}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => Deletehandler(eachUser)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => EditHandler(eachUser)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewUsers;
