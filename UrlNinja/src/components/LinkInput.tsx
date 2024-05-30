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
    <main className="mx-[8%]">
      {/* Wrapper for the background image with opacity applied */}
      <div className="relative h-fit mt-10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center rounded-[6px]"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-violet-300 opacity-80 rounded-[6px]"></div>
        {/* Content */}
        <div className="flex justify-center gap-5 items-center py-10 relative z-10">
          <form className="" onSubmit={handleSubmit}>
            <input
              id="link-input"
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={handleInputChange}
              className="py-3 px-5 w-[64vw] rounded-[10px] ml-6 placeholder:text-[#a6acb2]"
            />
          </form>
          <Button className="bg-cyan font-[700] text-white rounded-[4px] mr-6 py-3 px-10">
            Shorten it
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LinkInput;
