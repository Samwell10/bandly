import { FaStar } from "react-icons/fa";
const BandCard= ({ musician })=> {
  return (
    <div className="relative p-[23px] bg-white overflow-hidden">
      <div className="absolute top-1.5 left-0.5 z-10">
        <span className="bg-black bg-opacity-70 text-white px-4 py-2 text-lg lg:text-base font-clash font-medium">
          {musician.category}
        </span>
      </div>
      <div className="relative w-full flex justify-center">
        <img
          src={musician.image}
          alt={musician.name}
          className="h-[224px] lg:h-[200px] xl:h-[260px] w-full rounded-[5px] object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-clash text-[#000000] font-medium text-base 2xl:text-xl mb-1 text-center">
          {musician.name}
        </h3>
        <div className="flex items-center justify-center mb-1">
          <FaStar className="text-[#707070] mr-2" />
          <span className="text-[#000000B2] text-base 2xl:text-xl font-clash font-normal">
            {musician.rating} rating
          </span>
        </div>
        <p className="text-[#000000B2] text-base 2xl:text-xl font-clash font-normal text-center">
          {musician.earnings}
        </p>
      </div>
    </div>
  );
}

export default BandCard;