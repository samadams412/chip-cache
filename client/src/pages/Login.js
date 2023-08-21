import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
// import './pages.css'
import '../index.css'

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div id="login-text" className="container my-1">
     

      <h2 className="mt-3 mb-3">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 col-sm-4">
          <label className="signup__label form-label" htmlFor="exampleFormControlInput1">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            id="email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3 col-sm-4">
          <label className="signup__label form-label" htmlFor="exampleFormControlInput1">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="pwd"
            placeholder="******"
            onChange={handleChange}
          ></input>
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
        <button id="add-btn"type="submit" className="btn mt-2 submit__btn">Submit</button>
         
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
      <Link className="text__primary-2" id="link-color" to="/signup">← Signup Instead</Link>
    </div>
  );
}

export default Login;