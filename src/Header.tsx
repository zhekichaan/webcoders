import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-bg text-white">
      <div
        id="header-desktop"
        className="hidden lg:flex justify-between w-container mx-auto px-[20px] py-[15px]"
      >
        <div className="flex w-[100%] justify-between items-center">
          <NavLink id="logo" to="/" className="text-[32px] font-extrabold">
            WebCoders
          </NavLink>
          <nav className="flex gap-[30px] mx-auto text-[24px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "inactive" + " hover:scale-[1.05] duration-75 ease-in-out"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "inactive" + " hover:scale-[1.05] duration-75 ease-in-out"
              }
              to="/website"
            >
              Website
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "inactive" + " hover:scale-[1.05] duration-75 ease-in-out"
              }
              to="/design"
            >
              Design
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "inactive" + " hover:scale-[1.05] duration-75 ease-in-out"
              }
              to="/media"
            >
              Media
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary font-bold"
                  : "inactive" + " hover:scale-[1.05] duration-75 ease-in-out"
              }
              to="/seo"
            >
              SEO
            </NavLink>
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
                contact@webcoders.com
              </span>
            </li>
          </ul>
        </div>

        <button className="px-[20pxx] p-[10px] border ml-[30px] !mt-0 whitespace-nowrap hover:bg-secondary hover:border-secondary">
          Contact Us
        </button>
      </div>
      <div
        id="header-mobile"
        className="flex items-center justify-between lg:hidden px-[10px] py-[10px] md:px-[20px] md:py-[15px]"
      >
        <div className="md:flex md:items-center w-[100%]">
          <NavLink
            to="/"
            id="logo"
            className="text-[24px] md:text-[32px] font-extrabold"
          >
            WebCoders
          </NavLink>
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
            <NavLink to="/">Home &gt;</NavLink>
            <NavLink to="/website">Website &gt;</NavLink>
            <NavLink to="/design">Design &gt;</NavLink>
            <NavLink to="/media">Media &gt;</NavLink>
            <NavLink to="/seo">SEO &gt;</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
