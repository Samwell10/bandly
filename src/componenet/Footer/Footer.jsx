import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="bg-[#127968] text-white px-[14px] xl:px-[60px] py-[39px] xl:py-[88px] rounded-[5px] xl:rounded-[20px]">
      <div className="">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 2xl:gap-40">
          {/* Brand */}
            <div className="">
                <h2 className="font-clash text-3xl xl:text-5xl font-semibold">BANDLY</h2>
                <p className="mt-2 font-clash font-medium text-sm xl:text-xl text-[#FFFFFFB2] leading-[28px]">
                Get booked and paid securely while also managing band logistics
                </p>

                <div className="mt-4">
                <p className="font-clash text-lg xl:text-2xl font-medium">Call on</p>
                <a
                    href="tel:+234805880504"
                    className="block font-clash text-sm xl:text-xl text-[#B8D7D2] mt-1 hover:underline"
                >
                    +234805880504
                </a>
                </div>

                <div className="mt-4">
                <p className="font-clash text-lg xl:text-2xl font-medium">Contact Us</p>
                <a
                    href="mailto:customercare@bandly.com"
                    className="block font-clash text-sm xl:text-xl text-[#B8D7D2] mt-1 hover:underline"
                >
                    customercare@bandly.com
                </a>
                </div>
            </div>
            <div className="flex justify-between md:gap-16">
                {/* Products */}
                <div>
                    <h3 className="font-clash text-lg xl:text-2xl font-medium mb-2">Products</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Bookings</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Bands</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Logistics</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Live Events</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">More</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-clash text-lg xl:text-2xl font-medium mb-2">Company</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">About Us</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Why Bandly</a></li>
                    </ul>
                </div>

                {/* Quick Menu */}
                <div>
                    <h3 className="font-clash text-lg xl:text-2xl font-medium mb-2">Quick Menu</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Contact Us</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Services</a></li>
                    <li><a href="#" className="font-clash text-sm xl:text-xl text-[#B8D7D2] hover:underline">Privacy</a></li>
                    </ul>
                </div>
            </div>
           {/* Newsletter */}
            <div className="mt-10 md:mt-0 flex flex-col items-center md:items-start justify-between gap-6">
            <div className="w-full md:w-auto">
                <h3 className="font-medium font-clash text-lg xl:text-2xl mb-[34px] text-left">
                Stay up to date
                </h3>
                <div className="flex bg-white rounded-full p-2">
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="px-8 py-4 font-clash font-medium text-black text-sm w-full md:w-64 outline-none"
                />
                <button className="bg-[#127968] text-white px-[35px] py-[16px] rounded-full font-clash text-sm font-medium hover:bg-gray-200">
                    SUBSCRIBE
                </button>
                </div>
            </div>

            {/* Social icons */}
            <div className="flex space-x-4 text-lg">
                <a href="#" className="w-[38px] h-[38px] md:w-[52px] md:h-[52px] border border-[#FFFFFF] rounded-full flex items-center justify-center hover:text-gray-300">
                    <FaFacebookF /> 
                </a>
                <a href="#" className="w-[38px] h-[38px] md:w-[52px] md:h-[52px] border border-[#FFFFFF] rounded-full flex items-center justify-center hover:text-gray-300">
                    <FaTwitter/>
                </a>
                <a href="#" className="w-[38px] h-[38px] md:w-[52px] md:h-[52px] border border-[#FFFFFF] rounded-full flex items-center justify-center hover:text-gray-300">
                    <FaInstagram />
                </a>
                <a href="#" className="w-[38px] h-[38px] md:w-[52px] md:h-[52px] border border-[#FFFFFF] rounded-full flex items-center justify-center hover:text-gray-300">
                    <FaLinkedinIn />
                </a>
            </div>
            </div>
        </div>

       

        {/* Bottom */}
        <div className="mt-10 border-t border-[#FFFFFF] pt-4  font-clash font-medium text-center text-xl">
          © 2025 Bandly All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
