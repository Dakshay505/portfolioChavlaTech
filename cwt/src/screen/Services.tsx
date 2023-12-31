import Navbar from '../components/navbar'
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
import { motion } from 'framer-motion'
import img from "../assets/images/Services img.svg"
import service from "../assets/images/service2.svg"

import mobile from "../assets/images/mobile.png"
import web from "../assets/images/webdev.png"
import uiux from "../assets/images/uiux.png"
import product from "../assets/images/product.png"
import consultancy from "../assets/images/consultancy.png"
import cbg from "../assets/images/blackbg curve.png"
import logoo from "../assets/images/logoo.png"
import inverted from "../assets/images/inverted.png"
import { useEffect, useState } from 'react'
import logo from "../assets/images/CT.png"
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import img1 from "../assets/images/hrm.svg"
import img2 from "../assets/images/pm.svg"
import img3 from "../assets/images/more.svg"
import img4 from "../assets/images/Group 145.svg"
import img5 from "../assets/images/im.svg"
import rightwhite from "../assets/images/ArrowDown.svg"
import service2 from "../assets/images/service3.svg"

const Services = () => {
    const [call, setCall] = useState(0);
    const [client, setClient] = useState(0);
    const [customers, setCustomers] = useState(0);
    const callFinalValue = 20;
    const clientFinalValue = 100;
    const customersFinalValue = 1000;
    const animationDuration = 2000;
    const callInterval = animationDuration / callFinalValue;
    const clientInterval = animationDuration / clientFinalValue;
    const customersInterval = animationDuration / customersFinalValue;

    useEffect(() => {
        let currentValue = 0;
        const timer = setInterval(() => {
            setCall(currentValue);
            currentValue++;

            if (currentValue > callFinalValue) {
                clearInterval(timer);
            }
        }, callInterval);

        return () => {
            clearInterval(timer);
        };
    }, []);
    useEffect(() => {
        let currentValue = 0;
        const timer = setInterval(() => {
            setClient(currentValue);
            currentValue++;

            if (currentValue > clientFinalValue) {
                clearInterval(timer);
            }
        }, clientInterval);

        return () => {
            clearInterval(timer);
        };
    }, []);
    useEffect(() => {
        let currentValue = 0;
        const timer = setInterval(() => {
            setCustomers(currentValue);
            currentValue++;

            if (currentValue > customersFinalValue) {
                clearInterval(timer);
            }
        }, customersInterval);

        return () => {
            clearInterval(timer);
        };
    }, []);


    // cards
    const slides = [
        {
            image: mobile,
            title: 'Mobile Development',
            description: 'IOS and Android apps built with React Native and Node.js to work seamlessly across devices',
        },
        {
            image: web,
            title: 'Web Development',
            description: 'Highly scalable platforms and well-tested web apps that are ready to handle millions of users daily',
        },
        {
            image: uiux,
            title: 'UI/UX Design',
            description: 'Functional interfaces designed from the ground up. Also: UX audits and workshops',
        },
        {
            image: product,
            title: 'Product Development',
            description: 'Full support at each stage of product development: prototyping MVP and product scaling',
        },
        {
            image: consultancy,
            title: 'Consultant Services',
            description: 'A-Z providing customized services for 24X7',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const next = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const goToSlide = (index: any) => {
        setCurrentSlide(index);
    };

    // testimonials


    const [startIndex, setStartIndex] = useState(0);
    const data = [
        {
            title: 'UX/UI Design',
            description: 'Highly scalable platform and well tested web that are ready to...',
            description1: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout reader will be distracted by the readable content...',
            name: 'Lora Smith ',
            position: 'CEO & Founder Crix '
        },
        {
            title: 'Mobile Development',
            description: 'Highly scalable platform and well tested web that are ready to...',
            description1: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout reader will be distracted by the readable content...',
            name: 'Lora Smith ',
            position: 'CEO & Founder Crix '
        },
        {
            title: 'Web Development',
            description: 'Highly scalable platform and well tested web that are ready to...',
            description1: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout reader will be distracted by the readable content...',
            name: 'Lora Smith ',
            position: 'CEO & Founder Crix '
        },
        {
            title: 'Product Development',
            description: 'Highly scalable platform and well tested web that are ready to...',
            description1: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout reader will be distracted by the readable content...',
            name: 'Lora Smith',
            position: 'CEO & Founder Crix'
        },

    ];

    const handleDotClick = (index: any) => {
        setStartIndex(index);
    };

    const visibleData = data.slice(startIndex, startIndex + 3);




    return (
        <>
            {/* mainhead */}

            <div className="parent-div bg-[#060719] w-full">
                <Navbar />
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    className="flex mx-[20px] md:items-start  items-center sm:flex-row sm:justify-center">

                    <div className="w-full md:w-[90%] pt-[7.3rem] flex flex-col justify-end gap-[30px] lg:flex-row-reverse  lg:pt-[7rem] pb-[90px]">
                        <div className='flex justify-center items-center'>
                            <img
                                src={img}
                                alt="Your Image"
                                className='w-[320px] lg:w-[650px]'
                            />
                        </div>
                        <div className='flex flex-col md:justify-center gap-[32px] md:gap-[64px] md:mx-[20px] items-center lg:items-start '>
                            <div className="inset-0 gap-[20px] flex flex-col lg:w-[660px] items-start  justify-center" >
                                <div className='flex border-[#292A3D]  bg-[#292A3D] text-white rounded-[20px] border px-[12px] py-[10px]'>
                                    Our Services
                                </div>
                                <div className="heading-div text-[#8DE29E]  font-bold bg-clip-text text-[25px]  md:text-[28px] text-center md:text-start md:text-4xl xl:text-5xl">
                                    Corporate Advisory </div>
                                <div className="content-div xl:min-w-[410px] xl:max-w-[944px] md:max-w-[525px] text-[#F2F2F2] text-[12px] md:text-[18px] xl:text-xl text-justify font-normal">
                                    We the Chawla Tech focus on multiple problems at once, and our products aid in a multi-directional transition from technologies to labour management.</div>
                            </div>

                            <div className='flex w-[260px] md:w-auto gap-[16px] md:gap-[30px] items-start justify-center'>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img1} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>HR Management</div>
                                </div>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img2} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>Project Management</div>
                                </div>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img3} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>More</div>
                                </div>

                            </div>



                            <div className=''>
                                <button className="bg-[#8DE29E] hover:cursor-pointer px-[23px] w-[280px]   md:w-auto py-[18px] flex items-center space-x-4 justify-center  rounded-[6px] md:rounded-full hover:animate-pulse">
                                    <p className="text-sm">View More</p>
                                    <img src={right} alt="phone" className="w-5" />

                                </button>

                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className='relative -mt-[80px] w-full overflow-hidden pt-2'>
                    <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>
            </div>



            <div className='bg-white flex justify-center  md:mt-[-17rem] md:z-[11] relative'>
                <div className="w-[90%] pt-[0px] flex justify-end flex-col gap-[30px] lg:flex-row-reverse  md:pt-[5.3rem] pb-[90px]">
                    <div className='flex justify-center items-center m-auto'>
                        <img
                            src={service}
                            alt="Your Image"
                            className='w-[320px] lg:w-[560px]'
                        />
                    </div>
                    <div className='flex flex-col md:justify-center gap-[32px] md:gap-[64px] md:mx-[20px] pb-[90px] lg:pb-[0]  items-center '>
                        <div className="inset-0 gap-[20px] flex flex-col lg:w-[660px] items-start  justify-center" >
                            <div className='flex border-[#292A3D]  bg-[#292A3D] text-white rounded-[20px] border px-[12px] py-[10px]'>
                                Our Services
                            </div>
                            <div className="heading-div text-[#292A3D]  font-bold bg-clip-text text-[25px]  md:text-[28px] text-center md:text-start md:text-4xl xl:text-5xl">
                                Online Market-place </div>
                            <div className="content-div xl:min-w-[410px] xl:max-w-[944px] md:max-w-[525px] text-[#292A3D] text-[12px] md:text-[18px] xl:text-xl text-justify font-normal">
                                We the Chawla Tech Scale up your business with different channels
                                with 90% risk management at your fingertips.</div>
                        </div>

                        <div className='flex w-[260px] md:w-auto gap-[16px] md:gap-[30px] items-start justify-center'>

                            <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                <img src={img4} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                <div className='text-[#292A3D] text-[12px] md:text-[24px]'>Multi Dealer
                                    Marketplace</div>
                            </div>

                            <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                <img src={img2} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                <div className='text-[#292A3D] text-[12px] md:text-[24px]'>Sales Management</div>
                            </div>

                            <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                <img src={img3} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                <div className='text-[#292A3D] text-[12px] md:text-[24px]'>More</div>
                            </div>

                        </div>



                        <div className=''>
                            <button className="bg-[#292A3D] hover:cursor-pointer px-[23px] w-[280px] md:w-auto py-[18px] flex items-center space-x-4 justify-center  rounded-[6px] md:rounded-full hover:animate-pulse">
                                <p className="text-sm text-white">View More</p>
                                <img src={rightwhite} alt="phone" className="w-5" />

                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="parent-div bg-[#060719] w-full">
                <div className='relative w-full top-[-90px] overflow-hidden pt-2 z-[11]'>
                    <img src={cbg} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>

                <div className='mt-[-10rem] md:mt-[-21rem]  justify-center flex flex-col lg:flex-row-reverse pb-[8rem] mx-[30px] z-[11]  relative'>
                    <div className="w-[90%] pt-[0px] flex justify-end flex-col gap-[30px] lg:flex-row-reverse  md:pt-[5.3rem] ">

                        <div className='flex justify-center items-center m-auto'>
                            <img
                                src={service2}
                                alt="Your Image"
                                className='w-[320px] lg:w-[560px]'
                            />
                        </div>
                        <div className='flex flex-col md:justify-center gap-[32px] md:gap-[64px] md:mx-[20px] items-center '>
                            <div className="inset-0 gap-[20px] flex flex-col lg:w-[660px] items-start  justify-center" >
                                <div className='flex border-[#292A3D]  bg-[#292A3D] text-white rounded-[20px] border px-[12px] py-[10px]'>
                                    Our Services
                                </div>
                                <div className="heading-div text-white  font-bold bg-clip-text text-[22px]  md:text-[28px] text-center md:text-start md:text-4xl xl:text-5xl">
                                    Online Market-place </div>
                                <div className="content-div xl:min-w-[410px] xl:max-w-[944px] md:max-w-[525px] text-white text-[12px] md:text-[18px] xl:text-xl text-justify font-normal">
                                    We the Chawla Tech Scale up your business with different channels
                                    with 90% risk management at your fingertips.</div>
                            </div>

                            <div className='flex w-[260px] md:w-auto gap-[16px] md:gap-[30px] items-start justify-center'>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img5} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>Multi Dealer
                                        Marketplace</div>
                                </div>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img2} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>Sales Management</div>
                                </div>

                                <div className='flex w-[100px] h-[100px] md:w-[170px] md:h-[160px] gap-[16px] md:gap-[30px] flex-col items-center text-center'>
                                    <img src={img3} alt="" className='h-[56px] w-[56px] md:h-[80px] md:w-[80px]' />
                                    <div className='text-white text-[12px] md:text-[24px]'>More</div>
                                </div>

                            </div>



                            <div className=''>
                                <button className="bg-[#292A3D] hover:cursor-pointer px-[23px] w-[280px] md:w-auto py-[18px] flex items-center space-x-4 justify-center  rounded-[6px] md:rounded-full hover:animate-pulse">
                                    <p className="text-sm text-white">View More</p>
                                    <img src={rightwhite} alt="phone" className="w-5" />

                                </button>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='relative -mt-[80px] w-full overflow-hidden pt-2'>
                    <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>

            </div>





            {/* cards */}
            <div className='bg-white md:mt-[-50px] md:z-[11] relative' >
                <div className="md:hidden text-[20px] py-[20px] font-bold text-black text-center mx-5">
                    Our Services
                </div>
                <div className="hidden md:flex text-[20px] justify-center py-[20px] font-bold text-black text-center mx-5">
                    What’s your top concern at the moment?
                </div>
                <div className="flex mx-[20px] md:pb-[130px] justify-center items-center gap-[45px]">
                    <div className="hidden md:flex flex-col h-[330px] bg-[#fafafa] justify-center border border-t-[4px] border-black items-center gap-[32px] p-[30px] md:h-[450px] md:w-[600px] shadow-lg rounded-[12px]">
                        <div className="flex flex-col gap-[12px]">
                            <img src={logo} alt="" className='md:h-[110px] md:w-[110px]' />
                            <h1 className="text-primary-dark text-center text-[20px] font-bold">Our Services</h1>
                        </div>
                        <div className="flex items-center gap-[90px] justify-between p-4">
                            <button
                                onClick={prev}
                                className="p-1 rounded-full bg-white bg-opacity-80 shadow-lg text-gray-800 hover:bg-white"
                            >
                                <img src={left} alt="" className='h-[24px] w-[24px]' />
                            </button>
                            <button
                                onClick={next}
                                className="p-1 rounded-full bg-white bg-opacity-80 shadow-lg text-gray-800 hover:bg-white"
                            >
                                <img src={right} alt="" className='h-[24px] w-[24px]' />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="flex flex-col pb-[120px] md:pb-0 md:flex-row gap-[32px] transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className="flex flex-col h-[330px] justify-center border border-t-[4px] border-t-black items-center gap-[32px] p-[30px] md:h-auto md:w-[368px] shadow-lg rounded-[12px]">
                                    <div>
                                        <img src={slide.image} alt={`Slide ${index}`} className="h-[100px] w-[100px] md:h-[149px] md:w-[149px]" />
                                    </div>
                                    <div className="md:w-[320px]">
                                        <div className="text-[25.5px] font-bold md:text-[28px] text-center">{slide.title}</div>
                                        <div className="font-[poppins] p-5 text-[12.7px] md:text-[14px] tracking-tighter text-center pt-2 md:px-3">
                                            {slide.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex absolute top-[28rem] bottom-4 right-0 left-[50%]">
                        <div className="flex items-center justify-center gap-2">
                            {slides.map((_, i) => (
                                <div
                                    key={i}
                                    className={`transition-all w-3 h-3 bg-[#000000B2] rounded-full ${Math.floor(currentSlide / 3) === i ? "p-2" : "bg-opacity-50"}`}
                                    onClick={() => goToSlide(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div >


            <div className="parent-div bg-[#060719] w-full">
                <div className='relative w-full top-[-90px] overflow-hidden pt-2 z-[11]'>
                    <img src={cbg} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>

                <div className='mt-[-180px] z-[11] md:top-[-140px] relative '>
                    <div className="text-[20px]  md:text-[28px] xl:text-[44px] text-[#8DE29E] text-center mx-5 md:mt-14 xl:mt-28">
                        Our Testimonials
                    </div>
                    <div className='font-[poppins] p-5 text-[12.7px] md:text-[14px] font-normal tracking-tighter lg:w-[924px] md:m-auto text-center text-[#F2F2F2] pt-2 md:px-3'>
                        We partner with a range of industries, including fintech, healthcare, education, game development, IoT, and martech, to help them grow their businesses with outstanding software.
                    </div>


                    {/* testmonials */}

                    <div className='scrbar flex-col flex  mx-[20px] items-start gap-[16px] overflow-x-auto'>
                        <div className='flex gap-[16px] md:relative'>
                            {visibleData.map((currentItem, index) => (
                                <div key={index} className='py-[24px] px-[16px] flex gap-[8px] bg-[#1F2030] rounded-[8px] '>
                                    <div className='flex md:flex-row flex-col gap-[40px] items-start justify-end'>

                                        <div className='flex flex-col md:w-[265px] gap-[24px]'>
                                            <div>
                                                <img src={logoo} alt="" className='h-[64px] w-[64px]' />
                                            </div>
                                            <div className='flex flex-col gap-[16px]'>
                                                <h1 className="text-[20px] md:whitespace-nowrap md:text-[28px] text-[#8DE29E]">{currentItem.title}</h1>
                                                <p className='font-[poppins] text-[12.7px] md:text-[14px] font-normal tracking-tighter text-[#F2F2F2] pt-2 '>{currentItem.description}</p>
                                            </div>
                                        </div>
                                        <div className='h-[1px] w-[212px] mx-[15px] md:relative md:h-[250px] md:top-[0rem] md:w-[2px] bg-[#7CC68A4D] '></div>
                                        <div className='flex flex-col md:w-[305px] justify-between gap-[16px]'>
                                            <div className='flex flex-col'>
                                                <img src={inverted} alt="" className='h-[24px] w-[24px]' />
                                                <p className='font-[poppins] text-[12.7px] md:text-[14px] font-normal tracking-tighter text-[#F2F2F2] pt-2 '>{currentItem.description1}</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <h1 className="text-[20px] whitespace-nowrap md:text-[28px] text-[#8DE29E]">{currentItem.name}</h1>
                                                <p className='font-[poppins] text-[12.7px] md:text-[14px] font-normal tracking-tighter text-[#F2F2F2] pt-2 '>{currentItem.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='hidden md:flex mt-4 m-auto justify-center items-center'>
                            {data.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-4 h-4 mx-1 rounded-full ${index >= startIndex && index < startIndex + 3
                                        ? 'bg-[#8DE29E]'
                                        : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* clients */}
                    <div className="mt-[5rem] flex flex-col md:p-0 px-7 space-y-[5rem] items-center">
                        <div className="flex flex-col text-center items-center">
                            <h1 className="text-primary-green text-3xl font-bold">Trusted by 15+ eCommerce Businesses</h1>
                        </div>
                        <div className="flex md:flex-row flex-col md:p-0 p-5 justify-between gap-[5rem]">
                            <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                                <p className="text-[3rem] font-bold text-primary-green text-center">{call}+</p>
                                <p className="text-primary-light text-center">Onboarding Calls</p>
                            </div>
                            <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                                <p className="text-[3rem] font-bold text-primary-green text-center">{client}%</p>
                                <p className="text-primary-light text-center">Client Satisfaction</p>
                            </div>
                            <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                                <p className="text-[3rem] font-bold text-primary-green text-center">{customers}+</p>
                                <p className="text-primary-light text-center">Customers impacted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Services