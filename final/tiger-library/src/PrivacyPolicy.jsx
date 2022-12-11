import PrivacyCat from './images/mystery-cat-rZLhC52ocJM-unsplash.jpeg';
import './PrivacyPolicy.css';

function PrivacyPolicy(){
    return(
        <div className="privacy-policy">
            <h1 className="privacy-title">Privacy Policy</h1>
            <img className="privacy-pic" src={PrivacyCat} alt="Two tigers are lying down together."></img>
            <p className="privacy-text">Our website respects privacy, and we know that many care about how information is used and shared. 
                This Privacy Policy applies to this project website.
                By visiting any of the Sites, you are accepting the practices described in this Privacy Policy. If you disagree with any of the terms herein, please immediately discontinue use of the Sites.
            </p>

        </div>
    );    
}

export default PrivacyPolicy;