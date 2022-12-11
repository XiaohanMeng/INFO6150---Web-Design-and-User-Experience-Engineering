import SundaPic from './images/vincent-van-zalinge-vk9bnTxOtSI-unsplash.jpeg';
import './SundaTab.css';

function SundaTab(){
    return (
        <div className="sunda-tab">
            <img className="sunda-img" src={SundaPic} alt="The tiger is walking on the grass field."></img>
            <p className="sunda-text">
              Sunda tigers are distinguished by heavy black stripes on their orange coats. The last of the Sunda island tigers—estimated to be fewer than 400 today—are holding on for survival in the remaining patches of forest on the island of Sumatra. Accelerating deforestation and rampant poaching mean this noble creature could end up extinct like its Javan and Balinese counterparts.
            </p>
            <p className="sunda-text">
            In Indonesia, anyone caught hunting tigers could face jail time and steep fines. But despite increased efforts in tiger conservation—including strengthening law enforcement and antipoaching capacity—a substantial market remains in Sumatra and other parts of Asia for tiger parts and products. Sunda tigers are losing their habitat and prey fast, and poaching is an ever-present threat.
            </p>
          </div>
        );

}
  export default SundaTab;