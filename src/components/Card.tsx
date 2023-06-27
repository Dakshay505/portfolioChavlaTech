import founder from '../assets/founder.png'

const Card = () => {
    return (
        <div className="relative h-[360px] w-[297px] lg:w-[404px] lg:h-[490px] flex flex-col mt-5 items-center shadow-xl">
            <img src={founder} className="grayscale hover:grayscale-0 object-scale-down transition duration-300 ease-in-out" alt="" />
            <div className="absolute bottom-3 text-center">
                <h1 className="font-black text-2xl lg:text-4xl text-[#8DE29E] m-0 p-0" id="person-name">Person Name</h1>
                <h4 className="text-[#FFFFFFE5] text-[12px] md:text-[16px] m-0 p-0" id="position">Co-Founder</h4>
            </div>
        </div>
    )
}

export default Card