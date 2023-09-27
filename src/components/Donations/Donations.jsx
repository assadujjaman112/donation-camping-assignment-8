import { useState } from "react";
import DonationsCard from "./DonationsCard";
import { useLoaderData } from "react-router-dom";

const Donations = () => {
  const items = useLoaderData();
  const [displayDonations, setDisplayDonations] = useState(items);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.name.value;
    const inputValue = input.toLowerCase();
    e.target.name.value = "";
    const filteredItems = items.filter((item) =>
      item.category.toLowerCase().includes(inputValue)
    );
    setDisplayDonations(filteredItems);
  };

  return (
    <div>
      <div
        className="hero h-[75vh] mb-10"
        style={{
          backgroundImage: "url('/public/assets/banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content flex-col text-center text-neutral-content">
          <h1 className="mb-10 text-3xl md:text-5xl font-bold text-black ">
            I Grow By Helping People In Need
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border border-[#DEDEDE] text-black py-2 rounded-l-lg px-10"
              name="name"
              placeholder="Search here...."
              id="input"
            />
            <input
              className="bg-[#FF444A] px-5 py-2 text-white rounded-r-lg"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-11/12 md:w-4/5 mx-auto">
        {displayDonations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
