import { Button } from "../../@/components/ui/button";
import logo from "../assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
      <main className="mt-6 sticky top-6 text-violet-500 text-[15px] mx-[8%] font-[Poppins] font-[500]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="flex">
              <img src={logo} alt="" className="mobile:w-[40dvw]" />
              <button className="hidden mobile:block ml-32 -mt-3">
                <MenuIcon fontSize="large" htmlColor="gray" />
              </button>
            </div>
            <nav className="text-gray-300 font-[500] mobile:hidden">
              <ul className="flex gap-5">
                <li className="">Features</li>
                <li className="">Pricing</li>
                <li className="">Resources</li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-5 mobile:hidden">
            <Button className="text-blue">Login</Button>
            <Button className="bg-cyan font-[700] text-[#f7f7fa] rounded-[20px] px-5">
              Sign Up
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
