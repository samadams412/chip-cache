import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../index.css'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div id="login-text" className="product-font container my-1">
      <Link className="text__primary-2" id="link-color" to="/login">← Login Instead</Link>

      <h2 className="mt-3 mb-3">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 col-sm-4">
          <label className="signup__label" htmlFor="email">Email:</label>
          <input
            placeholder="name@example.com"
            name="email"
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-sm-4">
          <label className="signup__label" htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            className="form-control"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
        </div>
        <div className="mb-3">
          <label className='signup__label my-1'>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />{' '}
            I accept the terms and conditions
          </label>
        </div>
        <button
          id="add-btn"
          type="submit"
          className='btn submit__btn'
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;