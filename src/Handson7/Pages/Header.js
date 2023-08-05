import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="child1">
          <Link to="/"> Home</Link>
        </div>
        <div className="child1">
          <Link to="/student">Student</Link>
        </div>
        <div className="child1">
          <Link to="/contact">ContactUs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
