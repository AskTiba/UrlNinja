import { Button } from "../../@/components/ui/button";
import logo from "../assets/images/logo.svg";
// import MenuIcon from "@mui/icons-material/Menu";
import NavMobile from "./Hamburger";

const Header = () => {
  const routes = [
    { title: "Features", href: "/" },
    { title: "Pricing", href: "/about" },
    { title: "Resources", href: "/services" },
  ];
  return (
    <>
      <main className="mt-6 sticky top-6 text-violet-500 text-[15px] mx-auto w-[88%] font-[Poppins] font-[500]">
        <div className="">
          <div className="">
            <div className="flex justify-between items-center">
              <img src={logo} alt="" className="w-[40dvw]" />
              <div className="text-gray-300">
                <NavMobile routes={routes} />
              </div>
            </div>
            <nav className="text-gray-300 font-[500] hidden">
              <ul className="flex gap-5">
                <li className="">Features</li>
                <li className="">Pricing</li>
                <li className="">Resources</li>
              </ul>
            </nav>
          </div>
          <div className="gap-5 hidden">
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
