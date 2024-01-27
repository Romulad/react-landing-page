import React from "react";
import business from "./business-team-icon.svg";
import competitif from "./indexiconcompetitif.svg";
import quality from "./indexiconquality.svg";
import training from "./online-training-icon.svg"
import "./help.css";


export default function Help(){
    return(
        <section id="how-can-we-help-you" className="mt-7">
            <div className="container">

                <h1 className="text-center dm-black mb-4">How can we help you?</h1>

                <div className="row flex-wrap-reverse mx-1">

                    <div className="col-md-6 my-auto" id="help-icon-container">

                        <div className="d-flex icon-container justify-content-around flex-wrap">
                            <div className="mb-3 bg-white border-radius p-2 shadow-lg w-200px me-1 Tr-1 scale-0" id="help-1">
                                <div className=" text-center">
                                    <img src={business} 
                                    alt="Experienced Team" className="img-fluid d-inline-block w-50px" />
                                </div>
                                <p className="mt-2 text-center mb-0 opacity-8">Experienced team</p>
                            </div>

                            <div className="mb-3 bg-white border-radius p-2 shadow-lg w-200px me-1 Tr-1 scale-0" id="help-2">
                                <div className="text-center">
                                <img src={competitif}
                                    alt="offer" className="img-fluid d-inline-block w-30px" /> 
                                </div>
                                
                                <p className="mt-2 text-center mb-0 opacity-8">Quality and affordable service</p>
                            </div>
                        </div>

                        <div className="d-flex icon-container justify-content-around flex-wrap">
                            <div className="mb-3 bg-white border-radius p-2 shadow-lg w-200px me-1 Tr-1 scale-0" id="help-3">
                                <div className="text-center">
                                    <img src={training} 
                                    alt="Training" className="img-fluid d-inline-block w-40px"/>
                                </div>

                                <p className="text-center mt-2 mb-0 opacity-8">At your service</p>
                            </div>

                            <div className="mb-3 bg-white border-radius p-2 shadow-lg w-200px me-1 Tr-1 scale-0" id="help-4">
                                <div className="text-center">
                                    <img src={quality}
                                    alt="Quality" className="img-fluid d-inline-block w-50px" />
                                </div>

                                <p className="text-center mt-2 mb-0 opacity-8">Complete satisfaction</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 help-text-container shadow text-white border-radius-md p-3 mb-3">
                        <p>
                            Do you have a web development project that requires experience 
                            and expertise? Your first step starts 
                            <a href="#services" className=" text-warning text-decoration-none"> HERE</a>. 
                            Make your life easier, optimize your time, benefit 
                            from the best service without breaking the bank, 
                            whatever the scale of your project.<br /><br /> 

                            With our experience and technical expertise, 
                            we will bring you quality in achieving your goals: 
                            increase your visibility, increase your income, 
                            strengthen the notoriety of your brand, retain your customers, 
                            all with the highest return on investment. <br /><br /> 
                            
                            From a simple freelance project to large projects, 
                            we are at your service to realize your ideas.
                        </p>
                    </div>   
                </div>
            </div>
            
    </section>
    )
}