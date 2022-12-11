import './ThemeSwitcher.css';
import { useState } from 'react';

function ThemeSwitcher({className, toggleTheme}){
    const [change, setChange] = useState(false);

    function a(){
        setChange(!change);
    }

    function click(){
        toggleTheme();
        a();
    }

    return(
        <div className={`${className} toggle-theme-switcher`}>
            <span className="theme-icon">🌛</span>
            <label className={`${change} theme-check`} htmlFor="button" aria-label="switch theme">
                <button
                    className={`toggle-btn`}
                    name="button"
                    type="button"
                    id="button"
                    onClick={click}
                    aria-label="swtich theme color"></button>

                <div className={`${change} slider round`}></div>
            </label>
            
            <span className="theme-icon">🌞</span>
        </div>
    );
}

export default ThemeSwitcher;