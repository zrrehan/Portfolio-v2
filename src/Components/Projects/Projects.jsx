import { motion } from "motion/react";
import { Suspense } from "react";
import Carousel from "./Carousel";

const dataPromise = fetch("./project-data.jsx").then(res => res.json())

function Projects() {
    return(
        <div className="">
            <div id="projects" className="pt-[150px]"></div>
            <motion.div

                initial={{ opacity: 0, y: 50, scale: 0.8 }}  // start invisible, slightly lower
                whileInView={{ opacity: 1, y: 0, scale: 1 }}   // animate to fully visible and original position
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
                className="">
                <h1 className="text-center  text-2xl md:text-5xl">Projects I Worked On</h1>
                <motion.div
                    animate={{ x: ["-140px", "140px", "-140px"] }}
                    transition={{
                        duration: 2,    // adjust speed
                        repeat: Infinity, // loop forever
                        repeatType: "loop",
                        ease: "linear",  // smooth constant motion
                    }}
                    className="border-2 w-[100px] mx-auto mt-2 mb-7"></motion.div>

                <Suspense fallback={<p>loading....</p>}>
                    <Carousel dataPromise={dataPromise} />
                </Suspense>
            </motion.div>
        </div>
    )
}

export default Projects;