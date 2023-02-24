import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss"
const Nav = () => {
  return (
    <nav className="container">
      <Link to="/" id="logo">
        <img
          src="logo.webp"
          alt="logo"
        />
      </Link>
      <form>
        <input type="text" id="search" placeholder="Search product..."/>
        <button>Search</button>
      </form>
    </nav>
  );
};

export default Nav;
