import { Link } from "react-router-dom";
import Quote from "../Quote";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";

// Import Swiper styles
import "swiper/css";
import "swiper/modules/effect-cards.min.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Home() {
  const handleScroll = () => {
    const elem = document.getElementById("quote");

    elem?.scrollIntoView();
  };

  return (
    <>
      <section
        id="hero"
        className="cont !px-0 md:h-[500px] flex lg:grid lg:grid-cols-2 lg:gap-[20px]"
      >
        <div className="my-auto">
          <h1 className="font-extrabold">WebCoders</h1>
          <p className="text-secondary my-[10px]">Full Cycle Digital Agency</p>
          <span>
            Развивайте свой бизнес с уверенностью в завтрашнем дне. Мы
            предлагаем прозрачную, понятную и системную работу опытных
            специалистов с многолетним стажем.
          </span>
          <button onClick={handleScroll} className="btn">
            Get A Quote
          </button>
        </div>
      </section>
      <section id="services" className="cont md:bg-gray-100">
        <h2 className="text-black">SERVICES</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-[20px] *:rounded-[15px] *:bg-white *:drop-shadow-xl *:py-[30px]">
          <li className="p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img src="/icons/web.png" alt="" className="size-[80px]" />
              <h3 className="font-bold text-secondary">Website</h3>
            </div>
            <h4 className="my-[10px]">What we develop:</h4>
            <ul className="flex flex-col gap-[10px] *:flex *:items-start *:gap-[5px] *:text-[20px]">
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
            </ul>
            <Link to="/website" className="btn mt-[15px] w-[100%] text-center">
              See More
            </Link>
          </li>
          <li className="p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img src="/icons/web.png" alt="" className="size-[80px]" />
              <h3 className="font-bold text-secondary">Design</h3>
            </div>
            <h4 className="my-[10px]">What we develop:</h4>
            <ul className="flex flex-col gap-[10px] *:flex *:items-start *:gap-[5px] *:text-[20px]">
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
            </ul>
            <Link to="/design" className="btn mt-[15px] w-[100%] text-center">
              See More
            </Link>
          </li>
          <li className="p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img src="/icons/web.png" alt="" className="size-[80px]" />
              <h3 className="font-bold text-secondary">Media</h3>
            </div>
            <h4 className="my-[10px]">What we develop:</h4>
            <ul className="flex flex-col gap-[10px] *:flex *:items-start *:gap-[5px] *:text-[20px]">
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
            </ul>
            <Link to="/media" className="btn mt-[15px] w-[100%] text-center">
              See More
            </Link>
          </li>
          <li className="p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img src="/icons/web.png" alt="" className="size-[80px]" />
              <h3 className="font-bold text-secondary">SEO</h3>
            </div>
            <h4 className="my-[10px]">What we develop:</h4>
            <ul className="flex flex-col gap-[10px] *:flex *:items-start *:gap-[5px] *:text-[20px]">
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
              <li>
                <img src="/icons/point.png" width={20} alt="" />
                <span>Business Websites</span>
              </li>
            </ul>
            <Link to="/seo" className="btn mt-[15px] w-[100%] text-center">
              See More
            </Link>
          </li>
        </ul>
      </section>
      <div className="flex flex-col-reverse lg:flex-row overflow-hidden lg:gap-[150px] lg:justify-center">
        <section
          id="team"
          className="cont lg:!mx-0 !px-0 text-black drop-shadow-xl flex-none"
        >
          <h2 className="!text-[64px]">OUR TEAM</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            cardsEffect={{
              slideShadows: true,
            }}
            modules={[EffectCards]}
            className="mySwiper mt-[20px] max-w-[200px] md:max-w-[300px] overflow-clip"
          >
            <SwiperSlide className="w-[200px] md:w-[300px] mx-auto bg-white">
              <img
                src="stepan.jpg"
                alt=""
                className="size-[200px] md:size-[300px]"
              />
              <div className="py-[15px] px-[10px]">
                <h3 className="mt-[10px] font-bold">Stepan</h3>
                <span>Designer, 2D/3D Animator</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[200px] md:w-[300px] mx-auto bg-white">
              <img
                src="mykola.jpg"
                alt=""
                className="size-[200px] md:size-[300px]"
              />
              <div className="py-[15px] px-[10px]">
                <h3 className="mt-[10px] font-bold">Mykola</h3>
                <span>Full-Stack, WordPress Developer</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[200px] md:w-[300px] mx-auto bg-white">
              <img
                src="mykita.jpg"
                alt=""
                className="size-[200px] md:size-[300px]"
              />
              <div className="py-[15px] px-[10px]">
                <h3 className="mt-[10px] font-bold">Mykita</h3>
                <span>SEO, Management, Advertisement</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[200px] md:w-[300px] mx-auto bg-white">
              <img
                src="maria.jpg"
                alt=""
                className="size-[200px] md:size-[300px]"
              />
              <div className="py-[15px] px-[10px]">
                <h3 className="mt-[10px] font-bold">Maria</h3>
                <span>Content Creator, Social Media</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="cont lg:!mx-0">
          <h2 className="!text-[64px] mb-[20px]">NUMBERS</h2>
          <CountUp
            start={0}
            end={99}
            delay={0}
            enableScrollSpy
            scrollSpyOnce
            duration={4.2}
            onEnd={() => {
              document.getElementById("counter-clients")!.textContent = `+`;
            }}
          >
            {({ countUpRef }) => (
              <>
                <div className="flex text-8xl">
                  <span ref={countUpRef} />
                  <span id="counter-clients"></span>
                </div>
                <span className="text-[32px]">Satisfied Clients</span>
              </>
            )}
          </CountUp>
          <CountUp
            start={0}
            end={15}
            delay={0}
            enableScrollSpy
            scrollSpyOnce
            duration={4.4}
            onEnd={() => {
              document.getElementById("counter-years")!.textContent = `+`;
            }}
          >
            {({ countUpRef }) => (
              <>
                <div className="flex text-8xl">
                  <span ref={countUpRef} />
                  <span id="counter-years"></span>
                </div>
                <span className="text-[32px]">Years Of Experience</span>
              </>
            )}
          </CountUp>
          <CountUp
            start={0}
            end={50}
            delay={0}
            enableScrollSpy
            scrollSpyOnce
            duration={4.6}
            onEnd={() => {
              document.getElementById("counter-projects")!.textContent = `+`;
            }}
          >
            {({ countUpRef }) => (
              <>
                <div className="flex text-8xl">
                  <span ref={countUpRef} />
                  <span id="counter-projects"></span>
                </div>
                <span className="text-[32px]">Completed Projects</span>
              </>
            )}
          </CountUp>
        </section>
      </div>
      <Quote />
    </>
  );
}
