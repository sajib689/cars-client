import img from '../../assets/car-slider/qa.webp'
const Offers = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h1 className='text-6xl uppercase font-bold text-red-500'>current offers</h1>
                <div className='grid grid-cols-2 mt-20 ps-5'>
                    <div className='mb-10'>
                        <h1 className='text-2xl text-red-500 font-bold'>1</h1>
                        <h2 className='text-red-500 text-2xl font-bold'>Brand New Models</h2>
                        <p>Browse and buy the brand's <br /> best available models</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-red-500 font-bold'>2</h1>
                        <h2 className='text-red-500 text-2xl font-bold'>Full Service</h2>
                        <p>Car repair and maintenance <br /> available 24/7</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-red-500 font-bold'>3</h1>
                        <h2 className='text-red-500 text-2xl font-bold'>Pre-owned Vehicles</h2>
                        <p>Certified pre-owned Micharlet cars <br /> for every budget</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-red-500 font-bold'>4</h1>
                        <h2 className='text-red-500 text-2xl font-bold'>Custom Details</h2>
                        <p>Elevate your ride with <br /> custom-made upgrades</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[500px] rounded-lg' src={img} alt="" />
            </div>
        </div>
    );
};

export default Offers;