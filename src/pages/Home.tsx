import { Link } from "react-router-dom";
import Quote from "../Quote";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";

// import required modules
import { EffectCards } from "swiper/modules";

import "../swiper.css";
import HeroSection from "../HeroSection";

export default function Home() {
  const services = [
    {
      title: "Website",
      icon: "/icons/web.png",
      href: "/website",
      features: [
        "Landing Pages",
        "Business Sites",
        "E-commerce Platforms",
        "Custom CMS Solutions",
      ],
    },
    {
      title: "Design",
      icon: "/icons/design.png",
      href: "/design",
      features: [
        "UI/UX Interfaces",
        "Brand Identity Kits",
        "Figma Prototypes",
        "Custom Logo Design",
      ],
    },
    {
      title: "Media",
      icon: "/icons/media.png",
      href: "/media",
      features: [
        "SMM Graphics",
        "Video Editing",
        "Reels & Shorts",
        "Motion Animation",
      ],
    },
    {
      title: "SEO",
      icon: "/icons/seo.png",
      href: "/seo",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Google Ads Setup",
        "Backlink Strategy",
      ],
    },
  ];

  return (
    <>
      <HeroSection
        title="Home"
        subtitle="Full Cycle Digital Agency"
        text="Развивайте свой бизнес с уверенностью в завтрашнем дне..."
        imgSrc="/hero/design.png"
        buttonText="Get A Quote"
        scrollToId="quote"
      />
      <section className="cont p-[10px] bg-gray-100">
        <h2 className="text-[26px] font-bold mb-[20px] text-center">
          SERVICES
        </h2>
        <ul className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:grid-cols-4 lg:justify-items-center">
          {services.map((item, index) => (
            <li
              key={index}
              className="p-[20px] max-w-[300px] min-h-[350px] bg-white rounded-[15px] drop-shadow-sm flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-[70px] mb-[10px] mx-auto"
                />
                <h3 className="text-[22px] font-bold text-secondary text-center">
                  {item.title}
                </h3>
                <p className="text-center font-semibold mt-[10px] mb-[5px]">
                  What we do:
                </p>
                <ul className="text-sm space-y-1">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-secondary">✔</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={item.href} className="btn w-full mt-[15px] text-center">
                See More
              </Link>
            </li>
          ))}
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
