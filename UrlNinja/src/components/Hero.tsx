import { Button } from "../../@/components/ui/button";
import working from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <main className="flex mt-10">
      <div className="w-[60%]">
        <div className="text-[64px] font-[700] leading-[1.15]">
          More than just <br /> shorter links
        </div>
        <div className="mt-1">
          Build your brand’s recognition and get detailed <br /> insights on how
          your links are performing.
        </div>
        <Button className="bg-[cyan] text-[gray] rounded-[20px] px-5 py-1 mt-5">
          Get Started
        </Button>
      </div>
      <div className="">
        <img className="ml-[35%] w-full h-full" src={working} alt="" />
      </div>
    </main>
  );
};

export default Hero;
