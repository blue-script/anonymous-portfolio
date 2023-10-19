import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Social } from './layout/social/Social';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Quote } from './layout/sections/quote/Quote';


function App() {
    return (
        <div className="App">
            <Social/>
            <Header/>
            <Main/>
            <Quote/>
            <Works/>
            <Skills/>
        </div>
    );
}

export default App;
