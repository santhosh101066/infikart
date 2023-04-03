import React, { useState } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo";
import Dropdown from "./Dropdown";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <header>
        <Logo />
        <nav className="navbar">
          {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
        
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav_searchbar">
              <input className="mysearch"
                type="text"
                name=""
                //  onChange={(e) => getText(e.target.value)}
                placeholder="Search Your Products"
                 /><button className="searchbtn">Search</button>
            </li>
      
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Category
                <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <Link
                to="/Login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Login
              </Link>
            </li>
            {/* <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
          </ul>
          {/* <Button /> */}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
