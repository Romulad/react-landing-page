import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import IntroSection from "../introSection/IntroSection";
import Trust from "../Trust";
import HowItWork from "../howitwork/HowItWork";
import Services from "../services/Services";
import WhyUs from "../why-us/WhyUs";
import RecentWork from "../recentWork/RecentWork";
import Help from "../help/Help";
import Process from "../process/Process";
import ClientReviews from "../reviews/ClientReviews";
import FooterSection from "../FooterSection";
import "./main.css";
import { isVisibleByC } from "../../utils";


export function MessageContainer({msgColor, setMessageActive}){
    const containerRef = useRef(null);
    const progressRef = useRef(null);
    const [msg, colorClass] = msgColor.split(';');

    useEffect(()=>{
        setTimeout(() => {
            let increment = 10;
            let progressWait = (msg.length/1.3) * 10;
            containerRef.current.classList.add('show-message');
            let current = 10;
            
            let int = setInterval(() => {
                    if(current >= 100){
                        clearInterval(int)
                    }else{
                        progressRef.current.style.width = `${current + increment}%`;
                        current += increment
                    }
            }, progressWait);

            setTimeout(() => {
                containerRef.current.classList.add('hide-message');
                containerRef.current.classList.remove('show-message');
                setTimeout(() => {
                    setMessageActive('')
                }, 200);
            }, progressWait*increment*1.2);

        }, 300);       
    }, [])

    return(
        <div className={`message ${colorClass}`} ref={containerRef}>
            <p className="mb-0 p-3">
                {msg}
            </p>

            <div className="message-border mt-3" >
                <div className="message-border-inner" ref={progressRef}></div>
            </div>
        </div>
    )
}


export default function Home(){
    const [messageActive, setMessageActive] = useState([]);
    const firstInputRef = useRef(null)

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            document.querySelectorAll('.Tr-1').forEach((el)=>{
                if(isVisibleByC("", el.id, false, true)){
                    el.classList.add('An-4')
                }
            });
        });
    }, [])

    function onContactBtnClick(){
        firstInputRef.current.focus();
    }

    function messages(){
        let msgCount = 0;
        if(messageActive){
            const allMessages = messageActive.map((msgColor)=>{
                let key = `${msgCount}-${msgColor}`
                msgCount += 1;
                return(
                    <MessageContainer 
                        msgColor={msgColor}
                        setMessageActive={setMessageActive}
                        key={key}
                    />
                )
            })
            return allMessages
        }
        return(
            <></>
        )
        
    }
    const messageResult = messages();
    
    return(
        <>
            <Header onContactBtnClick={onContactBtnClick}/>
            <IntroSection 
            setMessageActive={setMessageActive}
            firstInputRef={firstInputRef}/>
            <Trust />
            <HowItWork onContactBtnClick={onContactBtnClick}/>
            <Services onContactBtnClick={onContactBtnClick}/>
            <WhyUs />
            <RecentWork />
            <Help />
            <Process />
            <ClientReviews onContactBtnClick={onContactBtnClick}/>
            <FooterSection />
            {messageResult}
        </>
    )
}