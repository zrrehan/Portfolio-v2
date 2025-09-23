import AboutMe from "./Components/about-me/AboutMe"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer"
import HireMe from "./Components/HireMe/HireMe"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"
import AnimatedCursor from "react-animated-cursor"

function App() {
    return (
        <>
            <AnimatedCursor innerStyle={{ backgroundColor: 'rgb(0, 0, 0)' }}
                outerStyle={{ backgroundColor: 'rgb(194, 194, 194)', border: '2px solid rgb(0, 0, 0)' }} />
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <Projects />
            <HireMe />
            <AboutMe></AboutMe>
            <Footer></Footer>
        </>
        
    )
}

export default App
