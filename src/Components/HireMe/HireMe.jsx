import HireMeForm from "./HireMeForm";
import emailLottie from "../../assets/lotties/email.json"
import Lottie from "lottie-react";
import { motion } from "motion/react";

function HireMe() {
    return(
        <>
            <div id="hire-me" className="pt-[100px]"></div>

            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}  // start invisible, slightly lower
                whileInView={{ opacity: 1, y: 0, scale: 1 }}   // animate to fully visible and original position
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
                className="">
                <h1 className="text-center  text-2xl md:text-5xl">Let's Work Together</h1>
                <motion.div
                    animate={{ x: ["-140px", "140px", "-140px"] }}
                    transition={{
                        duration: 2,    // adjust speed
                        repeat: Infinity, // loop forever
                        repeatType: "loop",
                        ease: "linear",  // smooth constant motion
                    }}
                    className="border-2 w-[100px] mx-auto mt-2 mb-7"></motion.div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1150px] mx-auto">
                    <HireMeForm />
                    <div className="lg:w-[500px]">
                        <Lottie animationData={emailLottie} loop={true} />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default HireMe;