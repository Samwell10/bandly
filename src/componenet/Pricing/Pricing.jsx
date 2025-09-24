import React from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import sass from "../../assets/Sass.png";
import digg from "../../assets/digg.png";
import ati from "../../assets/ati.png";
import deesignal from "../../assets/Deesignal.png";
import cardmajor from "../../assets/CARD MAJOR.png";

const PricingSection = () => {
  return (
    // <div className="bg-[#c71f1f] flex justify-center items-center py-10 px-4">
      <div className="bg-[#167C6A] px-[20px] xl:px-[48px] py-[73px] w-full flex flex-col gap-15 md:flex-row overflow-hidden lg:rounded-[20px]">
        
        {/* Left Section (Form) */}
        <div className="bg-[#111] text-white flex-1 p-6 md:p-10 flex flex-col justify-center rounded-[20px]">
          <h2 className="font-clash text-xl 2xl:text-4xl md:text-3xl font-semibold mb-[36px]">
            Get insight pricing before <br></br> booking a live band
          </h2>
          <p className="text-[#FFFFFFB2] text-sm md:text-base mb-[25px]">
            We’ll calculate the average cost for live band for you need.
          </p>
          <div className="border bg-[#0E1416] border-[#167C6A] rounded-md p-4 mb-4">
            <textarea
              className="w-full h-[274px] lg:h-[151px] bg-transparent font-clash font-normal text-sm text-[#FFFFFF] placeholder-[#FFFFFF] outline-none resize-none"
              // rows="10"
              placeholder="Describe what you need"
            />
            <div className="flex justify-end"> 
                <button className="font-clash text-sm font-medium self-start bg-transparent border border-[#167C6A] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#167C6A] transition">
                    CONTINUE
                    <AiOutlineOpenAI />
                </button>
            </div>
          </div>
          
        </div>

        {/* Right Section (Info) */}
        <div className="flex-1 text-white flex flex-col justify-between">
          <div>
            <p className="uppercase text-sm font-clash font-medium text-[#FFFFFF] mb-[15px]">
              Some Benefits of Bandly
            </p>
            <h3 className="text-xl 2xl:text-4xl font-clash font-semibold md:text-2xl mb-[18px]">
              We Are Here to Guide Pricing
            </h3>
            <p className="text-gray-300 text-sm 2xl:text-xl font-clash font-medium mb-[22px] md:text-base leading-[29px]">
              Lorem ipsum dolor sit amet, consectetueradipiscingi elenean mmodo ligulaet olor. Aenean massa. Aeneanl massa. rem ipsum dolor sit 
            </p>
          </div>
            <h1 
                className="lg:hidden text-[#FFFFFF1A] font-drukwide font-bold text-[58px] text-center tracking-tight"
            >
                <span 
                    className="inline-block hover:text-white transition-colors duration-300 ease-in-out"
                >BANDLY</span>
            </h1>
          <div className="mt-6 border-t border-[#FFFFFF] pt-6">
            <p className="text-[#FFFFFF] text-xl font-clash font-normal text-center lg:text-left mb-4">
              <span className="text-2xl font-medium">Bandly</span> is certified by:
            </p>
            <div className="flex flex-wrap gap-6 items-center justify-between">
              <img className="font-signature" src={sass}  ></img>
              <img className="font-bold" src={digg}></img>
              <img className="font-semibold" src={ati}></img>
              <img className="text-xs" src={deesignal}></img>
              <img className="text-xs" src={cardmajor}></img>
            </div>
          </div>
        </div>

      </div>
    // </div>
  );
};

export default PricingSection;
