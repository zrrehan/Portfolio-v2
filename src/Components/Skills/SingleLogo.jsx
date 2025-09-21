function SingleLogo({img}) {
    return(
        <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] lg:mx-[100px] mx-[40px]">
            <img src={img} className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] rounded-3xl" />
        </div>
    )
}
export default SingleLogo