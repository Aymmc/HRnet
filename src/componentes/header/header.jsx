import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <>
    <header>
       <h1>HRnet</h1>
      <NavLink to="/employee-list">Voir les employée(s)</NavLink>
      </header>
    </>
  );
};

export default Header;
