import React from "react";
import './PageNotFound.css';
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='PageNotFound'>
      <h1>Page Not Found</h1>
      <NavLink className='PageNotFound__button' to='/'>Home</NavLink>
      </div>
  );
}

export default PageNotFound;