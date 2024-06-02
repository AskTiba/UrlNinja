import { Button } from "../../@/components/ui/button";
import working from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <main className="flex mt-10 mb-28 mx-[8%] flex-col-reverse">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="text-[11vw] text-blue text-center font-[700] leading-[1.15] ">
          More than just <br /> shorter links
        </div>
        <div className="mt-2 flex text-center text-gray-300 leading-7">
          Build your brand’s recognition and <br /> get detailed insights on how
          your <br /> links are performing.
        </div>
        <Button className="bg-cyan text-[#f7f7fa] font-[700] rounded-[20px] px-5 py-2 mt-5">
          Get Started
        </Button>
      </div>
      <div className="">
        <img
          className=""
          src={working}
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
