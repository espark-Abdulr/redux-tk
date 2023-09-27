import React from "react";
import { useSelector } from "react-redux";

const ViewUsers = () => {
  const data = useSelector((c) => {
    return(c.UserData.users)
  });
  return (
    <>
      {console.log(data)}
      <table className="table-dark" style={{ width: "100vw" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Edit option</th>
            <th scope="col">Delete Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachUser, index) => (
            <tr key={index} >
              <th scope="row">{eachUser.id}</th>
              <td>{eachUser.name}</td>
              <td>{eachUser.age}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-info">
                  Edit
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>21</td>
            <td>
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-info">
                Info
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ViewUsers;
