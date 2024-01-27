import React from "react";


export default function WhyUs(){
    return(
        <section id="why-us">
            <div className="container mt-5">
                <h1 className="dm-black text-center mb-4">Why us?</h1>

                <div className="text-center mb-4">
                    <p className="d-inline-block opacity-8" style={{maxWidth: "700px"}}>
                        we offer a quality and affordable service to help you attract more
                        visitors and keep them on your website. More than a beautiful design
                        we create websites with a complete strategy, make sure to transform your visitors
                        as a potential customer. First impressions are very important in business.
                    </p>
                </div>

                <div className="row flex-wrap">
                    <div className="col-md-4 mb-3">
                       <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-currency-exchange fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">Affordable</b>
                                <p className="mt-2 opacity-8">
                                    Our services are affordable to help you
                                    achieve your goals. 
                                    Our service prices allow us to be the best choice 
                                    for the creation of website/web app.
                                </p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-stars fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">Quality design</b>
                                <p className="mt-2 opacity-8">
                                    We will design your website with the goal of 
                                    getting your visitors to do what you want. 
                                    Let us create a professional design for your website.
                                </p>
                            </div>
                        </div>

                    </div>
                
                    <div className="col-md-4 mb-3">
                        <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-lightning-charge-fill fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">Speed website</b>
                                <p className="mt-2 opacity-8">
                                    More than half of visitors leave a website that takes more 
                                    than 3 seconds to load. Time is important to visitors, 
                                    so a great user experience is our priority.
                                </p>
                            </div> 
                        </div>

                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-layout-wtf fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">Responsive design</b>
                                <p className="mt-2 opacity-8">
                                    More than 50% of web traffic comes from small devices.
                                    A responsive website across devices helps you reach more people 
                                    and therefore more customers. If 
                                    you want to succeed online, you need a responsive website 
                                    for both your business and search engines.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-person-check fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">Satisfaction guaranteed</b>
                                <p className="mt-2 opacity-8">
                                    We will work with you until you are happy.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="p-3 border-radius-md shadow">
                            <div>
                                <i className="bi bi-reception-4 fs-4"></i>
                            </div>

                            <div>
                                <b className="fs-5 dm-bold text-warning">SEO optimized</b>
                                <p className="mt-2 opacity-8">
                                    A website ranking in search results generates more traffic and more leads. 
                                    Your website will be optimized for search engines and for your visitors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}