import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { E164Number } from "libphonenumber-js"; // Import the type

export default function Footer() {
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [business, setBusiness] = useState<string | undefined>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phone);
    console.log(business);
  };

  return (
    <footer className="px-[10px] md:px-0 py-[20px] md:pb-[50px] lg:py-[20px] lg:flex lg:items-center bg-primary">
      <div className="mx-auto w-fit">
        <span className="text-[48px] md:text-[96px] font-extrabold">
          WebCoders
        </span>
        <div className="md:mx-auto md:w-fit md:flex md:mb-[30px] md:mt-[15px] items-center gap-[50px]">
          <ul
            id="contacts"
            className="mx-auto w-fit mt-[5px] md:m-0 text-[20px] md:text-[24px]"
          >
            <li id="contact-phone" className="flex gap-[5px] items-center">
              <img className="size-[25px]" src="/icons/phone.png" alt="" />
              <span>(123) 123-4651</span>
            </li>
            <li id="contact-email" className="flex gap-[5px] items-center">
              <img className="size-[25px]" src="/icons/email.png" alt="" />
              <span>example@gmail.com</span>
            </li>
          </ul>
          <ul
            id="socials"
            className="flex gap-[20px] mx-auto my-[15px] md:m-0 w-fit"
          >
            <li>
              <a href="">
                <img
                  src="/icons/socials/insta.png"
                  className="size-[60px]"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/icons/socials/facebook.png"
                  className="size-[60px]"
                  alt="facebook icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/icons/socials/telegram.png"
                  className="size-[60px]"
                  alt="telegram icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col w-[300px] md:w-[530px] mx-auto text-[20px]"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:gap-[30px]">
          <div className="flex flex-col gap-[5px] mb-[10px]">
            <label htmlFor="phone">Your phone number: *</label>
            <PhoneInput
              required
              id="phone"
              className="md:w-[250px] p-[15px] bg-white text-black placeholder:text-black"
              type="text"
              placeholder="(___) ___-____"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              value={phone}
              defaultCountry="CA"
              onChange={setPhone}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="business">Business type: *</label>
            <input
              required
              id="business"
              className=" md:w-[250px] p-[15px] bg-white text-black placeholder:text-black"
              type="text"
              placeholder="Painting Services"
              minLength={3}
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          <div className="flex gap-[5px] mx-auto w-fit items-center">
            <span>Get A Quote</span>
            <img src="/icons/form.png" className="size-[30px]" alt="" />
          </div>
        </button>
      </form>
    </footer>
  );
}
