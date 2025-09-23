import { motion } from "motion/react";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";


function HireMeForm() {
    const form = useRef();
    const [sendLoad, setSendLoad] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if(sendLoad) {
            return 
        } 
        setSendLoad(true);
        const [email, subject, message] = [
            e.target.from_email.value, e.target.subject.value, e.target.message.value 
        ]        
        if(!email || !subject || !message) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill in all the fields.",
                showConfirmButton: false,
                timer: 1500
            });
            setSendLoad(false)
            return 
        } 

        emailjs
            .sendForm('service_j0skq4r', 'template_dpigurq', form.current, {
                publicKey: 'OnaGHA7JNsZ1PTrAg',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Email received. I'll get back to you shortly.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setSendLoad(false);
                    e.target.reset();
                },
                (error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Enternal Error Detected",
                        text: "Kindly Send Email to zrrehan11@gmail.com",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setSendLoad(false);
                    e.target.reset();
                },
            );
    };
    return(
        <form ref={form} onSubmit={sendEmail} className="fieldset text-xl border-0 rounded-box w-[90vw] lg:w-[50%]  p-4">
            <label className="label">Your Email</label>
            <input type="email" name = "from_email" className="input border-0 border-b w-full hover:text-2xl focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="example@example.com" />

            <label className="label">Email Subject</label>
            <input type="text" name = "subject" className="input border-0 border-b w-full hover:text-2xl focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="Write email subject here" />

            <label className="label">Email Message</label>
            <textarea name= "message" className="textarea border-0 border-b w-full focus:border-0 hover:text-2xl focus:outline-none focus:text-3xl transition-all duration-300 ease-in-out" placeholder="Write here..."></textarea>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} 
                className="btn btn-neutral mt-4 w-full lg:w-[400px] mx-auto rounded-full">
                    {
                        sendLoad === false ? 
                            <div className="flex items-center gap-3">
                                Send Email <IoIosSend size = {20}/>
                            </div> :
                            <div className="flex items-center gap-3">
                                Sending <span className="loading loading-spinner loading-lg"></span>
                            </div>
                    }
                </motion.button>
        </form>
    )
}

export default HireMeForm;