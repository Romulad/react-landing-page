import React, {useEffect, useRef} from "react";
import "./intro.css"
import { writeText } from "../../utils";


export default function IntroSection({setMessageActive, firstInputRef}){
    const formRef = useRef(null);

    useEffect(()=>{
        writeText("hero-inner", 150);
        let cursor = document.getElementById('cursor');
        let el = document.getElementById('hero-inner');
        cursor.classList.add('An-1');
        let int = setInterval(() => {
            if(el.textContent.length >= 15){
                cursor.classList.add('d-none')
                cursor.classList.remove('An-1') 
                clearInterval(int);
            } 
        }, 100);
    }, [])

    const OnFormSubmition = (event) =>{
        event.preventDefault();
        
        // check if the form has already been submitted
        if(localStorage.getItem('subm')){
            setMessageActive(
                ["You had already submitted the form;text-warning"]
            )
            return undefined
        }

        let allEl = formRef.current.querySelectorAll('*');
        let message = 'Please fill out this field with your';
        let message2 = 'Please fill out this field with a correct email adress';
        let validField = [];
        let inputNumber = 0;
    
        allEl.forEach(el => {
            (
                el.hasAttribute('name') && el.parentElement.childElementCount > 2 ? 
                el.parentElement.lastElementChild.classList.add('d-none') : null
            )
        });
        for(let el of allEl){
            if(el.hasAttribute('name')){
                inputNumber += 1;
                if(el.checkValidity() && el.value.length>1){
                    validField.push(el);
                }else{
                    let parentEl = el.parentElement;
                    let errorConta = parentEl.querySelector(`#error-${el.id}`);
                    if(errorConta){
                        errorConta.classList.remove('d-none');
                    }else{
                        let pEl = document.createElement('p');
                        pEl.classList.add('text-danger', "mb-0", 'mt-1', 'fs-14');
                        pEl.textContent = el.name == "email" ? message2 : `${message} ${el.getAttribute('inputstr')}`;
                        pEl.setAttribute('id', `error-${el.id}`)
                        parentEl.appendChild(pEl);
                    };
                    el.focus();
                    return undefined
                }
            };
        };
    
        if(validField.length == inputNumber){
            setMessageActive(
                ['Your form has been successfully submitted;text-success',]
            );
            validField.forEach((el)=>{
                el.value = "";
            });
            // To remeber the form submittion
            localStorage.setItem('subm', 'true');
        }
        
    };

    function OnFieldInput(){
        let allEl = formRef.current.querySelectorAll('*');
        for(let el of allEl){
            if(el.hasAttribute('name')){
                if(
                    el.checkValidity() && el.value.length>1 
                    && el.parentElement.childElementCount > 2 
                ){
                    el.parentElement.lastElementChild.classList.add('d-none')
                }
            };
        };
    }

    return(
        <section id="start" className="d-flex justify-content-center position-relative intro">
            <div id="intro" className="text-center mx-1">

                <h1 className="dm-black text-white hero d-inline-block">  
                    Services For Your Projects Like You Can't Find 
                    <span className="d-none text-warning" id="hero-inner"> Anywhere Else.</span><span  
                    className="text-warning" id="cursor">|</span>
                </h1>

                <p className="fs-17 promise text-white mt-5">
                    We will help you in your website creation project with 
                    complete integration of GPT writing tool to support you create 
                    a quality content.
                </p>
                
                <div className="text-white mt-5 mb-lg">

                    <a href="#how-it-work" 
                    className="btn fs-18 btn-info head-btn-s text-white py-2 px-2 mb-2
                    border-radius-lg" >
                      How it works? 
                    </a>

                </div>

                <div className="head-form bg-white border-radius py-3 px-4 pos-width">
                    
                    <form 
                    method="POST" 
                    className="text-start" id="contact-form"
                    ref={formRef}> 
                        <h2 className="text-center mb-3 dm-bold">Contact Us</h2>

                        <div className="d-flex flex-wrap">
                            <div className="field-col  mx-1">
                                <div className="mb-3 w-100">
                                    <label htmlFor="first_name" className="mb-2">First Name:</label>
                                    <input type="text" id="first_name" name="first_name" 
                                    className="form-control border-radius py-2" required 
                                    placeholder="your first name" autoComplete="off" inputstr="First name" 
                                    onInput={OnFieldInput} ref={firstInputRef}/>
                                </div>
                            </div>

                            <div className="field-col mx-1">
                                <div className="mb-3 w-100">
                                    <label htmlFor="last_name" className="mb-2">Last Name:</label>
                                    <input type="text" id="last_name" name="last_name" 
                                    className="form-control border-radius py-2" required 
                                    placeholder="your last name" autoComplete="off" inputstr="Last name" 
                                    onInput={OnFieldInput}/>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                                <label htmlFor="name" className="mb-2">Valid email adress:</label>
                                <input type="email" id="email" name="email" 
                                className="form-control border-radius py-2" required
                                placeholder="valid email adress" autoComplete="off" 
                                onInput={OnFieldInput}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="mb-2">Tell us:</label>
                            <textarea id="message" name="message" 
                            className="form-control border-radius" required
                            placeholder="your message" cols="30" rows="3" inputstr="message"
                            onInput={OnFieldInput}></textarea>
                        </div>

                        <button className="btn btn-warning border-radius mt-3" 
                        type="submit"
                        onClick={(event)=>{OnFormSubmition(event)}}>
                            <i className="bi bi-telegram me-2"></i>Send
                        </button>

                        <p className="fs-14 mt-4 text-info mb-0">
                            This form is just for a demonstration, it doesn't do any submission
                        </p>

                    </form>
                </div>

            </div>
       </section>
    )
}