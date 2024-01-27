import React from "react";
import "./work.css";


export default function HowItWork({onContactBtnClick}){
    return(
        <section id="how-it-work" className="container mt-5">

            <h1 className="mb-4 text-center dm-black">How it works?</h1>

            <div className="row justify-content-around">

                <div className="col-md-4">
                    <div className="step-1 border-radius text-white p-3 mb-4 shadow Tr-1" id="step-1">
                        <h3 className="mb-5 fs-lg" >➊</h3>

                        <p className="mb-5">Look at the services. Choose the service
                            which really correspond to your needs and adapted to
                            your project.
                        </p>

                        <a href="#services" className="btn btn-success 
                        border-radius-lg text-decoration-none ">
                            Services
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="step-3 border-radius text-white p-3 shadow mb-4 Tr-1" id="step-2">
                        <h3 className="mb-5 fs-lg">➋</h3>

                        <p className="mb-5">
                            Now, are you ready? Fill out the contact form
                            and tell us more about your project.
                        </p>

                        <a href="#contact-us" className="btn btn-success 
                        border-radius-lg text-decoration-none bg-success"
                        onClick={onContactBtnClick}>
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="step-2 border-radius text-white p-3 shadow Tr-1" id="step-3">
                        <h3 className="mb-5 fs-lg">➌</h3>

                        <p className="mb-5">
                            Do you have a specific web app or website project in mind?
                            Contact us and let's discuss
                        </p>

                        <a href="#contact-us" className="btn btn-success 
                        border-radius-lg text-decoration-none bg-success"
                        onClick={onContactBtnClick}>
                            Contact Us
                        </a>
                    </div>
                </div>
                
            </div>

        </section>
    )
}