import Mission from "../Mission/Mission";
import Offers from "../Offers/Offers";
import Stories from "../Stories/Stories";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen rounded"
        style={{ backgroundImage: "url(https://i.ibb.co/nnScPRT/2.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex items-center flex-col">
            <h1 className="mb-5 text-8xl font-bold">
              LETS GET YOU <br />{" "}
              <span className="text-red-500 mt-2">ON THE ROAD</span>
            </h1>
            <button className="btn border border-red-400 bg-red-500 text-white mt-2 hover:bg-red-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Mission></Mission>
      <Offers></Offers>
      <Stories></Stories>
    </>
  );
};

export default Home;
