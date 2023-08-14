import polyImg from '../assets/images/Polygon 2.png'
import ruler from '../assets/images/Ruler.png'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
import { motion } from 'framer-motion'
import img from "../assets/images/abc.png"
import cbg from "../assets/images/blackbg curve.png"
const AboutUs = () => {

    return (
        <>
            <div className="parent-div bg-[#060719] w-full">
                <Navbar />
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col-reverse mx-0  items-center sm:flex-row sm:justify-between">

                    <div className="relative heading-and-content-div w-[100%]">
                        <img
                            src={img}
                            alt="Your Image"
                            className="w-full h-[550px] md:h-[770px]"
                        />
                        <div className="absolute md:mx-[6%] pt-[5rem] md:pt-32 xl:pt-[4rem] inset-0 flex flex-col items-center justify-center" >
                            <div className="heading-div font-bold bg-gradient-to-b from-[#8DE29E] from-40% to-[#FFFFFF] text-transparent bg-clip-text  text-[28px] text-center md:ps-7 md:text-start md:text-5xl xl:text-6xl">
                                About Chawla Tech</div>
                            <div className="content-div xl:min-w-[410px] xl:max-w-[944px] md:max-w-[525px] text-[#F2F2F2] text-[14px] p-[25px] md:text-[18px] xl:text-xl text-justify font-normal">
                                Our primary objective is to support our clients, people, and communities in achieving success. We offer a range of diverse services across various industries and collaborate with leading experts to provide optimal outcomes. Our impact is far-reaching, as we contribute to organizational transformations, financial market security, and government partnerships aimed at enhancing societal well-being.                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className='relative -mt-[80px] w-full overflow-hidden pt-2'>
                    <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>
            </div>
            <div className="parent-div  bg-[#fafafafa] w-full">
                <div className='md:mx-16 pb-[100px] mx-8 -mt-[100px] md:-mt-[200px] relative z-90'>
                    <div className="flex flex-col px-5 top-[12rem] space-y-2 item-center justify-center">

                        <div>
                            <h1 className="text-primary-dark  text-center text-[20px] sm:text-3xl font-bold">Our Values</h1>
                        </div>
                        <div className="pb-8 pt-3">
                            <p className="text-[#000] text-justify text-md text-[14px] sm:text-[16px] font-medium">Our team is committed to providing cutting-edge solutions and driven by an unwavering passion for technological advancement. We specialize in application development, UI/UX design, and web development, utilizing our skilled team and vast experience. Our aim is to enable businesses with pioneering digital solutions that foster growth, elevate user experiences, and unlock fresh prospects. We strongly believe in the value of collaboration and work closely with each of our clients to fully comprehend their distinct needs and objectives.</p>                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around  gap-[24px]'>
                        <div className='px-[26px] py-[35px] md:h-auto md:w-[276px] rounded-[12px] bg-[#000000]'>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center ">
                                Mission
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px]  tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                                Our goal is to promote success through digital transformation while consistently providing excellence and integrity. Let's navigate difficulties, seize chances, and create a better future for your company.                        </div>
                        </div>
                        <div className='px-[26px] py-[35px] md:h-auto md:w-[276px] rounded-[12px] bg-[#000000]'>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center ">
                                Vision
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px]  tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                                We guide clients through neon-lit cyber highways, fearlessly venturing into the virtual unknown, creating cutting-edge symphonies that reverberate across the cosmos.     </div>
                        </div>
                        <div className='px-[26px] py-[35px] md:h-auto md:w-[276px] rounded-[12px] bg-[#000000]'>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center ">
                                Purpose
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px]  tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                                We believe in the worth of individuals.
                                We believe that true company success is realised through the
                                empowerment and enrichment
                                of its people.         </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="parent-div bg-[#060719] w-full">
                <div className='relative w-full top-[-90px] overflow-hidden pt-2'>
                    <img src={cbg} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>

                <div className='mt-[-180px] z-1 md:top-[-140px] relative '>

                    <div className="text-[20px]  md:text-[28px] xl:text-[44px] text-[#8DE29E] text-center mx-5 md:mt-14 xl:mt-28">
                        Guiding Principles that Drive Us Forward
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1 }}
                        className='md:mx-16 md:mt-32 xl:mt-48 grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 place-items-center pb-24 md:pb-32 lg:pb-40'>
                        <div className='w-52 mt-24 xl:mt-0 md:w-64 md:h-56 p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                            <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14'>
                                <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px]' src={polyImg} alt="" />
                                <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7' src={ruler} alt="" />
                            </div>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center pt-[72px] md:pt-[78.86px]">
                            Excellence
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px] font-normal tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                            Striving for Excellence in every aspect of our work, we create digital solutions that inspire, engage, and drive success.                            </div>
                        </div>
                        <div className='w-52 mt-24 xl:mt-0 md:w-64 md:h-56 p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                            <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14'>
                                <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px]' src={polyImg} alt="" />
                                <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7' src={ruler} alt="" />
                            </div>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center pt-[72px] md:pt-[78.86px]">
                            Precision
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px] font-normal tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                            With meticulous attention to detail and precision in every line of code, we craft digital experiences that are seamless, efficient, and flawless.                            </div>
                        </div>
                        <div className='w-52 mt-24 xl:mt-0 md:w-64 md:h-56 p-[120px]-[32px]-[32px]-[32px] rounded-[17px] gap-[40px] bg-[#FFFFFF1A]'>
                            <div className='image-div relative left-[55px] -top-[50px] md:left-[80px] md:-top-14'>
                                <img className='absolute w-[95px] h-[101px] md:w-[102px] md:h-[110px]' src={polyImg} alt="" />
                                <img className='absolute w-[38.5px] h-[38.5px] top-8 left-6 md:w-[42px] md:h-[42px] md:top-9 md:left-7' src={ruler} alt="" />
                            </div>
                            <div className="text-[#8DE29E] text-[25.5px] md:text-[28px] text-center pt-[72px] md:pt-[78.86px]">
                                Perfection
                            </div>
                            <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px] font-normal tracking-tighter text-center text-[#F2F2F2] pt-2 md:px-3'>
                            Perfection is our constant pursuit. We leave no stone unturned, ensuring that our digital solutions are impeccably designed.                            </div>
                        </div>

                        {/* png */}
                    </motion.div>
                    <div className='relative w-full overflow-hidden pt-2'>
                        <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                        <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                    </div>
                </div>
            </div>

            {/* CARD IMAGE */}
            <div className='z-1 relative sm:-mt-[15rem] bg-[#fafafa] -mt-[6rem] '>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    className="md:mx-[8%]  xl:mx-0">
                    <div className="xl:mb-14">
                        <h1 className="font-black text-2xl xl:text-4xl text-[#000] text-center">
                            Passionate Individuals Behind Our Success
                        </h1>
                    </div>
                    <div className="grid w-full grid-flow-row place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
                        <Card personName={"Rohan Kaushal"} title={"Founder"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Simprabh Singh"} title={"Founder"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Prakash Bhatt"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Dakshay Bishnoi"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Aditya Gargwal"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Vineet Bhoria"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Akansha Mundel"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Akash Chaurasia"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"vishal Gupta"} title={"SDE"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Manav Saspal"} title={"Ui/Ux Designer"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                        <Card personName={"Deepjyoti Gosh"} title={"Ui/Ux Designer"} imageUrl={'https://chirpybazaar.com/wp-content/uploads/2019/05/dummy-man-570x570.png'} />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AboutUs