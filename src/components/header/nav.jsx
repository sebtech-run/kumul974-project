import React from 'react';
import '../style/nav/nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (

       <>
         <div className='nav'>
         <NavLink className='nav_link' to="/">
           <p>MENU</p>
         </NavLink>
         <NavLink className='nav_link' to="/actualite">
           <p>ACTUALITÉ</p>
         </NavLink>
         <NavLink className='nav_link' to="/course">
           <p>COURSES</p>
         </NavLink>
         <NavLink className='nav_link' to="/photo">
           <p>PHOTOS</p>
         </NavLink>

            
         </div>
       </>
    );
};

export default Nav;