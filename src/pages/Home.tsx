import { Link } from "react-router-dom";
import Quote from "../Quote";

export default function Home() {
  const handleScroll = () => {
    const elem = document.getElementById("quote");

    elem?.scrollIntoView();
  };

  return (
    <>
      <section
        id="hero"
        className="container md:h-[500px] lg:!px-[50px] flex gap-[100px]"
      >
        <div className="my-auto">
          <h1 className="font-extrabold">WebCoders</h1>
          <p className="text-secondary my-[10px]">Full-Cycle Digital Agency</p>
          <p>
            Grow your business with confidence in the future. We offer
            transparent, clear, and structured solutions from experienced
            professionals with years of expertise.
          </p>
          <button onClick={handleScroll} className="btn">
            Get A Quote
          </button>
        </div>
        <img src="home.png" alt="" className="hidden lg:block" />
      </section>
      <section id="services" className="container">
        <h2>SERVICES</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-[20px]">
          <li className="bg-primary p-[15px]">
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
            <Link to="/website" className="btn mt-[15px]">
              See More
            </Link>
          </li>
          <li className="bg-primary p-[15px]">
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
            <Link to="/design" className="btn mt-[15px]">
              See More
            </Link>
          </li>
          <li className="bg-primary p-[15px]">
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
            <Link to="/media" className="btn mt-[15px]">
              See More
            </Link>
          </li>
          <li className="bg-primary p-[15px]">
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
            <Link to="/seo" className="btn mt-[15px]">
              See More
            </Link>
          </li>
        </ul>
      </section>
      <section id="team" className="container">
        <h2>TEAM</h2>
        <ul className="mt-[20px] flex flex-wrap justify-evenly gap-[20px]">
          <li className="w-[300px] lg:w-[250px]">
            <img src="" alt="" className="size-[300px] lg:size-[250px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <p>Position, Position, Position</p>
          </li>
          <li className="w-[300px] lg:w-[250px]">
            <img src="" alt="" className="size-[300px] lg:size-[250px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <p>Position, Position, Position</p>
          </li>
          <li className="w-[300px] lg:w-[250px]">
            <img src="" alt="" className="size-[300px] lg:size-[250px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <p>Position, Position, Position</p>
          </li>
          <li className="w-[300px] lg:w-[250px]">
            <img src="" alt="" className="size-[300px] lg:size-[250px]" />
            <h3 className="mt-[10px] font-bold">Name</h3>
            <p>Position, Position, Position</p>
          </li>
        </ul>
      </section>
      <Quote />
      <section id="values" className="container">
        <h2>VALUES</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-[60px] lg:gap-x-[20px] mt-[50px]">
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] text-white font-black z-100">
              1.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] text-white font-black z-100">
              2.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li className="relative bg-secondary p-[10px]">
            <span className="absolute left-[20px] top-[-60px] text-[96px] text-white font-black z-100">
              3.
            </span>
            <p className="pt-[40px]">
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
