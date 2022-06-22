import React from "react";
import style from "../style/ProjectFinished.module.css";
import CountUp from "react-countup";

export default function ProjectFinished() {
     return (
          <div className="container">
               <div className={style.ProjectFinished}>
                    <div className={style.projectCard}>
                         <h1>
                              <CountUp end={2222} />
                         </h1>
                         <p>Project Completed</p>
                    </div>

                    <div className={style.projectCard}>
                         <h1>
                              <CountUp end={333} />K
                         </h1>
                         <p>Lines of codes</p>
                    </div>
                    <div className={style.projectCard}>
                         <h1>
                              <CountUp end={8888} />
                         </h1>
                         <p>happy clients</p>
                    </div>
                    <div className={style.projectCard}>
                         <h1>
                              <CountUp end={777} />+
                         </h1>
                         <p>my awards</p>
                    </div>
               </div>
          </div>
     );
}
