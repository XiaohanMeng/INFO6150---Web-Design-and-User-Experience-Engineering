import './Header.css';
import Logo from './images/ralph-mayhew-EiGBmms-alk-unsplash.jpeg';
import ThemeSwitcher from './ThemeSwitcher';
import { useState } from 'react';

function Header({onNav, toggleTheme}){
    const [menuOpen, setMenuOpen] = useState(false);

    const togglemenu = ()=>{
        setMenuOpen(!menuOpen);
    }

    return(
        <header className="header">
            <h1 className="header__title">Tiger Library</h1>
            <ThemeSwitcher className="header__theme-switcher" toggleTheme={toggleTheme}/>

            <img 
                className="header__pic" 
                src={Logo} alt="Tiger Library logo, a tiger's eye">
            </img>

            <span className="header__subtitle">The latest news for tiger species</span>
            <button 
                className="header__menu" 
                aria-label="open/close the navigation menu bar" 
                onClick={togglemenu}>
                <i className="hamburger-menu" alt="button to show menu"></i>
            </button>

            <nav className={`header-nav menu-${menuOpen}`}>
             <ul className="header-nav__list">
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page="Home" href="#home"
                    aria-label="go to home page">Home</a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page="About" href="#about"
                    aria-label="go to about page">About</a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page="Registration" href="#registration"
                    aria-label="go to registration page">Join Us</a>
                </li>
            </ul>
        </nav>

            
        </header>
    );
}

export default Header;