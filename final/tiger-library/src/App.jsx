import { useState } from 'react';

import SkipLink from './SkipLink';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
    const [page, setPage] = useState('Home');
    const [theme, setTheme] = useState('light');

    function go(targetpage){
        setPage(targetpage);
    }

    function onNav(event){
        event.preventDefault();
        const target = event.target.dataset.page;
        go(target);
    }

    function toggleTheme(){
        const newTheme = theme === 'light' ? 'dark': 'light';
        setTheme(newTheme);
        // console.log(newTheme);
    }

    return (
        <div className={`app ${theme}`}>
            <SkipLink/>
            
            <Header onNav={onNav} toggleTheme={toggleTheme} setTheme={setTheme}/>
            <Main page={page} onNav={onNav}/>
            <Footer onNav={onNav}/>
        </div>
    );
}

export default App;
