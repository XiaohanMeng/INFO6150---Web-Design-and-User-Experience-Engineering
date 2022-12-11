import './Main.css';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import ContactUs from './ContactUs';
import Volunteer from './Volunteer';
import About from './About';
import Registration from './Registration';

function Main({ page, onNav }){
    return(
        <main id="main" className="main">
            {page === 'Home' && <Home onNav={onNav}/>}
            {page === 'About' && <About/>}
            {page === 'Registration' && <Registration/>}

            {page === 'PrivacyPolicy' && <PrivacyPolicy/>}
            {page === 'ContactUs' && <ContactUs/>}
            {page === 'Volunteer' && <Volunteer/>}

        </main>
    );
}

export default Main;