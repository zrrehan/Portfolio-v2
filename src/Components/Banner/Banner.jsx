import { TypeAnimation } from "react-type-animation";
import myImg from "../../assets/DP.png"
import DownloadCVButton from "./DownloadCVButton";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";


function Banner() {
    return(
        <motion.div 
            initial={{ opacity: 0, y: 50 }}  // start invisible, slightly lower
            animate={{ opacity: 1, y: 0 }}   // animate to fully visible and original position
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
            className="flex py-[150px] w-[90%] max-w-[1250px] mx-auto items-center gap-20">
            <div className="md:w-[50%]">
                <div className="w-[500px]">
                    <img src={myImg} className="w-full rounded-full" />
                </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="">
                <h1 className=" text-5xl font-bold">Hello, I am  <span className=" text-6xl monoton-regular">Rehan</span></h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'A Frontend Developer',
                        1000,
                        'A React Enthusiast',
                        1000,
                        'A Problem Solver',
                        1000,
                        'A Web Developer',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '35px', fontWeight: "bold" }}
                    repeat={Infinity}
                ></TypeAnimation>
                <p className="my-6">
                    Passionate frontend developer skilled in React, creating responsive, user-friendly, and high-performance web applications with a focus on clean design and seamless user experience.
                </p>

                <div className="flex items-center gap-7">
                    <DownloadCVButton/>
                    <div className="tooltip tooltip-bottom">
                        <div className="tooltip-content rounded-full">
                            <div className="animate-bounce text-white -rotate-5 text-2xl font-black px-3">Github</div>
                        </div>
                        <a href="https://github.com/zrrehan" target="_blank"><FaGithub size={34} /></a>
                    </div>
                    <div className="tooltip tooltip-bottom">
                        <div className="tooltip-content rounded-full">
                            <div className="animate-bounce text-white -rotate-5 text-2xl font-black px-3">LinkedIn</div>
                        </div>
                        <a href="https://www.linkedin.com/in/zrrehan/" target="_blank"><FaLinkedinIn size={34} /></a>
                    </div>
                    
                </div>
            </div>
            
        </motion.div>
    )
}

export default Banner;