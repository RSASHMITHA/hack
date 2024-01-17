import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaDollarSign,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Transaction History",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"report",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Loan",
            icon:<FaDollarSign />
        },
        {
            path:"/proList",
            name:"Settings",
            icon:<FaCog />
        }
    ]
    return (
        <div className="container">
        <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
        <div className="top_section">
        <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
        <FaBars onClick={toggle}/>
        </div>
        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">&nbsp;&nbsp;&nbsp;&nbsp;USER</h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;