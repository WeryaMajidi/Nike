import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, rating, price }) {
  return (
    <div className="group flex flex-col flex-1 w-full max-sm:w-full cursor-pointer hover:translate-y-[-7px] transition-all duration-300">
      <img
        className="w-[280px] h-[280px] group-hover:grayscale-[80%] transition-all duration-300 "
        src={imgURL}
        alt={name}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating icon" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red  leading-normal text-lg">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
