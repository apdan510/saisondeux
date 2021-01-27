import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BELLA_TOKA/SEASON2.JOURNAL
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nutrient-list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nutrient List
              </Link>
            </li>                       
            <li className="nav-item">
              <Link
                to="/veg"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Veg
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/flower"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Flower
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/harvest"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Harvest
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/stats"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Stats
              </Link>
            </li>            
            <li className="nav-item">
              <Link
                to="/future-ventures"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Future Ventures
              </Link>
            </li>
            <li>
              <Link
                to="/links-to-learn"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Links to Learn
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Bitcoin whitepaper</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
// https://ipfs.io/ipfs/QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj