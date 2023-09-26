const DonatedCard = ({ donation }) => {
    const{img,category, title, price,cardBgColor, textColor, categoryBgColor } = donation;
  return (
    <div>
      <div style={{backgroundColor : `${cardBgColor}`}} className="relative flex h-[250px] w-full max-w-[48rem] flex-row rounded-xl bg-clip-border shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={img}
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <p style={{color : `${textColor}`, backgroundColor : `${categoryBgColor}`}} className="mb-4 py-1 w-1/3 text-center rounded-lg block  font-normal text-sm ">
            {category}
          </p>
          <h4 className="mb-2 block font-sans text-2xl font-semibold text-[#0B0B0B]">
            {title}
          </h4>
          <p style={{color : `${textColor}`}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            ${price}
          </p>
          <a className="inline-block" href="#">
            <button
            style={{
                backgroundColor : `${textColor}`
            }}
              className="flex items-center text-white text-lg gap-2 rounded-lg py-3 px-6 text-center font-semibold"
              type="button"
            >
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
