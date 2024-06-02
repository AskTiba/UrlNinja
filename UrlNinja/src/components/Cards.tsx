import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import customize from "../assets/images/icon-fully-customizable.svg";

const Cards = () => {
  return (
    <main className="mt-8 mb-16 flex flex-col justify-between items-center mx-[8%]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex relative -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={brand} alt="" className="" />
        </div>
        <div className="px-5 pb-10 pt-12 bg-white shadow-sm rounded-[.5rem] text-center">
          <div className="mt-3">
            <div className="text-lg font-[700] ">Brand Recognition</div>
            <div className="mt-2 text-gray-300 text-[15px] ">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence in your
              content.
            </div>
          </div>
        </div>
        <div className="flex justify-center border-l-8 border-cyan h-16"></div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex relative -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={records} alt="" className="" />
        </div>
        <div className="px-5 pb-10 pt-12 bg-white shadow-sm rounded-[.5rem] text-center">
          <div className="mt-3">
            <div className="text-lg font-[700]">Detailed Records</div>
            <div className="mt-2 text-gray-300 text-[15px]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
          </div>
        </div>
        <div className="flex justify-center border-l-8 border-cyan h-16"></div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex relative -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={customize} alt="" className="" />
        </div>
        <div className="px-5 pb-10 pt-12 bg-white shadow-sm rounded-[.5rem] text-center">
          <div className="mt-3">
            <div className="text-lg font-[700]">Fully Customizable</div>
            <div className="mt-2 text-gray-300 text-[15px]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
