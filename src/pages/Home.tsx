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

  // const services = [
  //   {
  //     title: "Website",
  //     icon: "/icons/web.png",
  //     href: "/website",
  //     features: [
  //       "Landing Pages",
  //       "Business Sites",
  //       "E-commerce Platforms",
  //       "Custom CMS Solutions",
  //     ],
  //   },
  //   {
  //     title: "Design",
  //     icon: "/icons/web.png",
  //     href: "/design",
  //     features: [
  //       "UI/UX Interfaces",
  //       "Brand Identity Kits",
  //       "Figma Prototypes",
  //       "Custom Logo Design",
  //     ],
  //   },
  //   {
  //     title: "Media",
  //     icon: "/icons/web.png",
  //     href: "/media",
  //     features: [
  //       "SMM Graphics",
  //       "Video Editing",
  //       "Reels & Shorts",
  //       "Motion Animation",
  //     ],
  //   },
  //   {
  //     title: "SEO",
  //     icon: "/icons/web.png",
  //     href: "/seo",
  //     features: [
  //       "Keyword Research",
  //       "On-page Optimization",
  //       "Google Ads Setup",
  //       "Backlink Strategy",
  //     ],
  //   },
  // ];

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
      <section className="cont  my-[50px] flex flex-col lg:flex-row items-center gap-[50px]">
        <div className="lg:w-1/2 text-center lg:text-left bg-gray-100 p-[30px] rounded-[15px]">
          <h2 className="text-[36px] font-semibold">WHO WE ARE</h2>
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
          initial: { opacity: 0, x: isEven ? -100 : 100 },
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
      {/* <section className="cont p-[10px] bg-gray-100">
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
      </section> */}
      <section
        id="team"
        className="cont flex flex-col lg:!mx-auto text-black drop-shadow-xl flex-none"
      >
        <h2 className="font-semibold">Our Team</h2>
        <ul className="grid w-fit mx-auto mt-[20px] md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
          {teamMembers.map((member) => (
            <li className="w-[200px] md:w-[300px] mx-auto bg-white shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="size-[200px] md:size-[300px]"
              />
              <div className="py-[15px] px-[10px]">
                <h3 className="mt-[10px] font-bold">{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
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
