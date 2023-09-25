const Banner = () => {
  return (
    <div
      className="hero h-[75vh] mb-10"
      style={{
        backgroundImage: "url('/public/assets/banner.jpg')"
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content flex-col text-center text-neutral-content">
        <h1 className="mb-10 text-5xl font-bold text-black ">
          I Grow By Helping People In Need
        </h1>
        <div className="">
          <input
            type="text"
            className="border border-[#DEDEDE] py-2 rounded-l-lg px-10"
            name=""
            id=""
          />
          <button className="bg-[#FF444A] px-5 py-2 text-white rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
