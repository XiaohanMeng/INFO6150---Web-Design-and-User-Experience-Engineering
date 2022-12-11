"use strict";


const menuEl = document.querySelector('.nav__menu');

menuEl.addEventListener('click', event => {
    const navitemEl = event.target.closest('.nav__item');
    //console.log(`click on ${event.target.nodeName}`);
    if( !event.target.classList.contains('menu__button')){  
        return;
    }
    
    const menuitemEl = navitemEl.querySelector('.menu__item');
    menuitemEl.classList.toggle("menu__item--open");

});


const formbuttonEl = document.querySelector('.register');
const nameEl = formbuttonEl.querySelector('.register__name');
const nameinputEl = nameEl.querySelector('.register-name__input');


nameinputEl.addEventListener('change', event =>{
    let isInvalid = false;
    nameEl.classList.remove('register-name--invalid');
    
    if( !nameinputEl.value ) {
        nameEl.classList.add('register-name--invalid');
        isInvalid = true;
    }

});

const emailinputEl = document.querySelector('.register-email__input');
const emailtextEl = document.querySelector('.register-email__innertext');


const confirminputEl = document.querySelector('.register-confirm__input');
const confirmtextEl = document.querySelector('.register-confirm__innertext');

formbuttonEl.addEventListener('submit', event => {

    let isnameInvalid = false;
    let isemailInvalid = false;
    let isconfirmInvalid = false;

    emailtextEl.innerText = "";
    confirmtextEl.innerText = "";

    nameEl.classList.remove('register-name--invalid');

    if( !nameinputEl.value ) {
        nameEl.classList.add('register-name--invalid');
        isnameInvalid = true;
    }

    if( !emailinputEl.value){
        emailtextEl.innerText = "Please fill out email field.";
        isemailInvalid = true;
    }

    if(!confirminputEl.value){
        confirmtextEl.innerText = "Please fill out confirm field.";
        isconfirmInvalid = true;
    }

    if( confirminputEl.value != emailinputEl.value){
        confirmtextEl.innerText = "Please match your email.";
        isconfirmInvalid = true;
    }

    if( isnameInvalid || isemailInvalid || isconfirmInvalid) {
        event.preventDefault();
    }
});


