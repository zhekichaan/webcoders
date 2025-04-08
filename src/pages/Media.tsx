import { motion } from "framer-motion";
import HeroSection from "../HeroSection";
import Quote from "../Quote";
import FaqSection from "../Faq";

export default function Media() {
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

  const processSteps = [
    {
      title: "01. Brief & Goal Setting",
      text: "We discuss your vision, target audience, and platforms to align our direction before we begin.",
      icon: "/icons/brief.png",
    },
    {
      title: "02. Content Planning",
      text: "We create a rough plan and script outline based on your needs — from Reels to animations.",
      icon: "/icons/planning.png",
    },
    {
      title: "03. Design & Editing",
      text: "We design, animate, cut, and add effects using tools like Premiere, After Effects & Figma.",
      icon: "/icons/editing.png",
    },
    {
      title: "04. Final Delivery",
      text: "After review and feedback, we deliver your content in optimal formats for all your platforms.",
      icon: "/icons/delivery.png",
    },
  ];

  const tools = [
    {
      name: "Adobe Photoshop",
      icon: "/tools/photoshop.png",
      description: "Professional photo editing & graphics",
    },
    {
      name: "After Effects",
      icon: "/tools/aftereffects.png",
      description: "Motion design and animations",
    },
    {
      name: "Figma",
      icon: "/tools/figma.png",
      description: "UI/UX design & prototyping",
    },
    {
      name: "CapCut",
      icon: "/tools/capcut.png",
      description: "Quick editing for reels & shorts",
    },
    {
      name: "Canva",
      icon: "/tools/canva.png",
      description: "Easy graphics for social media",
    },
    {
      name: "Premiere Pro",
      icon: "/tools/premiere.png",
      description: "Advanced video editing software",
    },
    {
      name: "Notion",
      icon: "/tools/notion.png",
      description: "Project & content planning",
    },
    {
      name: "Google Drive",
      icon: "/tools/drive.png",
      description: "Cloud storage for assets & videos",
    },
  ];

  return (
    <>
      <HeroSection
        title="Media"
        subtitle="Full Cycle Digital Agency"
        text="Развивайте свой бизнес с уверенностью в завтрашнем дне..."
        imgSrc="/hero/media.png"
        buttonText="Get A Quote"
        scrollToId="quote"
      />
      <section className="cont bg-gray-100 py-[40px]">
        <h2 className="text-[32px] font-bold text-center mb-[30px]">
          Our Media Services
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
          {[
            {
              title: "Reels & Shorts Editing",
              icon: "/icons/reels.png",
              price: "$99 / video",
              includes: [
                "Vertical Format (9:16)",
                "Captions & Motion Text",
                "Transitions & Cut Sync",
                "Delivery in 24–48h",
              ],
            },
            {
              title: "Promo Video Creation",
              icon: "/icons/promo.png",
              price: "$199+",
              includes: [
                "Custom Script & Storyboard",
                "Stock Footage / Client Assets",
                "Voiceover & Music Sync",
                "Up to 60 seconds",
              ],
            },
            {
              title: "SMM Graphics Package",
              icon: "/icons/design.png",
              price: "$149 / pack",
              includes: [
                "10 Post Designs (carousel / static)",
                "Stories & Highlights",
                "Brand-consistent style",
                "Editable PSD/PNG delivery",
              ],
            },
            {
              title: "Motion Animation",
              icon: "/icons/motion.png",
              price: "$299+",
              includes: [
                "2D Logo Animation",
                "Character or Text Animation",
                "Sound FX Included",
                "Custom Style",
              ],
            },
            {
              title: "YouTube Thumbnail Design",
              icon: "/icons/thumbnail.png",
              price: "$15 / each",
              includes: [
                "Bold Clickable Design",
                "Text Emphasis",
                "Facial Expression Retouch",
                "Delivered in 1280x720",
              ],
            },
            {
              title: "Monthly Content Bundle",
              icon: "/icons/bundle.png",
              price: "From $499",
              includes: [
                "Up to 12 Reels or Shorts",
                "5 Thumbnails or Banners",
                "Strategy Call + Planning",
                "Priority Delivery",
              ],
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="p-[20px] bg-white rounded-[15px] shadow-md hover:shadow-lg transition-all flex flex-col text-left"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="size-[60px] mb-[15px]"
              />
              <h3 className="text-[20px] font-bold mb-[5px]">{item.title}</h3>
              <p className="text-[18px] font-semibold text-secondary mb-[10px]">
                {item.price}
              </p>
              <ul className="text-[15px] text-gray-700 flex flex-col gap-[8px] list-disc list-inside">
                {item.includes.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="cont py-[50px] bg-white">
        <h2 className="text-[32px] font-bold text-center mb-[30px]">
          How We Work
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
          {processSteps.map((step, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-[20px] bg-gray-100 rounded-[15px] p-[20px] shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="size-[50px] shrink-0"
              />
              <div>
                <h3 className="font-bold text-[18px] mb-[5px]">{step.title}</h3>
                <p className="text-[16px] text-gray-700">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
      <Quote />
      <section className="cont py-[50px] bg-white">
        <h2 className="text-[32px] font-bold text-center mb-[30px]">
          Tools We Use
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[30px] max-w-[1200px] mx-auto">
          {tools.map((tool, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0.5, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-gray-100 rounded-[15px] p-[25px] hover:shadow-md transition-all"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-[70px] h-[70px] mb-[15px]"
              />
              <h3 className="font-semibold text-[18px]">{tool.name}</h3>
              <p className="text-sm text-gray-600 mt-[5px]">
                {tool.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>
      <FaqSection faqs={faqs} />
    </>
  );
}
