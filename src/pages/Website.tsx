import Quote from "../Quote";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Website() {
  return (
    <>
      <section
        id="hero"
        className="container px-[50px] md:h-[500px] flex lg:grid lg:grid-cols-2 lg:gap-[20px]"
      >
        <div className="my-auto">
          <h1 className="font-extrabold">Website</h1>
          <p className="text-secondary my-[10px]">
            Самый выгодный маркетинговый инструмент для Вашего бизнеса
          </p>
          <span>
            Создаем качественные и адаптивные сайты с продающим дизайном в
            короткий срок и по приемлемой цене
          </span>
          <button className="btn">Get A Quote</button>
        </div>
        <DotLottieReact
          src="https://lottie.host/47c86cfa-e7d0-47c4-967a-a868a360dd09/TSE2ibky7u.lottie"
          loop
          autoplay
          className="hidden lg:block"
        />
      </section>
      <section className="p-[10px] bg-linear-to-r from-secondary to-gradient">
        <ul className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:grid-cols-4 lg:justify-items-center">
          <li className="p-[10px] bg-bg w-[300px] g-[220px] ">
            <img
              src="/icons/website/web1.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] bg-bg w-[300px] g-[220px] ">
            <img
              src="/icons/website/web2.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] bg-bg w-[300px] g-[220px] ">
            <img
              src="/icons/website/web3.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] bg-bg w-[300px] g-[220px] ">
            <img
              src="/icons/website/web4.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
        </ul>
      </section>
      <section className="container">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] md:gap-x-[50px] mx-auto w-fit">
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className=" btn !mt-[10px] !text-[20px]">
              See More...
            </button>
          </li>
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className="btn !mt-[10px] !text-[20px]">See More...</button>
          </li>
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className="btn !mt-[10px] !text-[20px]">See More...</button>
          </li>
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className="btn !mt-[10px] !text-[20px]">See More...</button>
          </li>
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className="btn !mt-[10px] !text-[20px]">See More...</button>
          </li>
          <li className="w-[300px]">
            <h3 className="border-b pb-[10px]">Landing Page</h3>
            <h3 className="pt-[10px] mb-[5px]">from $500</h3>
            <span>DEADLINE: 10 DAYS</span>
            <button className="btn !mt-[10px] !text-[20px]">See More...</button>
          </li>
        </ul>
      </section>
      <Quote />
      <section id="projects" className="container lg:!px-[20px]">
        <h2>Our Projects</h2>
        <ul className="mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] md:gap-x-[20px] mx-auto w-fit *:w-[300px] *:lg:w-[400px]">
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" className="w-[100%] h-[200px]" />
              <p className="text-secondary mt-[10px] mb-[5px]">
                Site Type / Business Type
              </p>
              <p>Go to Website &gt;</p>
            </a>
          </li>
        </ul>
      </section>
      <section id="faq" className="container">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <ul className="mt-[20px] *:not-last:mb-[20px] *:*:first:text-secondary">
          <li>
            <p>Q: How long does it take to create content?</p>
            <p>
              A: Timelines vary by project, but blog posts usually take 3–5
              business days, videos take 7–10 days, and social media graphics
              are delivered within 5 business days. Custom content strategies
              are created on a monthly basis.
            </p>
          </li>
          <li>
            <p>Q: Can I request revisions?</p>
            <p>
              A: Yes! We offer up to 2 free revisions per project. Additional
              revisions can be requested for a small fee.
            </p>
          </li>
          <li>
            <p>Q: Can you help me with social media management too?</p>
            <p>
              A: Of course! We offer content strategy services that include
              content planning, post ideas, and performance tracking to maximize
              engagement.
            </p>
          </li>
          <li>
            <p>Q: What if I need custom services not listed here?</p>
            <p>
              A: We can create a custom content package tailored to your brand’s
              needs. Just reach out, and let’s discuss how we can bring your
              ideas to life!
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
