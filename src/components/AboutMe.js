import React from "react";
import style from "../style/AboutMe.module.css";
import MyImage from "../image/1.jpg";
import Button from "./Button";

export default function AboutMe() {
     return (
          <div className="container">
               <div className="pageIdentity">
                    <h2 className="pageTitle">ABOUT ME</h2>
                    <p className="pageSologan">Main informations about me</p>
               </div>

               <div className={style.AboutMeWrapper}>
                    <div>
                         <div className={style.imageCover}>
                              <img
                                   src={MyImage}
                                   alt="my_photo"
                                   className={style.myImage}
                              />
                         </div>
                    </div>

                    <div className={style.AboutMe}>
                         <div>
                              <h2 className={style.myTitle}>
                                   I'm Alan Michaelis and
                              </h2>
                              <p className={style.myDesc}>
                                   Hi! My name is{" "}
                                   <b className={style.nameColor}>
                                        Alan Michaelis
                                   </b>
                                   . I am a Web Developer, and I'm very
                                   passionate and dedicated to my work. With 20
                                   years experience as a professional Web
                                   developer, I have acquired the skills and
                                   knowledge necessary to make your project a
                                   success. I enjoy every step of the design
                                   process, from discussion and collaboration to
                                   concept and execution, but I find the most
                                   satisfaction in seeing the finished product
                                   do everything for you that it was created to
                                   do.
                              </p>
                         </div>

                         <div className={style.myAddress}>
                              <ul>
                                   <li>
                                        <span>
                                             <label>Birthday:</label>{" "}
                                             <p>01.07.1990</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>City:</label>{" "}
                                             <p>New York, USA</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Study:</label>{" "}
                                             <p> Chicago University</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Website:</label>{" "}
                                             <p>www.mywebsite.com</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Phone:</label>{" "}
                                             <p>+77 022 177 05 05</p>
                                        </span>
                                   </li>
                              </ul>

                              <ul>
                                   <li>
                                        <span>
                                             <label>Age:</label>
                                             <p>28</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Interest:</label>
                                             <p>Soccer, UFC</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Degree:</label>
                                             <p> Master</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Mail:</label>
                                             <p>mymail@gmail.com</p>
                                        </span>
                                   </li>
                                   <li>
                                        <span>
                                             <label>Twitter:</label>
                                             <p>@myusername</p>
                                        </span>
                                   </li>
                              </ul>
                         </div>

                         <div className={style.Buttons}>
                              <Button className="myBtn">
                                   <a href="/">Download CV</a>
                              </Button>
                              <Button className="myBtn">
                                   <a href="/">Send Message</a>
                              </Button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
