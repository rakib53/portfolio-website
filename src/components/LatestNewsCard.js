import React from "react";
import style from "../style/LatestNewsCard.module.css";
import Button from "./Button";

export default function LatestNewsCard({
     image,
     postDate,
     postBy,
     title,
     shortDesc,
}) {
     return (
          <div className={style.LatestNewsCardWrapper}>
               <div className="cardHeader">
                    <img className={style.image} src={image} alt="postImage" />
               </div>
               <div className={style.cardBody}>
                    <span className={style.postDate}>
                         <p>14 June 2019</p>
                         <a className={style.postBy} href="name">
                              ARLO
                         </a>
                    </span>
                    <h3 className={style.title}>
                         How to Create Great Logo for Your Business
                    </h3>

                    <p className="sectionDesc">
                         If you are reading this, you probably plan to start a
                         small business or a side hustle very soon. And you
                         probably have a couple ...
                    </p>
                    <Button className="myBtn">
                         <a href="/">Read More</a>
                    </Button>
               </div>
          </div>
     );
}
