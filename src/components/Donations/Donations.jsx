
import DonationsCard from "./DonationsCard";

const Donations = ({ donations }) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-11/12 md:w-4/5 mx-auto">
        {donations.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
      
    </div>
  );
};

export default Donations;
