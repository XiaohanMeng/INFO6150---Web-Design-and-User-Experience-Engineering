import ContinentalTab from './ContinentalTab';
import SundaTab from './SundaTab';
import { useState } from 'react';
import './Tab.css';

function Tab({className}){

    const [activeTab, setActiveTab] = useState("tabSunda");
    
    const handleTabtype = () => {
        setActiveTab("tabSunda");
      };
      const handleTabhabitat = () => {
        setActiveTab("tabContinental");
      };
      
    return(
        <div className={`${className} tabs`}>
            <ul className="tab-nav">
                <li className={`tab-item ${activeTab === "tabSunda" ? "active" : ""}`}>
                    <button className={`tab-item__btn ${activeTab === "tabSunda" ? "active" : ""}`}
                    onClick={handleTabtype}
                    aria-label="show the Sunda tiger tab">
                        Sunda
                    </button> 
                </li>
            <li className={`tab-item ${activeTab === "tabContinental" ? "active" : ""}`}>
                <button 
                    className={`tab-item__btn ${activeTab === "tabContinental" ? "active" : ""}`}
                    onClick={handleTabhabitat} aria-label="show the Continental tiger tab">
                        Continental
                </button>
            </li>
            </ul>
            <div className="tab-outlet">
            {activeTab === "tabSunda" ? <SundaTab /> : <ContinentalTab />}
            </div>
        </div>
        
    );
}

export default Tab;