import { title } from "motion/react-client";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DUMMY_URL = "https://jsonplaceholder.typicode.com/users";

const testimonial = [
  {
    id: 1,
    name: "John Doe",
    title:"Dolore eu fugiat nulla pariatur. Lorem ips dolor sit amet, consectetur adipiscing",
    text: "exercitation ullamco laboris nisi ut aliquip eea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
  },
  {
    id: 2,
    name: "John Doe",
    title:"Dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l",
    text: "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    name: "John Doe",
    title:"Dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l",
    text: "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit.",
  },
]

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(DUMMY_URL);
      const data = await res.json();
      const formatted = data.slice(0, 6).map((user, i) => ({
        id: i,
        name: user.name,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      }));
      setReviews(formatted);
    };
    fetchData();
  }, []);

  // Scroll Left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
        <h2 className="font-clash text-white text-center md:text-left text-xl xl:text-4xl font-semibold mb-8">
          Testimonials Stories Of Those Who <br /> Have Partnered With Bandly
        </h2>

        {/* Arrow Navigation */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <FiChevronLeft size={22} className="text-white"/>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#127968] hover:bg-emerald-500"
          >
            <FiChevronRight size={22}  className="text-white"/>
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {testimonial.map((review, idx) => (
          <div
            key={review.id}
            className={`w-[299px] xl:w-[898px] snap-center shrink-0 rounded-lg p-6 xl:p-10 ${
              idx % 2 === 0
                ? "bg-[#127968] text-white"
                : "bg-[#0E1416] text-gray-300 border border-[#127968]"
            }`}
          >
             <p className="font-clash font-medium text-sm xl:text-2xl mb-[15px]">
                {review.title}
              </p>
            <p className="font-clash font-medium text-[#FFFFFFB2] text-sm xl:text-xl leading-[27px] xl:leading-[36px] mb-4">
              {review.text}
            </p>
            <div className="flex items-center justify-center xl:justify-start gap-2 mt-[46px] xl:mt-[74px]">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-clash font-bold">{review.name[0]}</span>
              </div>
              <span className="font-clash font-medium text-sm xl:text-xl">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
