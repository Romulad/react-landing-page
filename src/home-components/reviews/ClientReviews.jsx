import React from "react";
import "./review.css";


export function ReviewContainer({review, name}){
    return(
        <div className="col-md-4">
            <div className="bg-white shadow border-radius p-4">
                <p className="opacity-8 mb-4">
                    {review}
                </p>

                <div className="">
                    <span className="bi bi-person-circle fs-4"></span>
                    <span className=" my-auto ms-2 dm-bold">{name}</span>
                </div>
            </div>
        </div>
    )
}


export default function ClientReviews({onContactBtnClick}){
    const reviews = [
        {
            name : "Alice Johnson",
            review : `I am incredibly impressed with the website services provided by this company. 
            The team was attentive to my needs, and they 
            delivered a sleek, modern website that perfectly represents my business. 
            Kudos to the entire team!`
        },
        {
            name:"Michael Chen",
            review:`Working with this service provider was a game-changer for my online 
            presence. They not only crafted a visually stunning website but 
            also ensured it's responsive and user-friendly. 
            The attention to detail exceeded my expectations. Highly recommend!`
        },
        {
            name : "David Thompson",
            review:`As a small business owner, I needed a website that stood out. 
            This service provider not only delivered on design but also on 
            functionality. The site is easy to navigate, and their ongoing 
            support is top-notch. A definite five-star experience!`
        },
        {
            name:"Emily Rodriguez",
            review:`I couldn't be happier with the website development services 
            I received. The team was responsive, professional, 
            and turned my vision into reality. My website not only 
            looks fantastic but also performs seamlessly. 
            Thank you for your exceptional work!responsive and user-friendly. 
            The attention to detail exceeded my expectations. Highly recommend!`
        },
        {
            name:"Sophie Turner",
            review:`I approached this company with a challenging project, 
            and they exceeded my expectations. The level of creativity 
            and technical expertise displayed during the website development 
            was outstanding. I'm thrilled with the final result!`
        },
        {
            name:"Olivia Foster",
            review:`From start to finish, the team demonstrated a 
            commitment to excellence. They transformed my
            outdated website into a modern, visually appealing platform. 
            The communication throughout the project was excellent, and I 
            appreciate their dedication.`
        },
        {
            name:"Isabella Garcia",
            review:`I'm beyond satisfied with the website services provided by this team. 
            They brought creativity and technical expertise to the table, 
            resulting in a website that exceeded my expectations. 
            The attention to detail is evident in every aspect. Highly recommend!`
        }

    ]

    const onDisplayBtnClick = (backOrFor=true) =>{
        let reviewContainer = document.getElementById('review-container');
        let backBtn = document.getElementById('review-btn-back');
        let nextBtn = document.getElementById('review-btn-forward');
        let visibleWidth = reviewContainer.offsetWidth;
        let totalScroll = reviewContainer.scrollWidth;
        let currentScrollWidth = (
            reviewContainer.hasAttribute('scr') ? parseInt(reviewContainer.getAttribute('scr')) :
            0
        );
        
        let nextScroll = 0;
        if(!backOrFor && currentScrollWidth > 0){
            nextScroll = (
                currentScrollWidth == visibleWidth ? currentScrollWidth - visibleWidth : 
                currentScrollWidth - visibleWidth*2 
            );
        }else if(backOrFor){
            nextScroll = (
                currentScrollWidth == 0 ? currentScrollWidth + visibleWidth*2 : 
                currentScrollWidth + visibleWidth
            );
        }
        
    
        if(backOrFor){
            reviewContainer.scrollTo(
                currentScrollWidth + visibleWidth, 0
            );
        }else{
            reviewContainer.scrollTo(
                currentScrollWidth - (visibleWidth*2), 0
            );
        };
    
        if(nextScroll >= totalScroll){
          reviewContainer.setAttribute('scr', `${totalScroll}`) ;
        }else{
            reviewContainer.setAttribute('scr', `${nextScroll}`) ;
        }
        
    
        if(nextScroll >= totalScroll){
            nextBtn.classList.add('d-none');
        }else{
            nextBtn.classList.contains('d-none') ? nextBtn.classList.remove('d-none') : null;
        };
    
        if(nextScroll <= 0){
            backBtn.classList.add('d-none');
        }else{
            backBtn.classList.contains('d-none') ? backBtn.classList.remove('d-none') : null;
        };
    
    };

    const allReviews = reviews.map((el)=>(
        <ReviewContainer 
        review={el.review}
        name={el.name}
        key={el.name}
        />
    ))

    return(
        <>
            <div className="re-C-Intro d-flex justify-content-center align-items-center mt-5 px-2 py-5 text-white ">
                
                <div className="">
                    <h2 className="text-center dm-bold fs-4">Don't take our word for it, see what our customers say</h2>
                    <div className="mt-4 text-center An-5">
                        <a className="text-decoration-none" href="#reviews">
                            <i className="bi bi-chevron-double-down fs-5 text-warning "></i>
                        </a>
                    </div>
                </div>
            </div>

            <section id="reviews" className="mt-5">
                <div className="container position-relative">
                    <button className="position-absolute border-0 btn-revi-left d-none"  
                    id="review-btn-back" onClick={()=>{onDisplayBtnClick(false)}}>
                        <i className="bi bi-chevron-double-left btn-control 
                        bg-warning rounded-circle px-2 py-2"></i>
                    </button>

                    <button className="position-absolute bg-transparent border-0 btn-revi-right" 
                    id="review-btn-forward" onClick={()=>{onDisplayBtnClick(true)}}>
                        <i className="bi bi-chevron-double-right btn-control 
                        bg-warning rounded-circle px-2 py-2"></i>
                    </button>

                    <div className="row flex-nowrap overflow-hidden review-container" id="review-container">
                        {allReviews}
                    </div>
                </div>
            </section>

            <div className="container text-center mb-5 mt-2">
                <a href="#contact-us" className="btn btn-warning border-radius-lg 
                text-decoration-none fs-6" onClick={onContactBtnClick}>
                    Contact Us
                </a>
            </div>

        </>
    )
}