import InfoTable from "./InfoTable";
import { motion } from "motion/react";
function MyInfo() {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="space-y-7 w-[90vw] lg:w-[50%]">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold header-text">About Me</h1>
                <p className="">
                    I am a passionate software engineer specializing in full-stack web development. With expertise in React, Express.js, and MongoDB, I build scalable and efficient applications that deliver seamless user experiences. Continuously learning and adapting, I strive to create clean, maintainable code and innovative solutions that solve real-world problems.
                </p>
            </div>
            <InfoTable></InfoTable>
        </motion.div>
    )
}

export default MyInfo;