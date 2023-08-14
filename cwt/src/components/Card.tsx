
const Card = ({imageUrl,personName,title}:{imageUrl:string,personName:string,title:string}) => {
    return (
        <div className="relative bg-gradient-to-t from-black to-[#fafafa] to-[50%] bg-opacity-30 h-[360px] w-[297px] lg:w-[300px] lg:h-[350px] flex flex-col mt-5 overflow-hidden items-center shadow-xl">
            <img src={imageUrl} className="grayscale hover:grayscale-0 object-scale-down  transition duration-300 ease-in-out" alt="" />
            <div className="absolute bottom-3 text-center">
                <h1 className="font-black text-2xl lg:text-3xl text-[#8DE29E] m-0 p-0" id="person-name">{personName}</h1>
                <h4 className="text-[#FFFFFFE5] text-[12px] md:text-[16px] m-0 p-0" id="position">{title}</h4>
            </div>
        </div>
    )
}

export default Card