import CarCard from "../CarCard/CarCard";
import { useEffect, useState } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // useEffect(() => {
  //   fetch('http://localhost:3000/cars')
  //   .then(res => res.json())
  //   .then(data => setCars(data))
  // },[])
  useEffect(() => {
    fetch("http://localhost:3000/totalCars")
      .then((res) => res.json())
      .then((data) => setTotalCars(data.totalCars));
  }, []);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalCars / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    // Fetch data for the current page when currentPage changes
    fetch(
      `http://localhost:3000/cars?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error("API Error:", error));
  }, [currentPage]);
  return (
    <>
      <div className=" bg-base-200">
        {/* <h1 className="text-center text-5xl"> Cars</h1> */}
        <div className="p-2 grid grid-cols-3 mt-20 rounded-lg">
          {cars.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))}
        </div>
      </div>
      <div className="join flex items-center justify-center">
        {pageNumbers.map((number) => (
          <button
            className="join-item btn bg-orange-200"
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Cars;
