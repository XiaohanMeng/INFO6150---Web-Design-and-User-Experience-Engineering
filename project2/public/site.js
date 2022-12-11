"use strict";

(function(){
    // header navigation menu bar
    const menuEl = document.querySelector('.menu__button');

    menuEl.addEventListener('click', event => {
        if( !event.target.classList.contains('menu__button')){  
            return;
        }
        const navEl = document.querySelector('.nav');
        navEl.classList.toggle("nav--open");

    });

    // cats.html subscribe button
    const cardsEl = document.querySelector('.cards');
    const modalEl = document.querySelector('.modal');

    cardsEl.addEventListener('click', event =>{
        if(!event.target.classList.contains('card__sub-button')){
            return
        }
        modalEl.showModal();
    });


    // cats.html modal
    // cancel button
    const closeEl = document.querySelector('.modal__cancel');
    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

    // check email input
    const emailinputEl = document.querySelector('.subscribe-email__input');
    const emailtextEl = document.querySelector('.subscribe-email__innertext');

    emailinputEl.addEventListener('change', () =>{
        
        emailtextEl.innerText = "";

        // empty field innertext and without @ innertext
        if( !emailinputEl.value){
            emailtextEl.innerText = "This field is required";
        }else if(!emailinputEl.value.includes("@")){
            emailtextEl.innerText = "This field be a valid email address including a @";
        }
    });

    // check confirm email input
    const confirminputEl = document.querySelector('.subscribe-confirm__input');
    const confirmtextEl = document.querySelector('.subscribe-confirm__innertext');
    const formbuttonEl = document.querySelector('.subscribe');

    confirminputEl.addEventListener('change', () =>{
        
        confirmtextEl.innerText = "";

        // when confirm email values doesn't equal to email value, show the innertext
        if(confirminputEl.value != emailinputEl.value){
            confirmtextEl.innerText = "This field must match the provided email address";
            isconfirmInvalid = true;
        }

    });

    // submit form
    formbuttonEl.addEventListener('submit', event => {

        let isemailInvalid = false;
        let isconfirmInvalid = false;

        emailtextEl.innerText = "";
        confirmtextEl.innerText = "";


        if( !emailinputEl.value){
            emailtextEl.innerText = "This field is required";
            isemailInvalid = true;
        }else if(!emailinputEl.value.includes("@")){
            emailtextEl.innerText = "This field be a valid email address including a @";
            isemailInvalid = true;
        }

        if( (emailinputEl.value != null)&&(confirminputEl.value != emailinputEl.value)){
            confirmtextEl.innerText = "This field must match the provided email address";
            isconfirmInvalid = true;
        }

        if( isemailInvalid || isconfirmInvalid) {
            event.preventDefault();
        }
    });
})();