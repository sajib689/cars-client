import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const {
    _id,
    name,
    description,
    img,
    price,
    fuelType,
    transmission,
    engineSize,
    mileage,
    safetyRating,
    averageWaitingPeriod,
    warranty,
    seatingCapacity,
    size,
    fuelTank,
  } = details;
  return (
    <div>
      <div className="mt-20 card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img className="w-[100%] rounded-lg" src={img} alt="Album" />
        </figure>
        <div className="overflow-x-auto">
          <table className="table border mt-10">
            <tbody>
              <tr className='hover'>
                <td>Price</td>
                <td>{price} Tk</td>
              </tr>
              <tr className='hover'>
                <td>Fuel Type</td>
                <td>{fuelType}</td>
              </tr>
              <tr className='hover'>
                <td>Transmission</td>
                <td>{transmission}</td>
              </tr>
              <tr className='hover'>
                <td>Engine Size</td>
                <td>{engineSize}</td>
              </tr>
              <tr className='hover'>
                <td>Mileage</td>
                <td> {mileage}</td>
              </tr>
              <tr className='hover'>
                <td>Safety Rating</td>
                <td>{safetyRating}</td>
              </tr>
              <tr className='hover'>
                <td>Avg. Waiting Period</td>
                <td>{averageWaitingPeriod}</td>
              </tr>
              <tr className='hover'>
                <td>Warranty</td>
                <td>{warranty}</td>
              </tr>
              <tr className='hover'>
                <td>Seating Capacity</td>
                <td>{seatingCapacity}</td>
              </tr>
              <tr className='hover'>
                <td>Size</td>
                <td>{size}</td>
              </tr>
              <tr className='hover'>
                <td>Fuel Tank</td>
                <td>{fuelTank}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-body w-1/2">
          <h2 className="card-title">{name}</h2>
          <p className="p-2">{description}</p>
          <div className="card-actions justify-start">
            <Link to={`/checkout/${_id}`} className="btn mt-2 bg-red-500 text-white hover:bg-red-700">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
