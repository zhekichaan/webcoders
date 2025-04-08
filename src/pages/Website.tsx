import { useState } from "react";
import HeroSection from "../HeroSection";
import Quote from "../Quote";
import FaqSection from "../Faq";
import { motion } from "framer-motion";

export default function Website() {
  const handleScroll = () => {
    const elem = document.getElementById("quote");

    elem?.scrollIntoView();
  };

  const faqs = [
    {
      question: "What services does WebCoders provide?",
      answer:
        "We specialize in website development, UI/UX design, SEO optimization, and digital media solutions tailored to your business needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies based on complexity. A simple landing page takes about a week, while custom e-commerce solutions can take 4-6 weeks.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes! We provide ongoing maintenance, updates, and security enhancements to ensure your website stays up to date and secure.",
    },
    {
      question: "Can you improve my website's SEO ranking?",
      answer:
        "Absolutely! We use advanced SEO techniques to enhance visibility, optimize content, and improve search rankings for your business.",
    },
  ];

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

      <section className="p-[20px] bg-gradient-to-r from-secondary to-gradient">
        <ul className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:grid-cols-4 lg:justify-items-center">
          {[
            {
              icon: "/icons/website/web1.png",
              text: "Your site adapts to any screen — mobile, tablet, or desktop — for a flawless user experience everywhere.",
            },
            {
              icon: "/icons/website/web2.png",
              text: "We don’t use templates. Each site is tailored to your business goals and organized for clarity and results.",
            },
            {
              icon: "/icons/website/web3.png",
              text: "Speed matters. Our code is clean and optimized so your website loads in a blink — even on mobile networks.",
            },
            {
              icon: "/icons/website/web4.png",
              text: "Built-in SEO tools and structure to help your site rank higher and get noticed by search engines.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0.5, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-[20px] w-full max-w-[300px] bg-white rounded-[15px] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-bg p-[15px] rounded-full mb-[15px]">
                <img
                  src={item.icon}
                  alt="Feature Icon"
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
              <p className="text-gray-800 text-[16px] md:text-[18px]">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="cont bg-gray-100 drop-shadow-xl">
        <div className="tab-wrapper flex-col md:flex-row">
          <div
            className="tab-bg md:hidden"
            style={{
              transform:
                activeTab === "WordPress"
                  ? "translateY(0%)"
                  : activeTab === "Custom"
                  ? "translateY(100%)"
                  : "translateY(201%)",
              height: "33.3333%",
            }}
          />
          <div
            className="tab-bg hidden md:block "
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
      <section className="cont py-[50px] bg-gray-100">
        <h2 className="text-[36px] font-bold text-center mb-[40px]">
          Our Web Development Process
        </h2>
        <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "1. Consultation",
              icon: "/icons/process/chat.png",
              text: "We discuss your business goals, needs, and ideas to build the perfect plan.",
            },
            {
              title: "2. Design",
              icon: "/icons/process/design.png",
              text: "We create a layout and visuals in Figma tailored to your brand style.",
            },
            {
              title: "3. Development",
              icon: "/icons/process/code.png",
              text: "We bring the design to life using clean, optimized HTML/CSS/JS code.",
            },
            {
              title: "4. Optimization",
              icon: "/icons/process/seo.png",
              text: "Your site is optimized for performance, SEO, and mobile responsiveness.",
            },
            {
              title: "5. Review & Launch",
              icon: "/icons/process/launch.png",
              text: "After revisions and final tweaks, your website goes live — stress-free!",
            },
            {
              title: "6. Ongoing Support",
              icon: "/icons/process/support.png",
              text: "We offer continuous maintenance, updates, and improvements if needed.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-[20px] rounded-[15px] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[60px] h-[60px] mb-[15px]"
              />
              <h3 className="text-[20px] font-bold text-secondary mb-[10px]">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <FaqSection faqs={faqs} />
    </>
  );
}
