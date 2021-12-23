import React from 'react'
import { useLocation } from "react-router-dom";
import { NavbarAuth } from './NavbarAuth';
import { NavbarNoAuth } from './NavbarNoAuth';

export const Navbar = () => {

   const location = useLocation();  

  return (
     location.pathname === "/dashboard" ? <NavbarAuth />: <NavbarNoAuth />
  );
  
 
}
