import './About.css';
import Tab from './Tab';
import ImageCarousel from './ImageCarousel';

function About(){
    return(
        <div className="about">
            <div className="about-introduction">
                <h2 className="introduction__title">Fact of Tigers</h2>
                <p className="introduction__text">
                There are two recognized subspecies of tiger*: the continental (Panthera tigris tigris) and the Sunda (Panthera tigris sondaica). The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell for hunting. They typically hunt alone and stalk prey. A tiger can consume more than 80 pounds of meat at one time. On average, tigers give birth to two to four cubs every two years. If all the cubs in one litter die, a second litter may be produced within five months.
                </p>
                <p className="introduction__text">
                Tigers are mostly solitary, apart from associations between mother and offspring. Individual tigers have a large territory, and the size is determined mostly by the availability of prey. Individuals mark their domain with urine, feces, rakes, scrapes, and vocalizing.
                </p>
                <p className="introduction__text">
                Across their range, tigers face unrelenting pressures from poaching, retaliatory killings, and habitat loss. They are forced to compete for space with dense and often growing human populations.
                </p>
            </div>
            
            <ImageCarousel/>

            <Tab className="about-tab"/>
            
        </div>
    );
}

export default About;