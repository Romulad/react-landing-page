import React from "react";
import './service.css';
import logo1 from "./indexiconsitedev.svg"
import logo2 from "./indexredaction.svg"


export default function Services({onContactBtnClick}){
    return(
        <section id="services">
            <div className="container mt-5">
                <h1 className="mb-4 dm-black text-center">Our services</h1>

                <div className="row justify-content-center flex-wrap">

                    <div className="col-md-5 mx-2 mb-4">
                        <div className="border-radius p-3 service-pre">

                            <div className="mb-3">
                                <img src={logo1} 
                                alt="Website creation" className="shadow p-2 border-radius" />
                            </div>

                            <b className=" border-bottom border-dark fs-4 dm-bold" 
                            style={{borderWidth: "2px !important"}}>
                                Get an amazing website/webapp
                            </b>

                            <p className="mt-4 mb-4 opacity-8">
                                Blog, E-commerce... We are at your disposal to offer you the best service
                                creation of website/webapp to achieve your goals:
                                present your business, your portfolio, create your online store... <br /><br />
                                
                                Moving forward with you towards the success of your project is our
                                ultimate goal. This is why we exist. <br/><br/>

                                You have a project, your plan is ready and now you need a great
                                website/webapp: this is where we are useful
                            </p>

                            <a href="#contact-us" className="btn btn-warning 
                        border-radius-lg text-decoration-none fs-6"
                            onClick={onContactBtnClick}>
                            Contact Us
                            </a>

                        </div>
                    </div>

                    <div className="col-md-5 mx-2 mb-4">
                        <div className="border-radius p-3 service-pre">

                            <div className="mb-3"> 
                                <img src={logo2} 
                                alt="Content with AI" className="shadow p-2 border-radius" />
                            </div>

                            <b className="border-bottom border-dark fs-4 dm-bold"
                            style={{borderWidth: "2px !important"}}>
                                Website with AI writing tool
                            </b>

                            <p className="mt-4 mb-4 opacity-8">
                                The content of your website is very important and becomes
                                even more important when you want to be found in search results. 
                                <br /><br />

                                Sometimes we get stuck when creating content and we don't know where
                                begin. In that case, how about a creative assistant?
                                In addition to your website, we will create a
                                GPT integration to help you create quality content.<br /><br />

                                Do you want to use the power of AI on your web app to
                                improve your content writing? We'll do it for you!
                            </p>

                            <a href="#contact-us" className="btn btn-warning 
                        border-radius-lg text-decoration-none fs-6"
                        onClick={onContactBtnClick}>
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}