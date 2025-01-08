import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constantes/path";
import logo from "../../assets/img/logo.webp";

const Logo = () => {
  return (
    <NavLink to={PATHS.HOME}>
      <img className="w-[150px] sm:w-[200px]" src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
