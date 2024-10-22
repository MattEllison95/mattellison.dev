import Experience from "./components/experience.jsx";
import { AuroraBackground } from "./components/AuroraBackground.jsx";
import './App.css';
import { Hero } from "./components/Hero.jsx";
import {Skills} from "./components/Skills.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

    return (
        <>
            <AuroraBackground/>
            <Hero/>
            <Experience/>
            <Skills/>
            <Footer/>
        </>
    );
}

export default App;