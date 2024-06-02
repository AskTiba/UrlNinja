//./src/components/NavMobile.js

import { useState } from "react";
import Hamburger from "hamburger-react";
import { Button } from "../../@/components/ui/button";

type Route = {
  title: string;
  href: string;
};

interface NavMobileProps {
  routes: Route[];
}

const NavMobile: React.FC<NavMobileProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl z-auto right-0 top-[5.5rem] w-[88%] mx-auto rounded-lg p-5 pt-0 border-b bg-violet-950 border-b-white/20">
          <ul className="grid gap-1 text-white place-content-center font-[700]">
            {routes.map((route) => (
              <li key={route.title}>
                <a
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full p-5 rounded-xl "
                  href={route.href}
                >
                  <span>{route.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <hr className="my-5" />
          <div className="grid gap-5 text-white text-[4dvw] font-[700]">
            <Button className="">Login</Button>
            <Button className="bg-cyan rounded-[30px] py-3 ">Sign Up</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
