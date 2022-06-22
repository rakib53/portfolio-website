import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import style from "../style/ClientSays.module.css";

export default function ClientSays({ ClientsReview, clientIdentity }) {
     return (
          <div className={style.ClientSaysImage}>
               <div className="container">
                    <div className={style.ClientSaysWrapper}>
                         <FaQuoteLeft className={style.FaQuote} />
                         <div className={style.ClientsReviewWrapper}>
                              <h2 className={style.ClientsReview}>
                                   {ClientsReview}
                              </h2>
                         </div>

                         <div className={style.clientTitle}>
                              <p>{clientIdentity}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
