import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find(
      (donation) => donation.id === parseInt(id)
    );

    setDonation(findDonation);
  }, [id, donations]);

  return (
    <div className="w-4/5 mx-auto mt-10 mb-20">
      <DonationCard donation={donation}></DonationCard>
    </div>
  );
};

export default Donation;
