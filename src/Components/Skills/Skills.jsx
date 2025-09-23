import Marquee from "react-fast-marquee";
import SingleLogo from "./SingleLogo";
import JS from "../../assets/JS.png"
import Py from "../../assets/Py.png"
import React from "../../assets/React.png"
import ex from "../../assets/ex.png"
import Mongo from "../../assets/Mongo.png"
import firebase from "../../assets/firebase.png"
import vs from "../../assets/vs.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"
import tailwind from "../../assets/tailwind.png"
import node from "../../assets/node.png"
import next from "../../assets/next-js.webp"
import { motion } from "motion/react";

function Skills() {
    return(
        <motion.div 
            id= "skills"
            initial={{ opacity: 0 }}  // start invisible, slightly lower
            whileInView={{ opacity: 1 }}   // animate to fully visible and original position
            transition={{ duration: 3, ease: "easeOut" }}
            className="pt-[150px]"
            >
            <h1 className="text-center text-5xl ">My Top Skills</h1>
            <motion.div 
                animate={{ x: ["-150px", "150px", "-150px"] }}
                transition={{
                    duration: 2,    // adjust speed
                    repeat: Infinity, // loop forever
                    repeatType: "loop",
                    ease: "linear",  // smooth constant motion
                }}
                className="border-2 w-[100px] mx-auto mt-2 mb-10"></motion.div>
            <Marquee speed={100} autoFill={true} direction="right">
                <SingleLogo img={JS} />
                <SingleLogo img={Py} />
                <SingleLogo img={ex} />
                <SingleLogo img={Mongo} />
                <SingleLogo img={React} />
                <SingleLogo img={node} />
            </Marquee>
            <br />
            <Marquee speed={130} autoFill={true}>
                <SingleLogo img={firebase} />
                <SingleLogo img={vs} />
                <SingleLogo img={git} />
                <SingleLogo img={github} />
                <SingleLogo img={tailwind} />
                <SingleLogo img={next} />
            </Marquee>
        </motion.div>
    )
}

export default Skills;