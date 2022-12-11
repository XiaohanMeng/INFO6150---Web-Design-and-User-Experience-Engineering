import './Footer.css';
import footerpagesData from './footerpages.js';



function Footer({onNav}){
    const list = footerpagesData.map((footerpage) => {
        return(
            <li key={footerpage.id}>
                <div className="footer__item">
                    <a 
                        className="footer__link"
                        href={`#${footerpage.title.replaceAll(' ', '-')}`}
                        onClick={onNav}
                        data-page={footerpage.id}
                        aria-label={footerpage.title}
                    >
                        {footerpage.title}
                    </a>
                </div>
            </li>
        );
    });

    return(
        <footer className="footer">   
            <ul className='footer__list'>
                {list}
            </ul>
        </footer>
        
    );
}

export default Footer;