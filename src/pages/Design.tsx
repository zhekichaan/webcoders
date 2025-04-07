// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import HeroSection from "../HeroSection";
import Quote from "../Quote";
import FaqSection from "../Faq";

export default function Design() {
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

  return (
    <>
      <HeroSection
        title="Design"
        subtitle="Full Cycle Digital Agency"
        text="Развивайте свой бизнес с уверенностью в завтрашнем дне..."
        imgSrc="/hero/design.png"
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
      <section id="products" className="cont">
        <ul className="flex flex-col gap-[20px]">
          {[
            {
              title: "LOGO BASIC",
              price: "$150",
              deadline: "3 DAYS",
              includes: [
                "1 logo concept with 1 revision",
                "Basic color palette",
                "Simple visual mockup",
                "Delivery in PNG format",
              ],
              results: [
                "PNG files for screens",
                "Preview mockup",
                "Basic usage guidelines",
                "1 round of revision",
              ],
            },
            {
              title: "BRANDING STARTER",
              price: "$400",
              deadline: "1 WEEK",
              includes: [
                "Logo + color scheme",
                "Typography setup",
                "Mini brand guideline (PDF)",
                "Social media avatar & cover",
              ],
              results: [
                "Logo in multiple formats",
                "Mini brand guide",
                "Social media kit",
                "Presentation visuals",
              ],
            },
            {
              title: "WEBSITE UI DESIGN",
              price: "$700",
              deadline: "10 DAYS",
              includes: [
                "Homepage + 3 internal pages (Figma)",
                "Responsive layout mockups",
                "Visual system & color tokens",
                "1 round of revision",
              ],
              results: [
                "Figma file with all screens",
                "Mobile & desktop versions",
                "Design tokens document",
                "Developer-ready layout",
              ],
            },
            {
              title: "FULL BRAND IDENTITY",
              price: "$1200",
              deadline: "2 WEEKS",
              includes: [
                "Logo + style guide",
                "Stationery (business card, letterhead)",
                "Brand patterns & icons",
                "Social & web banners",
              ],
              results: [
                "Comprehensive brandbook",
                "Editable source files (AI, PSD)",
                "Digital + print assets",
                "Visual system reference",
              ],
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-[30px] flex flex-col md:flex-row bg-gray-100 rounded-[15px]"
            >
              <div className="lg:flex gap-[20px] justify-between flex-1">
                <div className="md:hidden lg:block flex-1/3">
                  <h2 className="font-bold !text-[36px]">{item.title}</h2>
                  <h3 className="my-[5px]">{item.price}</h3>
                  <span className="text-[20px]">DEADLINE: {item.deadline}</span>
                  <button
                    onClick={handleScroll}
                    className="btn hidden lg:block mt-[10px]"
                  >
                    See More
                  </button>
                </div>

                <div className="my-[20px] lg:my-0 flex-1/3">
                  <h3 className="font-bold">What's Included:</h3>
                  <ul className="mt-[10px] flex flex-col gap-[10px]">
                    {item.includes.map((point, i) => (
                      <li key={i} className="flex items-center gap-[5px]">
                        <img
                          src="/icons/point.png"
                          className="w-[20px]"
                          alt=""
                        />
                        <span className="text-[24px]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1/4">
                  <h3 className="font-bold">Results:</h3>
                  <ul className="mt-[10px] flex flex-col gap-[20px]">
                    {item.results.map((res, i) => (
                      <li key={i} className="flex items-center gap-[10px]">
                        <div className="size-[30px] bg-secondary text-[24px] text-center flex">
                          <img
                            src="/icons/plus.png"
                            alt=""
                            className="m-auto"
                          />
                        </div>
                        <span className="text-[20px]">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-none lg:hidden">
                <div className="hidden md:block">
                  <h3 className="my-[5px]">{item.price}</h3>
                  <span className="text-[20px]">DEADLINE: {item.deadline}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
      <Quote />
      <FaqSection faqs={faqs} />
    </>
  );
}
