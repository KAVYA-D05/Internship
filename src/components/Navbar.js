import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Prashiskshan</h2>
      <div>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
         <Link to="/internship" style={styles.link}>Internship</Link>
        <Link to="/search" style={styles.link}>Search</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#1e3c72",
    color: "white",
  },
  logo: { margin: 0 },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
