import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import loginBg from "../assets/home-images/login-bg.jpg";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="main login-wrapper hero_image"
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "cover",
      height: "100vh",
      backgroundPosition: "center",
    }}>
      <div className="login-container form-box">
        <div className="login-form-wrapper">

        <div className="subtitle-container">
          <div className="line"></div>
          <h2 className="sub-title">Login</h2>
          <div className="line"></div>
        </div>

        <form noValidate validated={validated} onSubmit={handleFormSubmit} className="login-form">
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="btn-3 btn-login" type="submit">
            Login
            <span></span>
          </button>
        </form>
        {error && <div>Login failed 🚫</div>}
        </div>
       
      </div>
    </main>
  );
};

export default Login;
