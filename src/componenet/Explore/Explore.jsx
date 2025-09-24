import musician1 from "../../assets/Muscian1.jpg";
import musician2 from "../../assets/Musician 2.jpg";
import musician3 from "../../assets/Musician3.jpg";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import BandCard from "../Card/BandCard";
const Explore = () => {
    const musicians = [
        {
        id: 1,
        name: "Timothy Smith",
        category: "Pianist",
        rating: 4.0,
        earnings: "Made N200k+",
        image: musician1
        },
        {
        id: 2,
        name: "Sarah Owen",
        category: "Keyboardist",
        rating: 4.0,
        earnings: "Made N250k+",
        image: musician2
        },
        {
        id: 3,
        name: "Hanna Talla",
        category: "Drummer",
        rating: 4.0,
        earnings: "Made N150k+",
        image: musician3
        },
        {
        id: 4,
        name: "Olusoga and the Station",
        category: "Singer",
        rating: 4.0,
        earnings: "Made N300k+",
        image: musician1
        },
         {
        id: 1,
        name: "Timothy Smith",
        category: "Pianist",
        rating: 4.0,
        earnings: "Made N200k+",
        image: musician1
        },
        {
        id: 2,
        name: "Sarah Owen",
        category: "Keyboardist",
        rating: 4.0,
        earnings: "Made N250k+",
        image: musician2
        },
        {
        id: 3,
        name: "Hanna Talla",
        category: "Drummer",
        rating: 4.0,
        earnings: "Made N150k+",
        image: musician3
        },
        {
        id: 4,
        name: "Olusoga and the Station",
        category: "Singer",
        rating: 4.0,
        earnings: "Made N300k+",
        image: musician1
        },
         {
        id: 1,
        name: "Timothy Smith",
        category: "Pianist",
        rating: 4.0,
        earnings: "Made N200k+",
        image: musician1
        },
        {
        id: 2,
        name: "Sarah Owen",
        category: "Keyboardist",
        rating: 4.0,
        earnings: "Made N250k+",
        image: musician2
        },
        {
        id: 3,
        name: "Hanna Talla",
        category: "Drummer",
        rating: 4.0,
        earnings: "Made N150k+",
        image: musician3
        },
        {
        id: 4,
        name: "Olusoga and the Station",
        category: "Singer",
        rating: 4.0,
        earnings: "Made N300k+",
        image: musician1
        }
    ];
    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Adjust for mobile (e.g., 4 per page)
    const totalPages = Math.ceil(musicians.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = musicians.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    return ( 
        <div>
            <h2 className="text-center text-white text-xl lg:text-[40px] font-clash font-semibold">Explore Live Band <span className="text-[#127968]">Professionals</span></h2>
            <div className="flex justify-center">
                <div className="explore-nav bg-[#0E1416] w-full lg:w-2/3 mt-[44px] lg:mt-[38px] py-[9px] lg:py-[20px] px-[19px] lg:px-[30px] rounded-full">
                    <ul className="flex gap-[40px] lg:gap-[30px] justify-between items-center overflow-x-auto">
                        {['All', 'Highlife Bands', 'Juju Bands', 'Fuji Bands', 'Afrobeat / Afrofusion Bands', 'Jazz & Soul Bands'].map((category) => (
                            <li className="text-white w-full text-sm lg:text-xl font-medium font-clash text-center whitespace-nowrap" >{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] w-full px-[55px] lg:px-0 lg:w-[90%] xl:w-4/5 2xl:w-3/4 mt-[44px] lg:mt-[60px] ">
                   {/* Mobile: paginated items */}
                    <div className="block lg:hidden contents">
                        {currentItems.map((musician, index) => (
                            <BandCard key={`${musician.id}-${index}`} musician={musician} />
                        ))}
                    </div>
                    {/* Desktop: all items */}
                    <div className="hidden lg:contents">
                        {musicians.map((musician, index) => (
                            <BandCard key={`${musician.id}-${index}`} musician={musician} />
                        ))}
                    </div>
                </div>
                 {/* Pagination (Mobile Only) */}
                <div className="flex items-center gap-4 mt-6 lg:hidden">
                    {/* Prev */}
                    <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-white p-2 disabled:opacity-30"
                    >
                    <GoChevronLeft/>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 rounded-md font-medium ${
                            page === currentPage
                            ? "bg-green-600 text-white shadow-md"
                            : "text-white"
                        }`}
                        >
                        {page}
                        </button>
                    ))}
                    </div>

                    {/* Next */}
                    <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-white p-2 disabled:opacity-30"
                    >
                    <GoChevronRight/>
                    </button>
                </div>
            </div>
         
        </div>
    );
}
 
export default Explore;