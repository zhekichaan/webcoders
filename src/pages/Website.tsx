import { useState } from "react";
import HeroSection from "../HeroSection";
import Quote from "../Quote";

export default function Website() {
  const handleScroll = () => {
    const elem = document.getElementById("quote");

    elem?.scrollIntoView();
  };

  const websitePackages = [
    {
      type: "WordPress",
      title: "Landing Page",
      price: "$99",
      desc: "Simple and effective online presence for your brand.",
      features: [
        "1 Page Website",
        "3 Stock Photos",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration - $99",
      ],
    },
    {
      type: "WordPress",
      title: "5 Page Website",
      price: "$249",
      desc: "Multi-page site to showcase your services and info.",
      features: [
        "Pages: Home / About / Service / Contact / Portfolio",
        "5 Stock Photos",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration - $99",
      ],
    },
    {
      type: "WordPress",
      title: "Professional Website",
      price: "$449",
      desc: "Advanced business site with booking & payment tools.",
      features: [
        "8 Pages",
        "10 Stock Photos",
        "Appointment / Online Payment Integration",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration included",
      ],
    },
    {
      type: "WordPress",
      title: "E-Commerce Website",
      price: "From $799",
      desc: "Sell your products online with ease.",
      features: [
        "10+ Pages",
        "20+ Stock Photos",
        "Appointment / Online Payment Integration",
        "Product Cards",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration included",
      ],
    },
    {
      type: "Custom",
      title: "Landing Page",
      price: "$499",
      desc: "Built-from-scratch landing page with clean code.",
      features: [
        "5 Stock Photos",
        "Figma Design Template",
        "HTML/CSS/JS Development",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
      ],
    },
    {
      type: "Custom",
      title: "5 Page Website",
      price: "$999",
      desc: "Tailored design and code for your business needs.",
      features: [
        "Pages: Home / About / Service / Contact / Portfolio",
        "Figma Design Template",
        "HTML/CSS/JS Development",
        "5 Stock Photos",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration - $99",
      ],
    },
    {
      type: "Custom",
      title: "Professional Website",
      price: "$1599",
      desc: "Custom-built platform with full feature set.",
      features: [
        "8 Pages",
        "Figma Design Template",
        "HTML/CSS/JS Development",
        "Appointment / Online Payment Integration",
        "10 Stock Photos",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration included",
      ],
    },
    {
      type: "Custom",
      title: "E-Commerce Website",
      price: "From $1999",
      desc: "Fully coded online store tailored to your brand.",
      features: [
        "Custom Ideas",
        "10+ Pages",
        "Figma Design Template",
        "HTML/CSS/JS Development",
        "Appointment / Online Payment Integration",
        "Unlimited Stock Photos",
        "Mobile Friendly",
        "100% Unique",
        "SEO Optimized",
        "Domain + Hosting (Not included)",
        "CMS Integration included",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("WordPress");

  const filteredPackages =
    activeTab === "All"
      ? websitePackages
      : websitePackages.filter((pkg) => pkg.type === activeTab);

  return (
    <>
      <HeroSection
        title="Website"
        subtitle="The most effective marketing tool for your business"
        text="We build high-quality, responsive websites with a selling design — fast and affordable."
        imgSrc="/hero/web.png"
        buttonText="Get A Quote"
        scrollToId="quote"
      />

      <section className="p-[10px] bg-linear-to-r from-secondary to-gradient">
        <ul className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:grid-cols-4 lg:justify-items-center *:bg-white">
          <li className="p-[10px] max-w-[300px] g-[220px] ">
            <img
              src="/icons/web.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] max-w-[300px] g-[220px] ">
            <img
              src="/icons/web.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] max-w-[300px] g-[220px] ">
            <img
              src="/icons/web.png"
              alt=""
              className="size-[70px] mb-[10px]"
            />
            <p className="!text-[20px]">
              Используем современные технологии создания дизайна. Оформление и
              структуризация сайта под вашу нишу
            </p>
          </li>
          <li className="p-[10px] max-w-[300px] g-[220px] ">
            <img
              src="/icons/web.png"
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
      <section className="cont bg-gray-100 drop-shadow-xl">
        <div className="tab-wrapper">
          <div
            className="tab-bg"
            style={{
              transform:
                activeTab === "WordPress"
                  ? "translateX(0%)"
                  : activeTab === "Custom"
                  ? "translateX(100%)"
                  : "translateX(201%)",
              width: "33.3333%",
            }}
          />
          <button
            onClick={() => setActiveTab("WordPress")}
            className={activeTab === "WordPress" ? "tab-btn active" : "tab-btn"}
          >
            WordPress
          </button>
          <button
            onClick={() => setActiveTab("Custom")}
            className={activeTab === "Custom" ? "tab-btn active" : "tab-btn"}
          >
            Custom
          </button>
          <button
            onClick={() => setActiveTab("All")}
            className={activeTab === "All" ? "tab-btn active" : "tab-btn"}
          >
            All
          </button>
        </div>

        <ul className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-[20px] mx-auto w-fit">
          {filteredPackages.map((pkg, index) => (
            <li
              key={index}
              className="min-h-[unset] md:min-h-[500px] w-[100%] max-w-[300px] bg-white p-[20px] rounded-[10px] flex flex-col card"
            >
              <h3 className="border-b pb-[10px] font-bold text-[20px]">
                <span className="package-type">{pkg.type}</span>
                {pkg.title}
              </h3>
              <h4 className="pt-[10px] mb-[5px] text-[18px]">{pkg.price}</h4>
              {pkg.desc && (
                <p className="desc-overwrite mb-[10px]">{pkg.desc}</p>
              )}
              <ul className="text-sm list-disc list-inside space-y-1 mb-auto">
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                onClick={handleScroll}
                className="btn !mt-[15px] !text-[16px] w-full"
              >
                See More
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Quote />
      {/* <section
        id="projects"
        className="cont lg:!px-[20px] bg-gray-100 drop-shadow-xl"
      >
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
      </section> */}
      <section id="faq" className="cont">
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
