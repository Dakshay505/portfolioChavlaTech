import polyImg from '../assets/images/Polygon 2.png'
import ruler from '../assets/images/Ruler.png'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
const AboutUs = () => {

    return (
        <>
            <div className="parent-div bg-[#060719] w-full">
                <Navbar />
                <div className="flex flex-col-reverse mx-0 md:mx-[6%] items-center sm:flex-row sm:justify-between pt-28 md:pt-40 xl:pt-52">
                    <div className="heading-and-content-div">
                        <div className="heading-div bg-gradient-to-b from-[#8DE29E] from-40% to-[#FFFFFF] text-transparent bg-clip-text mt-8 text-[28px] text-center md:ps-7 md:text-start md:text-5xl xl:text-6xl">
                            Here at Chawla Tech
                        </div>
                        <div className="content-div xl:min-w-[410px] xl:max-w-[944px] md:max-w-[525px] text-[#F2F2F2] text-14px mt-6 mx-8 md:text-xl xl:text-2xl text-justify font-normal">
                            Lorem ipsum dolor sit amet consectetur. Pharetra quam nulla gravida ac massa in sit malesuada. Purus scelerisque facilisi ultrices nisl nibh tellus. Volutpat dui platea gravida dictum morbi risus. Diam aliquet feugiat feugiat pellentesque elit amet. Amet a luctus vel quis morbi nunc scelerisque. Aliquam vitae mauris sit enim magna cursus viverra. Pharetra eget vitae dignissim turpis neque vulputate ullamcorper. Phasellus id nunc habitant lorem mauris ullamcorper neque odio.
                        </div>
                    </div>
                    <div className="w-72 h-52 md:w-80 xl:w-[449px] md:h-60 xl:h-[332px] bg-white rounded-full opacity-20 shrink-0">
                    </div>
                </div>

                <hr className="border border-[#8DE29E66] border-solid w-[80%] m-auto mt-[34px] md:mt-[70px] xl:mt-28" />
                <div className="text-[20px] md:text-[28px] xl:text-[44px] text-[#8DE29E] text-center mx-5 mt-10 md:mt-14 xl:mt-28">
                    Guiding Principles that Drive Us Forward
                </div>
                <div className='md:mx-16 md:mt-32 xl:mt-48 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 place-items-center pb-24 md:pb-32 lg:pb-40'>
                    <div className='w-52 h-44 mt-24 xl:mt-0 md:w-64 md:h-56 xl:w-[400px] xl:h-[320px] p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                        <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14 xl:left-28 xl:-top-20'>
                            <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px] xl:w-[158px] xl:h-[168px]' src={polyImg} alt="" />
                            <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7 xl:w-[64px] xl:h-[64px] xl:top-12 xl:left-10' src={ruler} alt="" />
                        </div>
                        <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] xl:text-[44px] xl:leading-[60px] text-center pt-[72px] md:pt-[78.86px] xl:pt-24">
                            Perfection
                        </div>
                        <div className='font-[poppins] text-[12.7px] md:text-[14px] xl:text-[18px] font-normal xl:leading-6 tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3 xl:px-10 xl:pt-5'>
                            Aliquam vitae mauris sit enim magna cursus viverra. Pharetra eget vitae dignissim turpis neque vulputate ullamcorper.
                        </div>
                    </div>
                    <div className='w-52 h-44 mt-24 xl:mt-0 md:w-64 md:h-56 xl:w-[400px] xl:h-[320px] p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                        <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14 xl:left-28 xl:-top-20'>
                            <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px] xl:w-[158px] xl:h-[168px]' src={polyImg} alt="" />
                            <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7 xl:w-[64px] xl:h-[64px] xl:top-12 xl:left-10' src={ruler} alt="" />
                        </div>
                        <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] xl:text-[44px] xl:leading-[60px] text-center pt-[72px] md:pt-[78.86px] xl:pt-24">
                            Perfection
                        </div>
                        <div className='font-[poppins] text-[12.7px] md:text-[14px] xl:text-[18px] font-normal xl:leading-6 tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3 xl:px-10 xl:pt-5'>
                            Aliquam vitae mauris sit enim magna cursus viverra. Pharetra eget vitae dignissim turpis neque vulputate ullamcorper.
                        </div>
                    </div>
                    <div className='w-52 h-44 mt-24 xl:mt-0 md:w-64 md:h-56 xl:w-[400px] xl:h-[320px] p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                        <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14 xl:left-28 xl:-top-20'>
                            <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px] xl:w-[158px] xl:h-[168px]' src={polyImg} alt="" />
                            <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7 xl:w-[64px] xl:h-[64px] xl:top-12 xl:left-10' src={ruler} alt="" />
                        </div>
                        <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] xl:text-[44px] xl:leading-[60px] text-center pt-[72px] md:pt-[78.86px] xl:pt-24">
                            Perfection
                        </div>
                        <div className='font-[poppins] text-[12.7px] md:text-[14px] xl:text-[18px] font-normal xl:leading-6 tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3 xl:px-10 xl:pt-5'>
                            Aliquam vitae mauris sit enim magna cursus viverra. Pharetra eget vitae dignissim turpis neque vulputate ullamcorper.
                        </div>
                    </div>
                    {/* png */}
                </div>
                <div className='relative w-full overflow-hidden'>
                    <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-50' />
                </div>
            </div>

            {/* CARD IMAGE */}
            <div className="md:mx-[8%] xl:mx-0 xl:mt-28">
                <div className="xl:mb-14">
                    <h1 className="font-black text-2xl xl:text-4xl text-[#060719] text-center">
                        Passionate Individuals Behind Our Success
                    </h1>
                </div>
                <div className="grid grid-flow-row place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>

    )
}

export default AboutUs