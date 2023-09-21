import img from '../../assets/car-slider/d.webp'
import img1 from '../../assets/car-slider/d1.webp'
const Mission = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex justify-between hero-content flex-col lg:flex-row-reverse">
         <div className='w-1/2'>
         <img
            src={img}
            className="max-w-lg rounded-lg shadow-2xl mb-20"
          />
          <p>Micharlet Auto is a leading brand in car design, manufacturing, and maintenance. With our cutting-edge technology, we give you tomorrow's vehicles, today!</p>
         </div>
          <div className=''>
            <h1 className="mb-10 text-5xl font-bold uppercase text-red-500">micharlet <br /> mission</h1>
            <img className='rounded-lg shadow-2xl w-[500px]' src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
