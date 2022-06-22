import React from "react";
import style from "../style/Profile.module.css";
import myImage from "../image/img.jpg";

export default function Profile() {
     return (
          <div className={style.Profile}>
               <div className={style.myPhotos}>
                    <img src={myImage} alt="" />
               </div>
               <div className={style.myIdentity}>
                    <h1 className={style.myName}>
                         ALAN <b className={style.myNameBold}>MICHAELIS</b>
                    </h1>
                    <p className={style.mySkills}>I'm a Freelancer</p>
               </div>

               <div className={style.bounce}>
                    <h2>b</h2>
               </div>
          </div>
     );
}
