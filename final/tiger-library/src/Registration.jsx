import './Registration.css';
import { useRef } from 'react';
import { useState } from 'react';

function Registration(){
    const subscribeRef = useRef(null);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const [innerText, setInnerText] = useState(null);

    let Text = "";

    let isnameInvalid = false;
    let isemailInvalid = false;

    function validation(event){
        event.innerText=" ";
        event.preventDefault();
        if(!name){
            console.log("no name");
            Text = "Please enter your name. \n";
            isnameInvalid=true;
        }

        if(!email){
            console.log("no email");
            isemailInvalid = true;
            Text += "Please enter your email. \n"
        }else if(!email.includes("@"))
        {
            console.log("no @");
            isemailInvalid = true;
            Text += "The email contains @ \n"
        }

        if( isemailInvalid || isnameInvalid) {
            event.preventDefault();
        }

        setInnerText(Text);

        console.log("name: " + name + "  email: " + email);
    }
    
    return(
        <div className="joinus">
            <h2 className="registration-title">Come and Join us!</h2>
            <p className="registration-text">Globally, tigers are considered an endangered species. Only six of the nine tiger subspecies that once existed remain, and the South China tiger is thought to be nearly or entirely extinct in the wild. The Sumatran subspecies is listed as critically endangered on the International Union for Conservation of Nature's Red List, and the Amur is listed as endangered. All tigers are protected under CITES Appendix I. Please create an account and join us!</p>
            <button 
                className="form__open"
                aria-label="show the page to register"
                onClick={() => {
                    subscribeRef.current.showModal();
                }}
            >
                Join Us
            </button>


            <dialog className="form__modal" ref={subscribeRef}>
                <h3 className="form-title">Create a new account</h3>
                <form action="/register" method="POST">
                    <p className="form-instruction">All fields marked with * are required.</p>
                    <p className="form-instruction">Let's verify some information about you to help set up your account.</p>
                    <div className="form__name">
                        <label className="form-name xrequired" htmlFor='name' aria-label="enter your name here">Name: </label>
                        <input 
                            className="name-input"
                            id="name" 
                            required title="letters" 
                            placeholder="Required: type here" 
                            aria-label="Your name"
                            onChange={e => {setName(e.target.value)}}/>
                    </div>
                        
                    <div className="form__email">
                        <label className="form-email xrequired" htmlFor='email' aria-label="Enter your email here">Email: </label>  
                        <input 
                            className="email-input"
                            id="email" 
                            name="email" 
                            required title="email format with @" 
                            placeholder="Required: type here"
                            aria-label="Your email"
                            onChange={e => {setEmail(e.target.value)}}/>                  
                    </div>
            
                    <div className="form__checkbox">
                        <label className="form-checkbox" aria-label="whether receive notification">
                            <span>Receive notifications (optional) </span>
                            <input className="checkbox-input" type="checkbox" aria-label="check notification"/>
                            <p className="checkbox-instructions">When you accept this, we may send notifications from time to time.</p>
                        </label>
                    </div>
                    
                    <div className="form__select">
                        <label className="form-select" aria-label="select your language">
                            <span>Select your email language preference (optional) </span>
                            <select>
                                <option value="" >Please select</option>
                                <option value="1">English</option>
                                <option value="2">Español</option>
                                <option value="3">Français</option>
                            </select>
                            <p className="form-select__instructions">This website allows you to receive your email communication in English, Spanish or French.</p>
                        </label>
                    </div>
                    <div className="innerText">{innerText}</div>
                    <button 
                        className="form-submit" 
                        type="submit" 
                        aria-label="click to register new account"
                        onClick={validation}>Register</button>
                </form>

                <div className="form__controls">
                    <button 
                        className="form__cancel"
                        aria-label="close the register page"
                        onClick={() => {
                            subscribeRef.current.close();
                        }}
                    >Cancel</button>
                </div>
            </dialog>
        </div>
    );
}

export default Registration;