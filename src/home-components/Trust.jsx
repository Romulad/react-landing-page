import React, { useEffect, useRef } from "react";
import { isVisibleByC, countNumber } from "../utils";


export default function Trust(){
    const countContainerRef = useRef(null);
    const count = useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(isVisibleByC(countContainerRef, false, true)){
                if(countContainerRef.current.hasAttribute('displaying')){
                   null;  
                }else{ 
                    countNumber(86, count, 50, "+");
                    countContainerRef.current.setAttribute("displaying", "on");
                }; 
            }
        });
    }, [])

    return(

        <section className="container-fluid text-center fs-17 pt-5" ref={countContainerRef}>

            <p className=""> <span className="opacity-8">More than</span> 
                <span className="text-danger dm-black fs-2 mx-1" ref={count}>0</span> 
                <span className="opacity-8">websites created.</span>
            </p>

        </section>
    )
}