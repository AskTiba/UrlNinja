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
    <main className="">
      {/* Wrapper for the background image with opacity applied */}
      <div className="relative h-fit mt-10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center rounded-[6px]"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#3B3054] opacity-40 rounded-[6px]"></div>
        {/* Content */}
        <div className="flex justify-center gap-4 items-center py-6 relative z-10">
          <form className="" onSubmit={handleSubmit}>
            <input
              id="link-input"
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={handleInputChange}
              className="py-1 px-4 w-[70vw] rounded-[4px]"
            />
          </form>
          <Button className="bg-[cyan] text-[gray] rounded-[4px] px-4 py-1">
            Shorten it
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LinkInput;
