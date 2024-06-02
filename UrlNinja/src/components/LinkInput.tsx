import { SetStateAction, useState } from "react";
import bgimg from "../assets/images/bg-shorten-desktop.svg";
import { Button } from "../../@/components/ui/button";

const LinkInput = () => {
  const [link, setLink] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Logic to shorten the link goes here
    console.log("Submitted link:", link);
  };

  return (
    <main className="mx-[5%] relative -top-[68px]">
      {/* Wrapper for the background image with opacity applied */}
      <div className="relative h-fit mt-10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center rounded-[6px]"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-violet-300 opacity-80 rounded-[6px]"></div>
        {/* Content */}
        <div className="flex flex-col justify-center gap-4 items-center py-5 px-5 relative z-10">
          <form className="" onSubmit={handleSubmit}>
            <input
              id="link-input"
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={handleInputChange}
              className="py-2 px-6 w-full rounded-[4px] placeholder:text-[#a6acb2]"
            />
          </form>
          <Button className="bg-cyan w-full font-[700] text-white rounded-[4px] py-2">
            Shorten it!
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LinkInput;
