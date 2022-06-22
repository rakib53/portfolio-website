import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import style from "../style/latestNews.module.css";
import post1 from "../image/post1.jpg";
import post2 from "../image/post2.jpg";
import post3 from "../image/post3.jpg";

export default function LatestNews() {
     return (
          <div className={style.latestNewsWrappers}>
               <div className="container">
                    <div className="pageIdentity">
                         <h2 className="pageTitle">LATEST NEWS</h2>
                         <p className="pageSologan">
                              Check out our latest News
                         </p>
                    </div>
               </div>
               <div className="container">
                    <div className={style.latestNews}>
                         <LatestNewsCard image={post1} />
                         <LatestNewsCard image={post2} />
                         <LatestNewsCard image={post3} />
                    </div>
               </div>
          </div>
     );
}
