import React from "react";
import Profile from "./Profile";
import style from "../style/Layout.module.css";
import ProjectFinished from "./ProjectFinished";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import Service from "./Service";
import Contact from "./Contact";
import Copyright from "./Copyright";
import LatestNews from "./LatestNews";
import ClientSays from "./ClientSays";

export default function Layout() {
     return (
          <div className={style.layout}>
               <Profile />
               <AboutMe />
               <MyExperience />
               <Service />
               <ClientSays
                    ClientsReview="“Awesome to work with Arlo. Good organized,
                                   easy to communicate with, responsive with
                                   next iterations.”"
                    clientIdentity="Antonio Baraley, CEO Founde"
               />
               <ProjectFinished />
               <LatestNews />
               <Contact />
               <Copyright />
          </div>
     );
}
