import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Social } from './layout/header/social/Social';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            {/*<Slogan/>*/}
            {/*<Works/>*/}
            <Skills/>
            {/*<AboutMe/>*/}
            {/*<Contacts/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
