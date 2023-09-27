import React from "react";
import { useSelector } from "react-redux";

const ViewUsers = () => {
  const data = useSelector((c) => {
    console.log(c.UserData.users);
  });
  return <div></div>;
};

export default ViewUsers;
