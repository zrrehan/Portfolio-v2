import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <>  
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="lg:hidden fixed z-20 p-4 hover:cursor-pointer"><HiOutlineMenuAlt3 size={44} /></label>
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="space-y-4 menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a href="#banner" onClick={() => document.getElementById('my-drawer-4').checked = false}>Home</a></li>
                        <li><a href="#skills" onClick={() => document.getElementById('my-drawer-4').checked = false}>Skills</a></li>
                        <li><a href="#projects" onClick={() => document.getElementById('my-drawer-4').checked = false}>Projects</a></li>
                        <li><a href="#hire-me" onClick={() => document.getElementById('my-drawer-4').checked = false}>Hire Me</a></li>
                        <li><a href="#about-me" onClick={() => document.getElementById('my-drawer-4').checked = false}>About Me</a></li>

                    </ul>
                </div>
            </div>
            <div className="hidden lg:flex z-50  my-7 fixed left-1/2 -translate-x-1/2">
                <SlideTabs />
            </div>
        </>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="z-50 relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
        >
            

            <a href="#banner"><Tab setPosition={setPosition}>Home</Tab></a>
            <a href="#skills"><Tab setPosition={setPosition}>Skills</Tab></a>
            <a href="#projects"><Tab setPosition={setPosition}>Projects</Tab></a>
            <a href="#hire-me"><Tab setPosition={setPosition}>Hire me</Tab></a>
            <a href="#about-me"><Tab setPosition={setPosition}>About me</Tab></a>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3  text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};