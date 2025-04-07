import { Link } from "react-router-dom";
import Quote from "../Quote";
import CountUp from "react-countup";

import HeroSection from "../HeroSection";
import { motion } from "framer-motion";
import FaqSection from "../Faq";

export default function Home() {
  const stats = [
    {
      icon: "/icons/stats/client.png",
      number: 99,
      text: "Satisfied Clients",
      id: "counter-clients",
    },
    {
      icon: "/icons/stats/time.png",
      number: 15,
      text: "Years Of Experience",
      id: "counter-years",
    },
    {
      icon: "/icons/stats/project.png",
      number: 50,
      text: "Completed Projects",
      id: "counter-projects",
    },
  ];

  const sections = [
    {
      title: "Websites That Convert",
      text: "Your website is the core of your online presence. We build fast, responsive, and modern websites tailored to your goals.",
      link: "/website",
      button: "Explore Websites",
      img: "/about/coffee.png",
    },
    {
      title: "Designs That Define You",
      text: "From logos to full UI/UX kits — our design solutions make your brand unforgettable. We focus on both function and flair.",
      link: "/design",
      button: "Explore Design",
      img: "/about/empty.png",
    },
    {
      title: "Media That Grabs Attention",
      text: "Need scroll-stopping content? We create high-quality social media posts, video edits, and animations that boost engagement.",
      link: "/media",
      button: "Explore Media",
      img: "/about/office.png",
    },
    {
      title: "SEO That Brings Results",
      text: "We don’t just build websites — we make sure people find them. From keywords to Google Ads, we’ve got SEO handled.",
      link: "/seo",
      button: "Explore SEO",
      img: "/about/present.png",
    },
  ];

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

  const testimonials = [
    {
      name: "John Doe",
      text: "The service provided was beyond my expectations. The team was professional, responsive, and delivered an outstanding website that perfectly represents our brand. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      text: "Absolutely fantastic experience! From the initial consultation to the final delivery, everything was seamless and efficient. The design is modern, clean, and exactly what I envisioned.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      text: "A top-notch web agency that truly cares about its clients. They listened to our needs and delivered a product that exceeded our expectations. The attention to detail is impeccable!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "The team is amazing! They transformed our outdated website into a modern masterpiece. The communication was excellent, and the final result speaks for itself. Thank you!",
      rating: 5,
    },
    {
      name: "Chris Wilson",
      text: "Superb service! They understood our business needs and provided a solution that not only looks great but also performs flawlessly. Their expertise in SEO was an added bonus!",
      rating: 4,
    },
    {
      name: "Sarah Johnson",
      text: "I was hesitant at first, but after working with this team, I can confidently say they are the best in the industry. Their creativity and technical skills are unmatched!",
      rating: 5,
    },
  ];

  return (
    <>
      <HeroSection
        title="WebCoders"
        subtitle="Full Cycle Digital Agency"
        text="We don’t just build websites — we build brands. From clean design to strategic SEO, we offer full-cycle digital services to grow your business. Let’s create something powerful, fast, and made to convert."
        imgSrc="/hero/home.png"
        buttonText="Get A Quote"
        scrollToId="quote"
      />
      <div className="bg-linear-to-r from-secondary to-gradient text-white rounded overflow-hidden">
        <div className="flex whitespace-nowrap font-semibold text-[16px] py-2">
          <div className="flex animate-scroll-left">
            {[
              "We Build Fast Websites",
              "Clean Design — Modern Tech",
              "100% Mobile Friendly",
              "SEO-Optimized by Default",
              "Let’s Build Your Online Presence",
              "We Build Fast Websites",
              "Clean Design — Modern Tech",
            ].map((text, i) => (
              <div key={i} className="px-[30px]">
                {text}
              </div>
            ))}
          </div>
          <div className="flex animate-scroll-left">
            {[
              "We Build Fast Websites",
              "Clean Design — Modern Tech",
              "100% Mobile Friendly",
              "SEO-Optimized by Default",
              "Let’s Build Your Online Presence",
              "We Build Fast Websites",
              "Clean Design — Modern Tech",
            ].map((text, i) => (
              <div key={i} className="px-[30px]">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="cont relative my-[50px] h-[500px] !py-0 !px-[50px] flex flex-col items-center gap-[50px] bg-[url(/office.jpg)] bg-cover shadow-2xl">
        <div className="absolute flex flex-col h-full left-0 text-center max-w-[700px] lg:text-left bg-[rgba(0,0,0,0.5)] p-[30px] rounded-l-[15px] text-white">
          <div className="my-auto">
            <h2 className="text-[36px] font-semibold">WHO WE ARE</h2>
            <p className="max-w-[800px] mt-[10px]">
              At WebCoders, we believe in crafting digital experiences that
              drive success. Our team of experts is dedicated to delivering
              high-quality websites, designs, and marketing solutions tailored
              to your business needs.
            </p>
            <p className="max-w-[800px] mt-[10px]">
              From modern designs to strategic SEO, we handle every aspect of
              your online presence with professionalism and creativity. Let’s
              build something great together!
            </p>
            <Link
              to="/about"
              className="btn mt-[20px] px-[30px] py-[10px] text-lg font-bold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="cont">
        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-[20px]"
            >
              <img src={stat.icon} />
              <div>
                <CountUp
                  start={0}
                  end={stat.number}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                  duration={3}
                  onStart={() => {
                    setTimeout(() => {
                      document.getElementById(stat.id)!.textContent = `+`;
                    }, 3000);
                  }}
                >
                  {({ countUpRef }) => (
                    <div className="flex text-secondary text-[96px] font-bold">
                      <span ref={countUpRef} />
                      <span id={stat.id}></span>
                    </div>
                  )}
                </CountUp>
                <span className="text-[32px] text-gray-700">{stat.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {sections.map((sec, index) => {
        const isEven = index % 2 === 0;
        const animation = {
          initial: { opacity: 0.5, x: isEven ? -100 : 100 },
          whileInView: { opacity: 1, x: 0 },
        };

        return (
          <motion.section
            key={index}
            initial={animation.initial}
            whileInView={animation.whileInView}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`cont flex flex-col-reverse lg:flex-row ${
              isEven ? "lg:flex-row-reverse" : ""
            } items-center gap-[40px] py-[60px] px-[20px] ${
              isEven ? "bg-white" : "bg-gray-100"
            }`}
          >
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[32px] font-bold text-secondary mb-[10px]">
                {sec.title}
              </h2>
              <p className="text-gray-700 mb-[15px] max-w-[600px] mx-auto lg:mx-0">
                {sec.text}
              </p>
              <Link to={sec.link} className="btn px-[25px] py-[10px] mt-[10px]">
                {sec.button}
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={sec.img}
                alt={sec.title}
                className="rounded-xl shadow-xl w-full max-w-[500px] mx-auto"
              />
            </div>
          </motion.section>
        );
      })}
      <section id="reviews" className="cont my-[50px]">
        <h2 className="!text-[30px] md:!text-[40px] font-bold mb-[20px]">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-[1200px]">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="p-[20px] flex flex-col justify-between gap-[10px] bg-white rounded-[15px] shadow-lg transition-shadow hover:shadow-none hover:outline hover:outline-dashed bo duration-300"
            >
              <div>
                <div className="flex gap-1 mb-2 text-[36px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-md">"{review.text}"</p>
              </div>

              <h4 className="font-bold text-right text-gray-900">
                - {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
      <Quote />
      <FaqSection faqs={faqs} />
    </>
  );
}
