import React, { useState } from "react";
import {Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Head from "./head";
const Header =() =>{
    const [sidebar, setSidebar]= useState(false)
    window.addEventListener("scroll", function (){
        const header = document.querySelector(".header")
        header.classList.toggle("active",window.scrollY > 200)
    })
    return(
        <>
         
        <header className="header">
        <Head/>
            <div className="container flex" style={{marginTop:"20px"}}>
                <div className="logo">
                    <img src="./images/logopoly.png" alt="" style={{width:"180px", height:"45px"}}  />
                    </div>
                    <div className ="nav">
                        <ul className={sidebar ? "nav-links-sidebar":"nav-links"} onClick={()=> setSidebar(false)}>
                            <li className="lil">
                               <Link to='/' >Accueil</Link></li>
                             <li  className="lil">  <Link to='/About' >A propos</Link>
                            </li>
                            <li className="dropdown lil">
                            <Link to='/blog'  >Services</Link>
        
     
            </li>
                             <li  className="lil">    <Link to='/Contact' >Contact</Link></li>
                             <li className="icon lil">
                                <SearchOutlinedIcon className="HeaderIcon"/>
                           

                             </li>
                            
                        </ul>
                        <div className=" navlogo1"></div>
                        <div className="navlogo ">   </div>
                    </div>
                    <button className="navbar-item-icon" onClick={() => setSidebar(!sidebar)}>
                        {sidebar ? <CloseIcon /> : <MenuIcon/>}

                    </button>
                    
                    
                    </div></header></>
    )
}
export default Header 