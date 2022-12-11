import './Home.css';

function Home(){
    return(
        <div>
            <div className="description">
                <h2 className="description__title">Welcome to tiger's world!</h2>
                <p className="description__text">The tiger is one of the largest extant felines. It has keen hearing, night vision, free retractable sharp claws and sturdy canine teeth. In addition to its large size and powerful muscles, its most distinctive feature is the black vertical stripes on its white to orange fur, which helps it conceal itself when hunting. Asiatic wild dogs called dholes may prey upon tigers but these rare attacks are usually countered with drastic losses to the dholes' pack. Humans are the greatest threat to all tiger populations.</p>
            </div>
            {/* Text reference: https://www.worldwildlife.org/species/tiger */}
            <div className="cards">
                <div className="card" id="card_one">
                    <h3 className="card__title">HABITAT LOSS</h3>
                    <p className="card__text">
                        Tigers have lost an estimated 95% of their historical range. Their habitat has been destroyed, degraded, and fragmented by human activities. The clearing of forests for agriculture and timber, as well as the building of road networks and other development activities, pose serious threats to tiger habitats. Tigers need wide swaths of habitat for their survival since they have large home ranges and are very territorial. Fewer tigers can survive in small, scattered islands of habitat, which leads to a higher risk of inbreeding and makes tigers more vulnerable to poaching as they venture beyond protected areas to establish their territories. This underscores the need to ensure habitat connectivity between the protected areas where tigers live.
                    </p>
                </div>
                <div className="card" id="card_two">
                    <h3 className="card__title">HUMAN-WILDLIFE CONFLICT</h3>
                    <p className="card__text">
                        People and tigers increasingly compete for space. As forests shrink and prey becomes scarce, tigers are forced to leave protected areas in search of food and to establish territories. This takes them into human-dominated areas that lie between habitat fragments, where they can hunt domestic livestock that many local communities depend on for their livelihood. In retaliation, tigers are sometimes killed or captured. “Conflict” tigers can end up for sale in black markets. Local community dependence on forests for fuel wood, food, and timber heightens the risk of tiger attacks on people.
                    </p>
                </div>
                <div className="card" id="card_three">
                    <h3 className="card__title">TIGER "FARMS" AND CAPTIVE TIGERS</h3>
                    <p className="card__text">
                        Current estimates indicate that there are more than 8,000 tigers being held in more than 200 centers in East and Southeast Asia. The current scale of commercial captive breeding efforts within these farms is a significant obstacle to the recovery and protection of wild tiger populations because they perpetuate the demand for tiger products, serve as a cover for illegal trade and undermine enforcement efforts. It is estimated that approximately 5,000 tigers reside in the US, and people must ensure that these animals are not exploited by, or contributing to, the illegal trade in tigers and their parts.
                    </p>                
                </div>
                <div className="card" id="card_four">
                    <h3 className="card__title">EFFECTS OF CLIMATE CHANGE</h3>
                    <p className="card__text">
                        One of the world’s largest, and most uniquely-adapted, tiger populations are found in the Sundarbans—a large mangrove forest area shared by India and Bangladesh on the coast of the Indian Ocean. It is also the only coastal mangrove tiger habitat in the world. These mangrove forests harbor a variety of species, including tigers, and protect coastal regions from storm surges and wind damage. 
                    </p>                
                </div>
            </div>
        </div>
    );
}

export default Home;