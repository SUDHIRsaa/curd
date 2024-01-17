import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const initial = { name: "", email: "", password: "" };
  const [data, setData] = useState(initial);

  const { name, email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const goThere = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    const post = await axios.post("http://localhost:4000", data);
    if (!post) {
      console.log("Error");
    }
    console.log("Success");
    goThere("/login");
  }

  return (
    <div style={{ 
      background: 'linear-gradient(to right, orange, blue, green)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <form style={{ 
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Sign Up</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label" style={{ color: '#333' }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            value={name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#333' }}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <div id="emailHelp" className="form-text" style={{ color: '#666' }}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#333' }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#007bff", color: "#fff", width: "100%" }}
          onClick={(e) => handleClick(e)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
