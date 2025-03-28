import { Link } from "react-router-dom";
import Quote from "../Quote";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Swiper, SwiperSlide } from "swiper/react";

import CountUp from "react-countup";

// import required modules
import { EffectCards } from "swiper/modules";

import "../swiper.css";
import HeroSection from "../HeroSection";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    {
      icon: "/icons/stats/client.png",
      number: 99,
      text: "Satisfied Clients",
      id: "counter-clients",
      duration: 4.2,
    },
    {
      icon: "/icons/stats/time.png",
      number: 15,
      text: "Years Of Experience",
      id: "counter-years",
      duration: 4.4,
    },
    {
      icon: "/icons/stats/project.png",
      number: 50,
      text: "Completed Projects",
      id: "counter-projects",
      duration: 4.6,
    },
  ];

  const teamMembers = [
    {
      name: "Stepan",
      role: "Designer, 2D/3D Animator",
      image: "stepan.jpg",
    },
    {
      name: "Mykola",
      role: "Full-Stack, WordPress Developer",
      image: "mykola.jpg",
    },
    {
      name: "Mykita",
      role: "SEO, Management, Advertisement",
      image: "mykita.jpg",
    },
    {
      name: "Maria",
      role: "Content Creator, Social Media",
      image: "maria.jpg",
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
      icon: "/icons/web.png",
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
      icon: "/icons/web.png",
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
      icon: "/icons/web.png",
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
        title="WebCoders"
        subtitle="Full Cycle Digital Agency"
        text="Развивайте свой бизнес с уверенностью в завтрашнем дне..."
        imgSrc="/hero/home.png"
        buttonText="Get A Quote"
        scrollToId="quote"
      />
      <section className="cont p-[10px] bg-gray-100">
        <h2 className="text-[26px] mb-[20px] text-center">SERVICES</h2>
        <ul className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:grid-cols-4">
          {services.map((item, index) => (
            <li
              key={index}
              className="p-[20px] max-w-[300px] bg-white rounded-[15px] drop-shadow-sm flex flex-col"
            >
              <div>
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="size-[70px] mr-[10px]"
                  />
                  <h3 className="text-[22px] font-bold text-secondary">
                    {item.title}
                  </h3>
                </div>

                <p className="font-semibold mt-[10px] mb-[5px]">What we do:</p>
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
          className="cont flex flex-col lg:!mx-0 !px-[60px] bg-gradient text-black drop-shadow-xl flex-none"
        >
          <h2 className="!text-[64px] text-white">OUR TEAM</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            cardsEffect={{ slideShadows: true }}
            modules={[EffectCards]}
            className="mySwiper my-auto max-w-[200px] md:max-w-[300px] overflow-clip"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                className="w-[200px] md:w-[300px] mx-auto bg-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-[200px] md:size-[300px]"
                />
                <div className="py-[15px] px-[10px]">
                  <h3 className="mt-[10px] font-bold">{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="cont lg:!mx-0">
          <h2 className="!text-[64px] mb-[20px]">STATISTICS</h2>
          <div className="flex flex-col gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
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
                    duration={stat.duration}
                    onEnd={() => {
                      document.getElementById(stat.id)!.textContent = `+`;
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
      </div>
      <section id="reviews" className="my-[50px]">
        <h2 className="text-center text-[26px] font-bold mb-[20px]">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-[1200px]">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="p-[20px] flex flex-col justify-between gap-[10px] bg-white rounded-[15px] shadow-lg transition-shadow hover:shadow-none duration-300"
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
      <section className="cont bg-gray-100 my-[50px] flex flex-col lg:flex-row items-center gap-[50px]">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[36px] font-bold">WHO WE ARE</h2>
          <p className="text-gray-700 max-w-[800px] mt-[10px]">
            At WebCoders, we believe in crafting digital experiences that drive
            success. Our team of experts is dedicated to delivering high-quality
            websites, designs, and marketing solutions tailored to your business
            needs.
          </p>
          <p className="text-gray-700 max-w-[800px] mt-[10px]">
            From modern designs to strategic SEO, we handle every aspect of your
            online presence with professionalism and creativity. Let’s build
            something great together!
          </p>
          <Link
            to="/about"
            className="btn mt-[20px] px-[30px] py-[10px] text-lg font-bold"
          >
            Learn More
          </Link>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-[10px]">
          <motion.img
            src="/about/office.png"
            alt="About us"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="/about/present.png"
            alt="Our team"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src="/about/coffee.png"
            alt="Our office"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.img
            src="/about/empty.png"
            alt="Work in progress"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </div>
      </section>
      <Quote />
    </>
  );
}
