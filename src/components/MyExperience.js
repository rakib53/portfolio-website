import React from "react";
import style from "../style/MyExperience.module.css";

export default function MyExperience() {
     return (
          <div className={style.MyExperience}>
               <div className="container">
                    <div className={style.myExperienceWrapper}>
                         <div className={style.experienceTitle}>
                              <h2 className="sectionTitle">
                                   Some About my Abilities
                              </h2>
                              <p className={`${style.description} sectionDesc`}>
                                   {" "}
                                   Lorem Ipsum is simply dummy text of the
                                   printing and typesetting industry. Lorem
                                   Ipsum has been the industry's standard dummy
                                   text ever since. Lorem Ipsum has been the
                                   industry. Lorem Ipsum has been the industry's
                                   standard dummy text since. Lorem Ipsum is
                                   simply.
                              </p>
                         </div>

                         <div className={style.mySkillsWrapper}>
                              <div className={style.mySkills}>
                                   <div className={style.indivifualSkill}>
                                        <label>Wordpress - </label>
                                        <p> 3 years of experience</p>
                                   </div>
                                   <div>
                                        <div
                                             className={style.progressBar}
                                        ></div>
                                   </div>
                              </div>

                              <div className={style.mySkills}>
                                   <div className={style.indivifualSkill}>
                                        <label>CSS - </label>
                                        <p> 4 years of experience</p>
                                   </div>
                                   <div>
                                        <div
                                             className={style.progressBar}
                                        ></div>
                                   </div>
                              </div>

                              <div className={style.mySkills}>
                                   <div className={style.indivifualSkill}>
                                        <label>HTML - </label>
                                        <p> 6 years of experience</p>
                                   </div>
                                   <div>
                                        <div
                                             className={style.progressBar}
                                        ></div>
                                   </div>
                              </div>

                              <div className={style.mySkills}>
                                   <div className={style.indivifualSkill}>
                                        <label>After effect - </label>
                                        <p> 5 years of experience</p>
                                   </div>
                                   <div>
                                        <div
                                             className={style.progressBar}
                                        ></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
