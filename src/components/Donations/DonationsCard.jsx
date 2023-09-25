import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, img, title, category, categoryBgColor, cardBgColor, textColor } =
    donation;
  return (
    <Link to={`/donations/${id}`}>
      <div>
        <div
          style={{ backgroundColor: `${cardBgColor}` }}
          className="card  h-[300px] shadow-xl"
        >
          <figure>
            <img src={img} className="h-[180px] w-full" alt="Shoes" />
          </figure>
          <div className="card p-5">
            <p
              style={{
                backgroundColor: `${categoryBgColor}`,
                color: `${textColor}`,
              }}
              className="text-sm mb-2 py-1 w-1/3 text-center rounded-lg"
            >
              {category}
            </p>
            <h2
              style={{ color: `${textColor}` }}
              className="card-title text-lg"
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationsCard;
