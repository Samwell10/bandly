import { motion } from "framer-motion";
import signup from "../../assets/signup.png";
import search from "../../assets/search.png";
import find from "../../assets/find.png";

const steps = [
  {
    id: 1,
    title: "Sign up an account",
    desc: "Lorem ipsum det,onsectetueradipiscinlenean mmodo ligulaet olor. Aenean massa. Aeneanl massa. iim ipsum dolor sit ",
    img: signup, 
    position: "right"
  },
  {
    id: 2,
    title: "Search for live bands",
    desc: "Lorem ipsum det,onsectetueradipiscinlenean mmodo ligulaet olor. Aenean massa. Aeneanl massa. iim ipsum dolor sit ",
    img: search, 
    position: "left"
  },
  {
    id: 3,
    title: "Book live band",
    desc: "Lorem ipsum det,onsectetueradipiscinlenean mmodo ligulaet olor. Aenean massa. Aeneanl massa. iim ipsum dolor sit ",
    img: find,
    position: "center"
  },
];

export default function StepsSection() {
  return (
    <div className="relative text-white px-[20px] mt-[54px] grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
          className="relative  bg-[#0E1416] border border-[#137A69] rounded-md flex flex-col"
        >
          {/* Step Header */}
          <div className="py-[24px] 2xl:py-[50px] px-[19px] 2xl:px-[30px] flex justify-between items-start gap-10 mb-4">
            <div>
              <h3 className="text-base 2xl:text-2xl font-clash font-medium">{step.title}</h3>
              <p className="text-xs 2xl:text-xl font-clash text-[#707070] mt-2 2xl:mt-4 leading-[18.35px] 2xl:leading-[29px]">{step.desc}</p>
            </div>
            <span className="text-2xl font-drukwide font-bold text-[#FFFFFF]">
              {step.id}
            </span>
          </div>

          {/* Static White Image */}
          <div className={`flex ${step.position === 'right' ? 'justify-end' : step.position === 'left' ? 'justify-start' : 'justify-center'}`}>
            <motion.img
              src={step.img}
              alt={step.title}
              className={"rounded-xl shadow-lg mt-6 w-[90%] lg:w-[80%]"}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          </div>
          
        </motion.div>
      ))}
    </div>
  );
}
