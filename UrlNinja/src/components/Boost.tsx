import bgimg from "../assets/images/bg-shorten-desktop.svg";
import { Button } from "../../@/components/ui/button";

const Boost = () => {
  return (
    <main className="">
      {/* Wrapper for the background image with opacity applied */}
      <div className="relative h-fit">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-violet-300 opacity-80"></div>
        {/* Content */}
        <div className="flex flex-col justify-center items-center relative py-20">
          <div className="text-white font-[700] text-[7.2vw] my-5">
            Boost your links today
          </div>
          <Button className="bg-cyan text-[#f7f7fa] text-[17px] font-[700] rounded-[25px] px-8 py-2 mb-5">
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Boost;
