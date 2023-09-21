import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    const {_id, name, description, img, price} = car
  return (
    <div>
      <div className=" mb-5 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0,100)}...</p>
          <h2 className="text-xl font-[600]">Price: {price} Tk</h2>
          <div className="card-actions justify-start">
            <Link to={`/details/${_id}`} className="btn bg-red-500 text-white hover:bg-red-700">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
