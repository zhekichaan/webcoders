import { Link } from "react-router-dom";
import Quote from "../Quote";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1281 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1280, min: 769 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 320 },
      items: 1,
    },
  };

  const handleScroll = () => {
    const elem = document.getElementById("quote");

    elem?.scrollIntoView();
  };

  return (
    <>
      <section
        id="hero"
        className="cont px-[50px] md:h-[500px] flex lg:grid lg:grid-cols-2 lg:gap-[20px]"
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
        <DotLottieReact
          src="https://lottie.host/47c86cfa-e7d0-47c4-967a-a868a360dd09/TSE2ibky7u.lottie"
          loop
          autoplay
          className="hidden lg:block"
        />
      </section>
      <section id="services" className="cont bg-gray-100">
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
      <section id="team" className="cont text-black bg-gray-100 drop-shadow-xl">
        <h2>TEAM</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          shouldResetAutoplay
          showDots={false}
          swipeable
        >
          <li className="w-[200px] mx-auto">
            <img src="" alt="" className="size-[200px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <span>Position, Position, Position</span>
          </li>
          <li className="w-[200px] mx-auto">
            <img src="" alt="" className="size-[200px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <span>Position, Position, Position</span>
          </li>
          <li className="w-[200px] mx-auto">
            <img src="" alt="" className="size-[200px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <span>Position, Position, Position</span>
          </li>
          <li className="w-[200px] mx-auto">
            <img src="" alt="" className="size-[200px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <span>Position, Position, Position</span>
          </li>
        </Carousel>
      </section>
      <Quote />
      {/* <section id="values" className="cont">
        <h2 className="text-black">VALUES</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-[60px] lg:gap-x-[20px] mt-[20px] bg-gray-100 text-black pt-[60px] pb-[30px] px-[30px] rounded-[15px]">
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] font-black z-100">
              1.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] font-black z-100">
              2.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] font-black z-100">
              3.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
        </ul>
      </section> */}
    </>
  );
}
