import { Button } from "../../@/components/ui/button";

const Header = () => {
  return (
    <>
      <main className="mt-6 sticky top-6 text-[very-darkviolet] text-[15px] font-[Poppins] font-[500]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-10 font-[700] text-[24px]">Shortly</div>
            <nav className="">
              <ul className="flex gap-5">
                <li className="">Features</li>
                <li className="">Pricing</li>
                <li className="">Resources</li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-5">
            <Button className="">Login</Button>
            <Button className="bg-[cyan] text-[gray] rounded-[20px] px-5">
              SignUp
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
