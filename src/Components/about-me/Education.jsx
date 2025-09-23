import { motion } from "motion/react";
function Education() {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="space-y-10 w-[90vw] lg:w-[50%]">
            <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold header-text">Education</h1>
                <p>
                    Currently pursuing an undergraduate degree in Computer Science, developing a strong foundation in software engineering principles, algorithms, and modern technologies. Dedicated to continuous learning and practical experience to excel in the tech industry.
                </p>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">Sep 2022 - Sep 2026</time>
                        <div className="text-lg font-black">Brac University</div>
                        BSc in Computer Science (CS)
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2019-2022</time>
                        <div className="text-lg font-black">Shaheed Police Smrity College</div>
                       Completed HSC 
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2017-2019</time>
                        <div className="text-lg font-black">Bindubashini Govt. Boys' High School</div>
                        Completed SSC
                    </div>
                </li>
            </ul>
        </motion.div>
    )
}

export default Education;