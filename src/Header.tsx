import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-bg text-white relative">
      {/* Desktop Header */}
      <div
        id="header-desktop"
        className="hidden lg:flex max-w-[1280px] justify-between mx-auto px-[20px] py-[15px]"
      >
        <div className="flex w-[100%] justify-between items-center">
          <NavLink id="logo" to="/" className="text-[32px] font-extrabold">
            WebCoders
          </NavLink>
          <nav className="flex gap-[30px] mx-auto text-[24px] relative">
            <NavLink to="/" className="hover:text-secondary">
              Home
            </NavLink>
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="cursor-pointer transition-all">Services</span>
              <div
                className={`absolute top-full left-0 mt-2 w-[200px] bg-bg p-2 shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(false)}
              >
                <NavLink to="/website" className="hover:text-secondary p-2">
                  Website
                </NavLink>
                <NavLink to="/design" className="hover:text-secondary p-2">
                  Design
                </NavLink>
                <NavLink to="/media" className="hover:text-secondary p-2">
                  Media
                </NavLink>
                <NavLink to="/seo" className="hover:text-secondary p-2">
                  SEO
                </NavLink>
              </div>
            </div>
            <NavLink to="/about" className="hover:text-secondary">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:text-secondary">
              Contact
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
      </div>

      {/* Mobile Header */}
      <div
        id="header-mobile"
        className="flex items-center justify-between lg:hidden px-[10px] py-[10px] md:px-[20px] md:py-[15px]"
      >
        <div className="md:flex md:items-center w-[100%]">
          <NavLink
            to="/"
            id="logo"
            className="text-[24px] md:text-[32px] font-extrabold"
            onClick={() => {
              document.getElementById("dropdown")?.toggleAttribute("hidden");
            }}
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
          className="absolute bg-bg w-[100%] md:h-[500px] top-[60px] md:top-[70px] left-0 z-10"
          hidden
        >
          <nav className="flex flex-col items-end md:items-start content-center my-auto gap-[20px] md:gap-[30px] py-[40px] md:py-[70px] px-[20px] md:px-[50px] text-[40px] font-light">
            <NavLink
              to="/website"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              WEBSITE &gt;
            </NavLink>
            <NavLink
              to="/design"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              DESIGN &gt;
            </NavLink>
            <NavLink
              to="/media"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              MEDIA &gt;
            </NavLink>
            <NavLink
              to="/seo"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              SEO &gt;
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              ABOUT &gt;
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                document.getElementById("dropdown")?.toggleAttribute("hidden");
              }}
            >
              CONTACT &gt;
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
