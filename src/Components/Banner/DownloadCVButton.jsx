import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoMdDownload } from "react-icons/io";

function DownloadCVButton() {
    return(
        <div className="">
            <SpotlightButton />
        </div>
    )
}

const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { width } = e.target.getBoundingClientRect();
            const offset = e.offsetX;
            const left = `${(offset / width) * 100}%`;

            spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
        };

        const handleMouseLeave = () => {
            spanRef.current.animate(
                { left: "50%" },
                { duration: 100, fill: "forwards" }
            );
        };

        btnRef.current.addEventListener("mousemove", handleMouseMove);
        btnRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (btnRef.current) {
                btnRef.current.removeEventListener("mousemove", handleMouseMove);
                btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <motion.button
            whileTap={{ scale: 0.985 }}
            ref={btnRef}
            className="relative w-[300px] overflow-hidden rounded-full bg-slate-950 px-4 py-3 text-lg font-medium text-white"
        >
            <span className="pointer-events-none relative z-10 mix-blend-difference flex items-center justify-center gap-2">
                <p>Download CV</p>
                <IoMdDownload size = {24}/>
            </span>
            <span
                ref={spanRef}
                className="pointer-events-none absolute left-[50%] top-[50%] h-10 w-45  -translate-x-[50%] -translate-y-[50%] rounded-full  bg-white opacity-30"
            />
        </motion.button>
    );
};


export default DownloadCVButton;