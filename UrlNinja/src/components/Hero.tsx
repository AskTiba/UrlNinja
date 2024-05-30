import { Button } from "../../@/components/ui/button";
import working from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <main className="flex mt-10 mx-[8%] mobile:flex-col-reverse">
      <div className="w-[60%]">
        <div className="text-[64px] text-blue font-[700] leading-[1.15] ">
          More than just <br /> shorter links
        </div>
        <div className="mt-1 text-gray-300 leading-7">
          Build your brand’s recognition and get detailed <br /> insights on how
          your links are performing.
        </div>
        <Button className="bg-cyan text-[#f7f7fa] font-[700] rounded-[28px] px-8 py-3 mt-5">
          Get Started
        </Button>
      </div>
      <div className="mobile:w-full ">
        <img className="ml-[35%] mobile:ml-0 w-[400%] h-full" src={working} alt="" />
      </div>
    </main>
  );
};

export default Hero;
