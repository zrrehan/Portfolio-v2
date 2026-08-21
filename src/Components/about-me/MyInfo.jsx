import InfoTable from "./InfoTable";
import { motion } from "motion/react";
function MyInfo() {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="space-y-7 w-[90vw] lg:w-[50%]">
            <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold header-text">About Me</h1>
                <p className="">
                    I build web apps by day, get lost in game worlds by night,
                    and occasionally question every life decision that led me to stare at a screen for both.
                    No regrets though. This is exactly where I want to be.
                </p>
            </div>
            <InfoTable></InfoTable>
        </motion.div>
    )
}

export default MyInfo;