import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <main className="flex py-16 bg-violet-500">
      <div className="">
        <div className="text-[#f7f7fa] text-[28px] font-[700] px-40 w-1/4">
          Shortly
        </div>
      </div>
      <div className="flex gap-16 text-[14px]">
        <div className="">
          <h3 className="text-[#f7f7fa] mb-5">Features</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3">
            <a className="block">Link Shortening</a>
            <a className="block">Branded Links</a>
            <a className="block">Analytics</a>
          </div>
        </div>
        <div className="">
          <h3 className="text-[#f7f7fa] mb-5">Resources</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3">
            <a className="block"> Blog </a>
            <a className="block"> Developers </a>
            <a className=""> Support </a>
          </div>
        </div>
        <div className="">
          <h3 className="text-[#f7f7fa] mb-5">Company</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3">
            <a className="block"> About </a>
            <a className=""> Our Team </a>
            <a className="block"> Careers </a>
            <a className=""> Contact </a>
          </div>
        </div>
        <div className="flex ml-10 size-5 gap-5">
          <img src={facebook} alt="" className="" />
          <img src={pinterest} alt="" className="" />
          <img src={twitter} alt="" className="" />
          <img src={insta} alt="" className="" />
        </div>
      </div>
    </main>
  );
};

export default Footer;
