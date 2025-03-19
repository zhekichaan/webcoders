import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Quote from "../Quote";

export default function Design() {
  return (
    <>
      <section
        id="hero"
        className="container px-[50px] md:h-[500px] flex lg:grid lg:grid-cols-2 lg:gap-[20px]"
      >
        <div className="my-auto">
          <h1 className="font-extrabold">Design</h1>
          <p className="text-secondary my-[10px]">
            Дизайн — самая важная инвестиция, которую вы можете сделать в свой
            бизнес.
          </p>
          <span>
            Разработаем дизайн, фирменный стиль и логотип, готовый для печати на
            вывесках и в документах. Также разрабатываем все составляющие бренда
            по отдельности.
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
      <section id="products" className="container">
        <ul className="flex flex-col gap-[20px]">
          <li className="px-[10px] py-[20px] flex flex-col md:flex-1/1 md:flex-row">
            <div className="flex-initial lg:flex gap-[60px]">
              <div className="md:hidden lg:block flex-none">
                <h2 className="font-bold">LOGO</h2>
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
                <button className="btn hidden lg:block">See More</button>
              </div>

              <div className="my-[20px] lg:my-0">
                <h3 className="font-bold">What's Included:</h3>
                <ul className="mt-[10px] *:flex *:items-start *:gap-[5px] *:not-last:mb-[10px]">
                  <li className="">
                    <img src="/icons/point.png" className="w-[20px]" alt="" />
                    <span>Разработка 2 варианта логотипа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подбор цветовой палитры</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>3 бесплатных правки в рамках брифа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      {" "}
                      Адаптация логотипа (например, горизонтальный,
                      вертикальный, сокращённый и т.д.)
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      Презентация логотипа с описанием концепции и визуализацией
                      на носителях
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подготовка макетов к печати</span>
                  </li>
                </ul>
              </div>
              <div className="flex-none">
                <h3 className="font-bold">Results:</h3>
                <ul className="mt-[10px] flex flex-col gap-[20px]">
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-none lg:hidden">
              <div className="hidden md:block">
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
              </div>

              <button className="btn">See More</button>
            </div>
          </li>
          <li className="px-[10px] py-[20px] flex flex-col md:flex-1/1 md:flex-row">
            <div className="flex-initial lg:flex gap-[60px]">
              <div className="md:hidden lg:block flex-none">
                <h2 className="font-bold">LOGO</h2>
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
                <button className="btn hidden lg:block">See More</button>
              </div>

              <div className="my-[20px] lg:my-0">
                <h3 className="font-bold">What's Included:</h3>
                <ul className="mt-[10px] *:flex *:items-start *:gap-[5px] *:not-last:mb-[10px]">
                  <li className="">
                    <img src="/icons/point.png" className="w-[20px]" alt="" />
                    <span>Разработка 2 варианта логотипа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подбор цветовой палитры</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>3 бесплатных правки в рамках брифа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      {" "}
                      Адаптация логотипа (например, горизонтальный,
                      вертикальный, сокращённый и т.д.)
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      Презентация логотипа с описанием концепции и визуализацией
                      на носителях
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подготовка макетов к печати</span>
                  </li>
                </ul>
              </div>
              <div className="flex-none">
                <h3 className="font-bold">Results:</h3>
                <ul className="mt-[10px] flex flex-col gap-[20px]">
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-none lg:hidden">
              <div className="hidden md:block">
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
              </div>

              <button className="btn">See More</button>
            </div>
          </li>
          <li className="px-[10px] py-[20px] flex flex-col md:flex-1/1 md:flex-row">
            <div className="flex-initial lg:flex gap-[60px]">
              <div className="md:hidden lg:block flex-none">
                <h2 className="font-bold">LOGO</h2>
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
                <button className="btn hidden lg:block">See More</button>
              </div>

              <div className="my-[20px] lg:my-0">
                <h3 className="font-bold">What's Included:</h3>
                <ul className="mt-[10px] *:flex *:items-start *:gap-[5px] *:not-last:mb-[10px]">
                  <li className="">
                    <img src="/icons/point.png" className="w-[20px]" alt="" />
                    <span>Разработка 2 варианта логотипа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подбор цветовой палитры</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>3 бесплатных правки в рамках брифа</span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      {" "}
                      Адаптация логотипа (например, горизонтальный,
                      вертикальный, сокращённый и т.д.)
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>
                      Презентация логотипа с описанием концепции и визуализацией
                      на носителях
                    </span>
                  </li>
                  <li className="">
                    <img src="/icons/point.png" width={20} alt="" />
                    <span>Подготовка макетов к печати</span>
                  </li>
                </ul>
              </div>
              <div className="flex-none">
                <h3 className="font-bold">Results:</h3>
                <ul className="mt-[10px] flex flex-col gap-[20px]">
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                      <img src="/icons/plus.png" alt="" className="m-auto" />
                    </div>
                    <span>Logo for screens (JPEG, PNG)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-none lg:hidden">
              <div className="hidden md:block">
                <h3 className="my-[5px]">$300</h3>
                <span className="text-[20px]">DEADLINE: 1 WEEK</span>
              </div>

              <button className="btn">See More</button>
            </div>
          </li>
        </ul>
      </section>
      <Quote />
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
