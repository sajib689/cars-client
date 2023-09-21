
const Stories = () => {
    return (
        <div className="bg-slate-800 p-20 mt-20">
            <h1 className="text-center text-5xl uppercase font-bold text-red-500">CLIENT stories</h1>
            <div className="grid grid-cols-3 mt-10 text-white">
                <div className="p-2">
                    <h1 className="text-red-500 font-bold text-xl mt-2">Matthew Pace</h1>
                    <p className="mt-2">My car badly needed repair so early in the morning and Micharlet Auto came thru at 4:30 am! Talk about excellent customer service! </p>
                </div>
                <div className="p-2">
                    <h1 className="text-red-500 font-bold text-xl mt-2">Casper Zoltan</h1>
                    <p className="mt-2">The brand new models available at the showroom made it hard for me to choose—they were all so good and I wanted them all.  </p>
                </div>
                <div className="p-2">
                    <h1 className="text-red-500 font-bold text-xl mt-2">Tom Gyllenhaal</h1>
                    <p className="mt-2">Micharlet Auto has assisted me from start to finish. They listened to what I needed and suggested models based on my budget. </p>
                </div>
            </div>
        </div>
    );
};

export default Stories;