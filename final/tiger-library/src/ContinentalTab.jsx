import ContinentalPic from './images/benjamin-raffetseder-3IzKtuKdGuE-unsplash.jpeg';
import './ContinentalTab.css';

function ContinentalTab(){
    return (
        <div className="continental-tab">
            <img className="continental-img" src={ContinentalPic} alt="The tiger is in the forest."></img>
            <p className="continental-text">
                The continental tiger’s habitat extends across Asia, from the Russian Far East to mangrove forests of the Sundarbans to the Lower Mekong. For many decades, tiger populations declined precipitously as a result of habitat loss, poaching, and trade of tiger products. Their numbers reached an all-time low by the mid-2000s. In the last few years, we have been seeing signs of tiger population recovery in India, Nepal, Bhutan, China, and Russia. However, in other parts of the mainland, such as Myanmar and Malaysia, tiger numbers may still be declining due to poaching and habitat loss.
            </p>
        </div>
  );
}
export default ContinentalTab;
