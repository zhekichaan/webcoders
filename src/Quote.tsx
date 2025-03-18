import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { E164Number } from "libphonenumber-js"; // Import the type

export default function Quote() {
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [business, setBusiness] = useState<string | undefined>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phone);
    console.log(business);
  };

  return (
    <>
      <section
        id="quote"
        className="px-[10px] md:px-0 py-[20px] mx-auto lg:flex lg:justify-center lg:gap-[80px]"
      >
        <div className="relative w-fit md:mx-auto lg:mx-0">
          <img
            src="quote.png"
            alt=""
            className="w-[400px] lg:h-[650px] lg:my-auto"
          />
          <span className="absolute right-[10px] lg:right-[-50px] top-[0px] text-[24px] text-center font-semibold">
            W<br />I<br />L<br />L<br />
            <br /> B<br />E<br /> <br />D<br />O<br />N<br />E<br />
            <br /> I<br />N<br />
            <br /> 1<br />
            <br /> D<br />A<br />Y<br />
            <br />
          </span>
        </div>

        <div className="md:w-[530px] mx-auto my-auto lg:mx-0">
          <div className="mt-[30px] md:mt-[20px] lg:mt-0">
            <span className="text-secondary text-[32px] font-extrabold block">
              GET
            </span>
            <span className="text-[48px] font-extrabold">A QUOTE</span>
          </div>
          <p className="mt-[10px]">
            And discover growth points of your business
          </p>
          <form
            action=""
            className="flex flex-col mt-[20px] mx-auto text-[20px]"
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
        </div>
      </section>
    </>
  );
}
