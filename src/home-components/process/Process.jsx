import React, { useEffect } from "react";
import './process.css'
import { isVisibleByC } from "../../utils";


export default function Process(){

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            document.querySelectorAll('.process').forEach((el)=>{
                if(isVisibleByC("", el.id, false, true)){
                    el.firstElementChild.lastElementChild.classList.add('bg-warning')
                }
            })
        });
    }, [])

    return(
        <section id="process" className="mt-7">

        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-5 process-head">
                    <h1 className="text-center dm-black mb-3">Our Process</h1>
                    <p className="mb-0 text-center mx-1 opacity-8">
                        When it comes to web design and development, it's
                        very important to work with a compagny that knows how get things done.
                        We follow a process that allows us to work with you at your pace and create
                        an atmosphere that allows you to participate in the process. It's a 
                        collaboration, not a dictatorship.
                    </p>
                </div>

                <div className="col-md-6">
                    <div className="d-flex flex-column">

                        <div className="d-flex process" id="process-1">
                            <div className="me-3 fs-5 position-relative ">
                                <div className="border-left-center"></div>
                                <i className="bi bi-person-badge process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-5 shadow px-3 pb-3 pt-1 border-radius-md">
                                <b className="fs-5 text-warning dm-bold">Discover</b>
                                <p className="mb-0 opacity-8"> 
                                    We need to understand your needs and requirements. This 
                                    process is very simple and consists of filling out a 
                                    questionnaire form which can help us understand your needs.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex process" id="process-2">
                            <div className="me-3 fs-5 position-relative">
                                <div className="border-left-center"></div>
                                <i className="bi bi-palette process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-5 px-3 pb-3 pt-1 border-radius-md shadow">
                                <b className="fs-5 text-warning dm-bold">Conception</b>
                                <p className="mb-0 opacity-8"> 
                                    Using the informations you provided in the previous phase,
                                    our team will work to create a design fo your comments and contributions.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex process" id="process-3">
                            <div className="me-3 fs-5 position-relative">
                                <div className="border-left-center"></div>
                                <i className="bi bi-code-slash process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-5 px-3 pb-3 pt-1 border-radius-md shadow">
                                <b className="fs-5 text-warning dm-bold">Development</b>
                                <p className="mb-0 opacity-8"> 
                                    Once you have approved the design, it's time to
                                    take action! We will convert the design into a 
                                    website and share with you a private link 
                                    to preview and test your new site.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex process" id="process-4">
                            <div className="me-3 fs-5 position-relative">
                                <div className="border-left-center"></div>
                                <i className="bi bi-card-text process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-5 px-3 pb-3 pt-1 border-radius-md shadow">
                                <b className="fs-5 text-warning dm-bold">Content</b>
                                <p className="mb-0 opacity-8"> 
                                    Customers visit your website for reasons, 
                                    you need to be sure that all their questions are answered! 
                                    Content is crucial for a website like the heart is 
                                    important for the human body. We will page your content
                                    so that it's beautiful and easy to read.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex process" id="process-5">
                            <div className="me-3 fs-5 position-relative">
                                <div className="border-left-center"></div>
                                <i className="bi bi-cloud-arrow-down process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-5 px-3 pb-3 pt-1 border-radius-md shadow">
                                <b className="fs-5 text-warning dm-bold">Deployment</b>
                                <p className="mb-0 opacity-8"> 
                                    Excited about bringing your site to the world!
                                    We will do all the technical work for you.
                                    Making it available on your server, making it live,
                                    debugging if necessary.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex process" id="process-6">
                            <div className="me-3 fs-5 position-relative">
                                <i className="bi bi-people process-icon rounded-circle"></i>
                            </div>

                            <div className="mb-4 px-3 pb-3 pt-1 border-radius-md shadow">
                                <b className="fs-5 text-warning dm-bold">Training</b>
                                <p className="mb-0 opacity-8"> 
                                    Your website is lauched, this is just 
                                    the beginning! We will help you with how 
                                    to manage your site as well as respond to all 
                                    your queries. Your site will need regular care to thrive.
                                    We will be available at your side!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        
    </section>
    )
}