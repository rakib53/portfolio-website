import React from "react";
import style from "../style/Card.module.css";

export default function ServiceCard({ image, title, desc, dot, className }) {
     return (
          <div className={style.cardWrapper}>
               <div className={style.card}>
                    <div className={style.services}>
                         <div>{image}</div>
                         <h2 className={style.title}>{title}</h2>
                         <p className="sectionDesc">{desc}</p>
                         <p className={style.dot}>{dot}</p>
                    </div>
               </div>
          </div>
     );
}
