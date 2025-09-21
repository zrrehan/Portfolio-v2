import myImg from "../assets/DP.png"

function Banner() {
    return(
        <div>
            <div className="md:w-[50%]">
                <div className="w-[500px]">
                    <img src={myImg} className="w-full rounded-full" />
                </div>

                <div>
                    <h1>Hello, I am Rehan</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner;