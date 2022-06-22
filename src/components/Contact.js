import React from "react";
import Form from "./Form";
import Input from "./Input";
import style from "../style/Contact.module.css";
import Button from "./Button";

export default function Contact() {
     return (
          <div className="container">
               <div className="pageIdentity">
                    <h2 className="pageTitle">Contact ME</h2>
                    <p className="pageSologan">Get in touch with me</p>
               </div>

               <div className={style.contactMe}>
                    <div className={style.contactInfo}>
                         <h3
                              className="myTitle"
                              style={{
                                   marginTop: "15px",
                              }}
                         >
                              Get in Touch
                         </h3>
                         <span className={style.myAddress}>
                              <b>Address:</b>
                              <p className="sectionDesc">
                                   123 Qwerty Avenue NYC, USA
                              </p>
                         </span>

                         <span className={style.myAddress}>
                              <b>Email:</b>
                              <p className="sectionDesc">example@gmail.com</p>
                         </span>

                         <span className={style.myAddress}>
                              <b>Phone:</b>
                              <p className="sectionDesc">+77 022 177 05 05</p>
                         </span>

                         <span className={style.myAddress}>
                              <b>Website:</b>
                              <p className="sectionDesc">
                                   www.windstripethemes.com
                              </p>
                         </span>
                    </div>

                    <div className={style.contactForm}>
                         <Form>
                              <Input
                                   type="text"
                                   placeholder="name"
                                   className={style.myInput}
                              />
                              <Input
                                   type="text"
                                   placeholder="email"
                                   className={style.myInput}
                              />
                              <Input
                                   type="text"
                                   placeholder="subject"
                                   className={style.myInput}
                              />
                              <textarea
                                   name=""
                                   id=""
                                   cols="10"
                                   rows="10"
                                   placeholder="message"
                                   className={style.myInput}
                                   style={{ height: "80px", resize: "none" }}
                              ></textarea>

                              <Button className="myBtn">
                                   <a href="/">Send Message</a>
                              </Button>
                         </Form>
                    </div>
               </div>
          </div>
     );
}
