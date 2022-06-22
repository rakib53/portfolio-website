import React from "react";
import ServiceCard from "./ServiceCard";
import style from "../style/Services.module.css";
import { AiFillChrome, AiOutlineFile } from "react-icons/ai";
import { TbBrandWindows } from "react-icons/tb";
import { HiShare } from "react-icons/hi";
import { FaTrademark } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function Service() {
     return (
          <div className="container">
               <div className="pageIdentity">
                    <h2 className="pageTitle">AMAZING SERVICES</h2>
                    <p className="pageSologan">Meet our amazing services</p>
               </div>

               <div className={style.serviceWrapper}>
                    <ServiceCard
                         image={<AiFillChrome className={style.icons} />}
                         title="Photography"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />
                    <ServiceCard
                         image={<AiOutlineFile className={style.icons} />}
                         title="Web Design"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />
                    <ServiceCard
                         image={<TbBrandWindows className={style.icons} />}
                         title="Branding"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />
                    <ServiceCard
                         image={<HiShare className={style.icons} />}
                         title="Social Media"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />
                    <ServiceCard
                         image={<FaTrademark className={style.icons} />}
                         title="Illustrator"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />

                    <ServiceCard
                         image={<IoAnalyticsSharp className={style.icons} />}
                         title="Marketing"
                         desc="Web design is a similar process of creation, with the intention of presenting the content on electronic pages"
                         dot="..."
                    />
               </div>
          </div>
     );
}
