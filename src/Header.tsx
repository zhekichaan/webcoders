import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#313131]">
      <div
        id="header-desktop"
        className="hidden lg:flex justify-between w-container mx-auto px-[20px] py-[15px]"
      >
        <div className="flex w-[100%] justify-between items-center">
          <Link id="logo" to="/" className="text-[32px] font-extrabold">
            WebCoders
          </Link>
          <nav className="flex gap-[30px] mx-auto text-[24px]">
            <Link to="/">Home</Link>
            <Link to="/website">Website</Link>
            <Link to="/design">Design</Link>
            <Link to="/media">Media</Link>
            <Link to="/seo">SEO</Link>
          </nav>
          <ul id="contacts" className="mt-[5px]">
            <li id="contact-phone" className="flex gap-[5px] items-center">
              <img
                className="w-[20px] h-[20px]"
                src="/icons/phone.png"
                alt=""
              />
              <span className="text-[14px] md:text-[16px]">(123) 123-4651</span>
            </li>
            <li id="contact-email" className="flex gap-[5px] items-center">
              <img
                className="w-[20px] h-[20px]"
                src="/icons/email.png"
                alt=""
              />
              <span className="text-[14px] md:text-[16px]">
                example@gmail.com
              </span>
            </li>
          </ul>
        </div>

        <button className="btn ml-[30px] !mt-0 whitespace-nowrap">
          Contact Us
        </button>
      </div>
      <div
        id="header-mobile"
        className="flex items-center justify-between lg:hidden px-[10px] py-[10px] md:px-[20px] md:py-[15px]"
      >
        <div className="md:flex md:items-center w-[100%]">
          <Link
            to="/"
            id="logo"
            className="text-[24px] md:text-[32px] font-extrabold"
          >
            WebCoders
          </Link>
        </div>

        <img
          id="menu"
          src="/icons/menu.png"
          className="size-[40px]"
          alt=""
          onClick={() => {
            document.getElementById("dropdown")?.toggleAttribute("hidden");
          }}
        />

        <div
          id="dropdown"
          className="absolute bg-[#313131] w-[100%] h-[400px] md:h-[500px] top-[60px] md:top-[70px] left-0"
          hidden
          onClick={() => {
            document.getElementById("dropdown")?.toggleAttribute("hidden");
          }}
        >
          <nav className="flex flex-col items-end md:items-start content-center my-auto gap-[20px] md:gap-[30px] py-[40px] md:py-[70px] px-[20px] md:px-[50px] text-[40px] font-light">
            <Link to="/">Home &gt;</Link>
            <Link to="/website">Website &gt;</Link>
            <Link to="/design">Design &gt;</Link>
            <Link to="/media">Media &gt;</Link>
            <Link to="/seo">SEO &gt;</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
