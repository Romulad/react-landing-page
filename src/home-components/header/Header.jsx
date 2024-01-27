import React, { useEffect, useRef } from "react";
import "./header.css";
import logo from "./logo.svg";



export default function Header({onContactBtnClick}){
    const urlListRef = useRef(null);
    const navRef = useRef(null);

    function manageSideBarMobile(){
        urlListRef.current.classList.toggle('show-nav');
        if(urlListRef.current.classList.contains('show-nav')){
            let init = 100
            document.querySelectorAll('.head-item').forEach(element => {
                setTimeout(() => {
                    element.classList.add('scale-anima-slow')  
                }, init);
                init += 100
            });
        }else{
            document.querySelectorAll('.head-item').forEach(element => {
                setTimeout(() => {
                    element.classList.remove('scale-anima-slow')  
                }, 100);
            });
        }
    };

    useEffect(()=>{
        const allLinks = document.querySelectorAll('.link-tag');
        const listItems = document.querySelectorAll('.head-item');
        const anchorLinks = document.querySelectorAll('.head-link');

        allLinks.forEach(element => {
            element.addEventListener('click', ()=>{
                if(urlListRef.current.classList.contains('show-nav')){
                    urlListRef.current.classList.remove('show-nav');
                    listItems.forEach(el => {
                        el.classList.remove('scale-anima-slow');
                    });
                }
                
            })
        });

        // Active the link
        anchorLinks.forEach(element => {
            element.addEventListener("click", ()=>{
                anchorLinks.forEach(el => {
                    el.classList.add('text-dark'); 
                    el.classList.remove('text-warning'); 
                });
                element.classList.remove('text-dark'); 
                element.classList.add('text-warning'); 
            })  
        });

        let activeSection = window.location.href.split('#')[1] || "any";
        for(let t = 0; t<anchorLinks.length; t++){
            let current = anchorLinks[t];
            if(current.href.toLocaleLowerCase().includes(
                    activeSection.toLocaleLowerCase())
            ){
                current.classList.remove('text-dark'); 
                current.classList.add('text-warning');
            }
        };

        // Fixed navBar
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 60){
                navRef.current.classList.add('nav-fixed')
            }else{
                navRef.current.classList.remove('nav-fixed')
            }
        });

    }, [])

    return(
        <header id="header" className="">
            <nav id="nav" className="" ref={navRef}>
                <ul className="" ref={urlListRef}>
                    <button 
                    className="my-4 mx-auto border border-radius px-2 py-1 head-close-btn" 
                    onClick={manageSideBarMobile}>
                        <span className="bi bi-x-lg"></span>
                    </button>

                    <li className="my-auto head-item">
                        <a href="#how-it-work" 
                        className="head-link text-dark text-decoration-none link-tag">
                            How it works?
                        </a>
                    </li>

                    <li className=" my-auto head-item">
                        <a href="#services" 
                        className="head-link text-dark text-decoration-none link-tag">
                            Services
                        </a>
                    </li>

                    <li className=" my-auto head-item">
                        <a href="#why-us" 
                        className="head-link text-dark text-decoration-none  link-tag">
                            Why us?
                        </a>
                    </li>

                    <li className=" my-auto head-item">
                        <a href="#portfolio" 
                        className="head-link text-dark text-decoration-none link-tag">
                            Portfolio
                        </a>
                    </li>

                    <li className=" my-auto head-item">
                        <a href="#process" 
                        className="head-link text-dark text-decoration-none link-tag">
                            Process
                        </a>
                    </li>

                    <li className=" my-auto head-contact-item ">
                        <a href="#contact-us" 
                        className="head-contact-btn border-radius-lg  link-tag"
                        onClick={onContactBtnClick}>
                            Contact Us
                        </a>
                    </li>
                </ul>


                <button 
                className="border-0 " 
                id="respo-btn"
                onClick={manageSideBarMobile}>
                    <div className="hambuger-top"></div>
                    <div className="hambuger-bottom"></div>
                </button>
            </nav>
        </header>
    )
}