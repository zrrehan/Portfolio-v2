import { motion } from "motion/react";
import Education from "./Education";
import MyInfo from "./MyInfo";
function AboutMe() {
    return(
        <>
            <div id="about-me" className="pt-[100px]"></div>

            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}  // start invisible, slightly lower
                whileInView={{ opacity: 1, y: 0, scale: 1 }}   // animate to fully visible and original position
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
                className="">
                <h1 className="text-center  text-2xl md:text-5xl">A Glimpse of Me</h1>
                <motion.div
                    animate={{ x: ["-140px", "140px", "-140px"] }}
                    transition={{
                        duration: 2,    // adjust speed
                        repeat: Infinity, // loop forever
                        repeatType: "loop",
                        ease: "linear",  // smooth constant motion
                    }}
                    className="border-2 w-[100px] mx-auto mt-2 mb-14"></motion.div>

                    <div className="px-4 flex flex-col lg:flex-row max-w-[1150px] mx-auto lg:gap-10">
                        <Education />
                        <div className="divider lg:divider-horizontal"></div>
                        <MyInfo />
                    </div>
                
            </motion.div>
        </>
    )
}

export default AboutMe;