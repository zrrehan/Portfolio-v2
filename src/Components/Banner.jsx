import { TypeAnimation } from "react-type-animation";
import myImg from "../assets/DP.png"

function Banner() {
    return(
        <div className="flex py-[150px] w-[90%] max-w-[1250px] mx-auto items-center gap-20">
            <div className="md:w-[50%]">
                <div className="w-[500px]">
                    <img src={myImg} className="w-full rounded-full" />
                </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="">
                <h1 className=" text-5xl font-bold">Hello, I am  <span className=" text-6xl monoton-regular">Rehan</span></h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'A Frontend Developer',
                        1000,
                        'A React Enthusiast',
                        1000,
                        'A Problem Solver',
                        1000,
                        'A Web Developer',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '35px', fontWeight: "bold" }}
                    repeat={Infinity}
                ></TypeAnimation>
                <p>
                    Passionate frontend developer skilled in React, creating responsive, user-friendly, and high-performance web applications with a focus on clean design and seamless user experience.
                </p>
            </div>
            
        </div>
    )
}

export default Banner;