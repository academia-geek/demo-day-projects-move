import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>ESTE ES EL REGISTER</h1>
      <hr />
      <Link to="/login">Login</Link>
      <hr />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
