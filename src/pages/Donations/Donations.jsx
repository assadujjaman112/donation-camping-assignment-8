import { useEffect, useState } from "react";
import DonatedCard from "../../components/Donated/DonatedCard";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donates"));
    setDonations(donatedItems);

    if (donatedItems) {
      setDonations(donatedItems);
    } else {
      setNoDataFound("No Data Found . . .");
    }
  }, []);
  return (
    <div>
      {noDataFound ? (
        <p className="flex justify-center text-red-400 font-extrabold items-center h-[80vh] text-3xl">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {isShow
              ? donations?.map((donation) => (
                  <DonatedCard
                    key={donation.id}
                    donation={donation}
                  ></DonatedCard>
                ))
              : donations
                  .slice(0, 4)
                  ?.map((donation) => (
                    <DonatedCard
                      key={donation.id}
                      donation={donation}
                    ></DonatedCard>
                  ))}
          </div>
        </div>
      )}
      {donations?.length >= 4 && (
        <div
          className={`flex justify-center my-5 ${isShow && "hidden"} ${
            noDataFound && "hidden"
          }`}
        >
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn bg-[#009444] font-semibold text-white"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donations;
