import React, { useState } from "react";
import "./forms.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/mySlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const userInformation = {
    email: email,
    pass: pass,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setPass("");
    dispatch(loginUser(userInformation));
    // console.log(state.errorMessage);
    navigate("/options");
    // navigate("/options");
  };
  return (
    <div className="signin-main">
      <h1>Welcome Back</h1>
      <form onSubmit={LoginHandler}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          required
          minLength={3}
          value={pass}
        />
        <button type="submit">Welcome Back</button>
      </form>
      <h3>
        Don't Have An Account? <NavLink to={"/"}>Create one.</NavLink>
      </h3>
    </div>
  );
};

export default Signin;
