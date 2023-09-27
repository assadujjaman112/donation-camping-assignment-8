import swal from "sweetalert";

const DonationCard = ({ donation }) => {
  const { id, img, price, title, description, textColor } = donation;

  const handleDonation = () => {
    const addedDonates = [];

    const donatedItems = JSON.parse(localStorage.getItem("donates"));
    if (!donatedItems) {
      addedDonates.push(donation);
      localStorage.setItem("donates", JSON.stringify(addedDonates));
      swal("Thank You!", "Successfully donated!", "success");
    } else {
      const isExist = donatedItems?.find((item) => item.id === id);
      if (!isExist) {
        addedDonates.push(...donatedItems, donation);
        localStorage.setItem("donates", JSON.stringify(addedDonates));
        swal("Thank You!", "Successfully donated!", "success");
      }
      else{
        swal("error!", "You have already donated!", "error");
      }
    }
  };
  return (
    <div className="">
      <div className=" relative rounded-lg shadow-xl image-full">
        <div className="">
          <img src={img} className="w-full h-[600px] rounded-lg" alt="Shoes" />
        </div>

        <div className="card-actions absolute bottom-0 left-0 bg-blend-overlay bg-[#0B0B0B80] opacity-90 w-full  justify-start">
          <button
            onClick={handleDonation}
            style={{ backgroundColor: `${textColor}` }}
            className="btn border border-none text-white m-10 "
          >
            Donate $ {price}
          </button>
        </div>
      </div>
      <h2 className="card-title text-4xl font-semibold  pl-5 my-5">{title}</h2>
      <p className="w-4/5 pl-5">{description}</p>
    </div>
  );
};

export default DonationCard;
