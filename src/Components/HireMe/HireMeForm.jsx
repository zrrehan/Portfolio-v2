import { motion } from "motion/react";

function HireMeForm() {
    return(
        <fieldset className="fieldset  border-0 rounded-box w-[90vw] lg:w-[50%]  p-4">
            <legend className="fieldset-legend">Notify Via Email</legend>

            <label className="label">Your Email</label>
            <input type="text" className="input border-0 border-b w-full focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="example@example.com" />

            <label className="label">Email Subject</label>
            <input type="text" className="input border-0 border-b w-full focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="Write your subject here" />

            <label className="label">Email Message</label>
            <textarea className="textarea border-0 border-b w-full focus:border-0 focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="Write here..."></textarea>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} 
                className="btn btn-neutral mt-4 w-full lg:w-[400px] mx-auto rounded-full">
                    Send Email
                </motion.button>
        </fieldset>
    )
}

export default HireMeForm;