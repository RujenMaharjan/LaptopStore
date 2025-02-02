import React from 'react'
import './Navbar.css'
import { Logo } from '../Logo/Logo'
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export const Navbar = () => {
  return (
    <div>
        <div className="left">
            <div className="logo"><Logo /></div>
        </div>
        <div className="center">
        </div>
        <div className="right">
        </div>
    </div>
  )
}
export default Navbar;