import React, { useState } from "react";
import "./forms.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/mySlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const userInformation = {
    name: name,
    email: email,
    pass: pass,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignUpHandler = (event) => {
    event.preventDefault();
    if (confirmPass !== pass) {
      alert("Password Didn't Match");
    } else {
      dispatch(registerUser(userInformation));
      setName("");
      setEmail("");
      setPass("");
      setConfirmPass("");
      navigate("/login");
    }
  };
  return (
    <div className="signup-main">
      <h1>Create Account</h1>
      <form onSubmit={SignUpHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          minLength={3}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          required
          minLength={3}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          required
          minLength={3}
        />
        <button type="submit">Register</button>
      </form>
      <h3>
        Already Have an Account? <NavLink to={"/login"}>Click Here</NavLink>{" "}
      </h3>
    </div>
  );
};

export default SignUp;
