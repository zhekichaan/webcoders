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
        className="container relative px-[10px] md:px-0 py-[60px] !my-[80px] md:!my-[40px] mx-auto lg:flex lg:items-center lg:justify-center lg:gap-[120px]"
      >
        <div className="relative w-fit mx-auto lg:mx-0">
          <img
            src="quote.png"
            alt=""
            className="w-[230px] lg:w-[300px] lg:my-auto"
          />
          <span className="!hidden lg:absolute right-[10px] lg:right-[-70px] top-[0px] text-[20px] text-center font-semibold text-black">
            W<br />I<br />L<br />L<br />
            <br /> B<br />E<br /> <br />D<br />O<br />N<br />E<br />
            <br /> I<br />N<br />
            <br /> 1<br />
            <br /> D<br />A<br />Y<br />
          </span>
        </div>

        <div className="absolute lg:static -translate-x-1/2 -translate-y-1/2 lg:translate-0 top-[50%] left-[50%]  md:w-[590px] mx-auto my-auto lg:mx-0 bg-[rgba(255,255,255,0.6)] bg-tra md:px-[30px] md:py-[30px] lg:py-[60px] md:rounded-[15px] md:drop-shadow-xl">
          <div className="mt-[30px] md:mt-0 lg:mt-0">
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
                  className="md:w-[250px] p-[15px] bg-white text-black placeholder:text-gray-600 border border-black md:border-none rounded-[5px]"
                  type="phone"
                  placeholder="+1 (___) ___-____"
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
                  className=" md:w-[250px] p-[15px] bg-white text-black placeholder:text-gray-600 border border-black md:border-none rounded-[5px]"
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
