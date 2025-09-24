import logo from "../../assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
    return ( 
        <div className="navbar p-4">
            <div className="navbar-inner flex justify-between items-center">
                <div className="logo flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-8"/>
                    <p className="font-clash text-[#FFFFFF] text-lg font-medium hidden lg:block"><span className="text-[#707070] font-semibold">Welcome:</span> Bandly is a platform that helps live musicians</p>
                </div>
                <div className="nav-links flex items-center gap-6">
                    <p className="hidden lg:block font-clash text-[#FFFFFF] text-lg font-medium">Onboard Your Band</p>
                    <button className="font-clash text-[#FFFFFF] text-sm font-medium px-[36px] py-[13px] border border-[#fffff] rounded-full" >BOOK A BAND</button>
                    <FaBarsStaggered className="text-2xl text-[#ffffff]"/>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;