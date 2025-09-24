  import { IoIosMusicalNotes } from "react-icons/io";
import { BsMouse } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "../componenet/Navbar/Navbar";
import Explore from "../componenet/Explore/Explore";
import { BiChevronRight } from "react-icons/bi";
import StepsSection from "../componenet/Steps/Steps";
import PricingSection from "../componenet/Pricing/Pricing";
import FAQ from "../componenet/faq/Faq";
import Testimonials from "../componenet/Testimonials/Testimonials";
import Footer from "../componenet/Footer/Footer";

const Index = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

     // Scroll-based animations
    const { scrollYProgress } = useScroll();

      // Transform values for parallax effects
    const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const bannerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const page2Y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const page2Opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
    };

      // Smooth scroll behavior
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return ( 
        <div className="bg-main-bg w-full h-screen">
            {/* page 1 */}
            <motion.div 
                className="banner h-lvh bg-[url(./assets/Banner1.jpg)] bg-cover bg-bottom py-[25px] px-[16px] xl:px-[7rem]"
                style={{ 
                    y: bannerY,
                    opacity: bannerOpacity
                }}
            >
                <Navbar/>
                <div className="cursor-pointer mt-[56px] lg:mt-[30px] px-[17px] block lg:flex items-end">
                    {/* Animated Text with individual word hover */}
                    <motion.h1 
                        style={{ y: textY }}
                        className="text-[#FFFFFF1A] font-drukwide text-[55px] lg:text-[58px] xl:text-[80px] 2xl:text-[110px] leading-[1.3] tracking-tight"
                    >
                        <motion.span
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >WITH</motion.span>
                        <br />
                        <motion.span 
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }} 
                        >BANDLY</motion.span>
                        <br />
                        <motion.span 
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >BOOK</motion.span>
                        <br />
                        <motion.span
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out mr-4"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }} 
                        >A</motion.span>
                        <motion.span
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >LIVE</motion.span>
                        <br />
                        <motion.span
                            className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                            whileHover={{ scale: 1.05, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >BAND</motion.span>
                    </motion.h1>
                    
                    <div className="mt-[46px] xl:mb-[18px] 2xl:mb-[28px] lg:ml-[-80px] xl:ml-[-120px] 2xl:ml-[-160px] flex justify-center lg:justify-start">
                        {/* Animated Button with gradient border following cursor */}
                        <div className="relative inline-block">
                            {/* Gradient border background when hovering */}
                            {isHovering && (
                                <div 
                                    className="absolute inset-0 rounded-full p-1 transition-opacity duration-300" 
                                    style={{
                                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #22c55e 0%, #000000 70%)`,
                                    }}
                                />
                            )}
                            
                            {/* Actual button */}
                            <button 
                                className={`relative font-clash text-[#FFFFFF] text-xl lg:text-lg xl:text-[30px] font-medium px-[8px] py-[8px] lg:px-[6px] lg:py-[6px] lg:pr-[30px] pr-[37px] border-4 rounded-full flex items-center gap-3 transition-all duration-300 ease-in-out ${
                                    isHovering ? 'border-transparent bg-transparent' : 'border-[#ffffff]'
                                }`}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#ffffff] rounded-full">
                                    <IoIosMusicalNotes className="text-[#000000]"/>
                                </div>
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <BsMouse className="text-2xl text-[#FFFFFF] mx-auto mt-[80px] animate-bounce"/>
                    <p className="text-center text-[#FFFFFF] font-clash text-sm mt-2">Scroll Down</p>
                </div>   
            </motion.div>
            {/* page 2 */}
            <motion.div
                className="bg-[#0C0F11] py-[61px] px-[20px] lg:py-[8.125rem]"  
                style={{ 
                    y: page2Y,
                    opacity: page2Opacity
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Explore/>
            </motion.div>
            <div className="px-[20px]" >
                <h1 className="text-center text-white text-xl lg:text-[40px] font-clash font-semibold">How it Bandly <span className="text-[#127968]">Works</span></h1>
                <p className="mt-[23px] font-clash text-center text-sm lg:text-xl font-medium text-[#FFFFFF] leading-[27px]">Lorem ipsum dolor sit amet, consectetueradipiscingi elenean mmodo ligulaet olor. Aenean massa. Aeneanl<br></br>massa. rem ipsum dolor sit </p>
                <div className="flex justify-center mt-[23px] xl:mt-[56px]">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            background: "linear-gradient(90deg, #006b5e, #008c73, #a1b5a8)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center px-1 py-1 rounded-full text-white font-clash font-medium text-base lg:text-[24px] bg-gradient-to-r from-teal-800 to-gray-400 shadow-md overflow-hidden"
                        >
                        {/* Circle with arrow */}
                        <div className="bg-white size-[45px] flex items-center justify-center rounded-full">
                            <BiChevronRight size={24} className="text-purple-900" />
                        </div>

                        {/* Text */}
                        <span className="px-[16px] lg:px-[29px]">For Bookings</span>
                    </motion.button>
                </div>
                <div className="xl:px-[4rem] 2xl:px-[7rem]">
                    <StepsSection/>
                </div>
            </div>
           
            <div className="mt-[76px] lg:mt-[150px] flex justify-center xl:px-[5.25rem] 2xl:px-[8.25rem]">
                <PricingSection/>
            </div>

            <div className="mt-[60px] lg:mt-[130px] px-[42px] xl:px-[5.25rem] 2xl:px-[8.25rem]">
                <FAQ/>
            </div>
            <div className="mt-[74px] lg:mt-[130px] px-[42px] xl:px-[5.25rem] 2xl:px-[8.25rem]">
                <Testimonials/>
            </div>
            <div className="mt-[77px] lg:mt-[198px] px-[20px] xl:px-[2.25rem] 2xl:px-[5.25rem]">
                <Footer/>
            </div>
        </div>
    );
}
 
export default Index;
