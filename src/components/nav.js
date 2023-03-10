import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main Page</div>
      </Link>
      <Link to="/stocks">
        <div>STOCKS</div>
      </Link>
    </div>
  );
};

export default Nav;