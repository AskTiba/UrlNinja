import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import customize from "../assets/images/icon-fully-customizable.svg";

const Cards = () => {
  return (
    <main className="py-20 flex gap-5 justify-between bg- mx-[8%]">
      <div className="">
        <div className="flex relative ml-5 -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={brand} alt="" className="" />
        </div>
        <div className="w-fit h-fit px-5 pb-10 pt-12 bg-[#f7f7fa] shadow rounded-[.5rem]">
          <div className="mt-3">
            <div className="text-lg font-[700]">Brand Recognition</div>
            <div className="text-left mt-2 text-[#a6acb2] text-[15px]">
              Boost your brand recognition with <br /> each click. Generic links
              don’t mean a <br /> thing. Branded links help instil <br />{" "}
              confidence in your content.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex relative ml-5 -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={records} alt="" className="" />
        </div>
        <div className="w-fit h-fit px-5 pb-10 pt-12 bg-[#f7f7fa] shadow rounded-[.5rem]">
          <div className="mt-3">
            <div className="text-lg font-[700]">Detailed Records</div>
            <div className="text-left mt-2 text-[#a6acb2] text-[15px]">
              Gain insights into who is clicking your <br /> links. Knowing when
              and where <br /> people engage with your content <br /> helps
              inform better decisions.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex relative ml-5 -mb-10 w-20 h-20 rounded-full bg-violet-300 justify-center items-center">
          <img src={customize} alt="" className="" />
        </div>
        <div className="w-fit h-fit px-5 pb-10 pt-12 bg-[#f7f7fa]  shadow rounded-[.5rem]">
          <div className="mt-3">
            <div className="text-lg font-[700]">Fully Customizable</div>
            <div className="text-left mt-2 text-[#a6acb2] text-[15px]">
              Improve brand awareness and <br /> content discoverability through{" "}
              <br />
              customizable links, supercharging <br /> audience engagement.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
