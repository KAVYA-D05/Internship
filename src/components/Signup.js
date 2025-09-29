// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password.length >= 6 && name) {
      const user = { name, email };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setError("Please fill all fields. Password min 6 chars.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Signup</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
