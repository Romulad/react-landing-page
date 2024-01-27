import React from "react";
import "./work.css";
import img1 from "./devportfolio1.webp";
import img2 from "./devportfolio2.webp";
import img3 from "./devportfolio3.webp";
import img4 from "./devportfolio4.webp";


export default function RecentWork(){

    const onDisplayBtnClick = (backOrFor=true) =>{
        let backBtn = document.getElementById('portf-btn-back');
        let forwBtn = document.getElementById('portf-btn-forward');
        let container = document.getElementById('portf-container');
        let curStep = (
            container.hasAttribute('step') ?  
            parseInt(container.getAttribute('step')) : 0
        )
    
        let nexStep = 0
        if(!backOrFor && curStep >= 1){
            nexStep = curStep - 1
        }else if(backOrFor){
            nexStep = curStep + 1
        };
    
        let visibleWidth = container.offsetWidth;
        let totalScroll = container.scrollWidth;
        let elLength = container.children.length - 1;
        
        if(backOrFor){
           container.scrollTo(visibleWidth*nexStep, 0); 
        }else{
            let restToScrol = elLength - curStep;
            let scrollX = (visibleWidth*restToScrol) + visibleWidth*2
            container.scrollTo(totalScroll - scrollX, 0);
        };
        
    
        if(nexStep >= elLength){
            container.setAttribute('step', `${elLength}`)
        }else{
            container.setAttribute('step', `${nexStep}`);
        };       
        
    
        if(nexStep >= elLength){
            forwBtn.classList.add('d-none');
        }else {
            forwBtn.classList.remove('d-none');
        }
        
        if(nexStep <= 0){
            backBtn.classList.add('d-none');
        }else{
            backBtn.classList.remove('d-none');
        };
    };
    
    return(
        <section id="portfolio" className="mt-5">
            
            <div className="container">
                <h1 className="text-center dm-black mb-4">Our recent work</h1>

                <div className="text-center mb-4 btn-control-container mx-auto">

                    <div className="d-flex justify-content-between">
                        <button 
                            className="bg-warning rounded-circle px-2 py-1 border-0 d-none btn-control me-auto"
                            id="portf-btn-back"
                            onClick={() => onDisplayBtnClick(false)}>
                                <i className="bi bi-chevron-double-left"></i>
                        </button>

                        <button 
                            className="bg-warning rounded-circle px-2 py-1 border-0 btn-control ms-auto"
                            id="portf-btn-forward"
                            onClick={() => onDisplayBtnClick(true)}>
                            <i className="bi bi-chevron-double-right"></i>
                        </button>
                    </div>

                </div>

                <div className="row flex-nowrap mx-auto portf-container border-radius-md border"
                id="portf-container">
                    <div className="col-md-3 text-center w-100 my-2">
                        <div className="portf overflow-hidden border-radius-md d-inline-block shadow-lg">
                            <img src={img1}  
                            alt="Work1" className="img-fluid border-radius-md " />
                        </div>
                    </div>

                    <div className="col-md-3 text-center w-100 my-2">
                        <div className="portf overflow-hidden d-inline-block shadow-lg border-radius-md">
                            <img 
                            src={img2} 
                            alt="Work2" className="img-fluid border-radius-md " />
                        </div>
                    </div>

                    <div className="col-md-3 text-center w-100 my-2">
                        <div className="portf overflow-hidden d-inline-block shadow-lg border-radius-md">
                            <img 
                            src={img3} 
                            alt="Work3" className="img-fluid border-radius-md " />
                        </div>
                    </div>

                    <div className="col-md-3 text-center w-100 my-2">
                        <div className="portf overflow-hidden d-inline-block shadow-lg border-radius-md">
                            <img 
                            src={img4}  
                            alt="Work4" className="img-fluid border-radius-md" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}