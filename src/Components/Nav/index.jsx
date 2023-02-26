import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss"
const Nav = () => {
  const inpRef = useRef(null)
  const [value, setValue] = useState(null)
  function search(e) {
    e.preventDefault();
    inpRef.current.value = ""
    setValue(inpRef.current.value)
    useNavigate("/")
  }
  return (
    <nav className="container">
      <Link to="/" id="logo">
        <img
          src="logo.webp"
          alt="logo"
        />
      </Link>
      <form onSubmit={search}>
        <input type="text" id="search" placeholder="Search product..." ref={inpRef}/>
        <button>Search</button>
      </form>
    </nav>
  ), value
};

export default Nav;
