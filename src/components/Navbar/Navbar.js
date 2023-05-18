import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 511);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div
        className="navlogocontainer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <h1>SMARTBANKING</h1>
      </div>
      <div className={isMobile ? "hamburger-menu" : "navlistcontainer"}>
        {isMobile ? (
          <div className="hamburger-icon" onClick={() => setIsMobile(!isMobile)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <ul className="navlist">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/accounts">ACCOUNTS</a>
            </li>
            <li>
              <a href="/create">REGISTER</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
