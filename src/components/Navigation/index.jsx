import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constantes/path";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-3 sm:gap-5">
        <li className="">
          <NavLink to={PATHS.ABOUT} className='text-xs uppercase relative after:content-[""] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100'>About me</NavLink>
        </li>
        <li className="">
          <NavLink to={PATHS.PROJECTS} className='text-xs uppercase relative after:content-[""] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100'>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
