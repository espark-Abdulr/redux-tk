import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Options = () => {
  const data = useSelector((c) => {
    return c.UserData.users;
  });
  return (
    <div>
      {/* {console.log(data)} */}
      <div className="btn-group" role="group" aria-label="Basic example">
        <NavLink to={"/add"}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ border: "1px solid white", width:"20vw" }}
          >
            Add User
          </button>
        </NavLink>
        <NavLink to={"/view"}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ border: "1px solid white", width:"20vw" }}
          >
            View Users
          </button>
        </NavLink>
        <button
          type="button"
          className="btn btn-primary position-relative"
          style={{ border: "1px solid white", cursor: "not-allowed", width:"20vw"  }}
        >
          Total users Registered
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {data.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Options;
