import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar"
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
        </>
        
    )
}

export default App
