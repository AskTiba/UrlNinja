import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <main className="flex flex-col justify-center items-center py-5 bg-violet-300">
      <div className="mb-3">
        <div className="text-[#f7f7fa] text-[10vw] py-5 font-[700]">
          Shortly
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 text-[4.5vw]">
        <div className="flex flex-col items-center">
          <h3 className="text-[#f7f7fa] font-[700] mb-5 text-[5vw]">Features</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3 items-center text-[4vw]">
            <a className="block">Link Shortening</a>
            <a className="block">Branded Links</a>
            <a className="block">Analytics</a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-[#f7f7fa] font-[700] mb-5 text-[5vw]">Resources</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3 items-center text-[4vw]">
            <a className="block"> Blog </a>
            <a className="block"> Developers </a>
            <a className=""> Support </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-[#f7f7fa] font-[700] mb-5 text-[5vw]">Company</h3>
          <div className="text-[#a6acb2] flex flex-col gap-3 items-center text-[4vw]">
            <a className="block"> About </a>
            <a className=""> Our Team </a>
            <a className="block"> Careers </a>
            <a className=""> Contact </a>
          </div>
        </div>
        <div className="flex justify-center mb-8 gap-5">
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
