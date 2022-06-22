import React from "react";
import style from "../style/Navbar.module.css";
import logo from "../image/logo.png";

export default function Navbar() {
     return (
          <div className={style.Navbar}>
               <div className={style.brand}>
                    <a href="/">
                         <img src={logo} alt="logo" />
                    </a>
               </div>

               <div className={style.menu}>
                    <ul className={style.nav}>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   Home
                              </a>
                         </li>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   About
                              </a>
                         </li>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   Services
                              </a>
                         </li>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   Portfolio
                              </a>
                         </li>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   News
                              </a>
                         </li>
                         <li className={style.navItems}>
                              <a href="/" className={style.navLinks}>
                                   Contact
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     );
}
