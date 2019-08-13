import React from "react";
import './Home.css';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className='Home'>
        <NavLink className='Home__button' to='/vocabulary'>Vocabulary</NavLink>
        <NavLink className='Home__button' to='/grammar'>Grammar</NavLink>
    </div>
  );
}

export default Home;