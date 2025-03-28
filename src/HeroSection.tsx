interface HeroSectionProps {
  title: string;
  subtitle: string;
  text: string;
  imgSrc: string;
  buttonText?: string;
  scrollToId?: string;
}

export default function HeroSection({
  title,
  subtitle,
  text,
  imgSrc,
  buttonText = "",
  scrollToId = "",
}: HeroSectionProps) {
  const handleScroll = () => {
    if (!scrollToId) return;
    const elem = document.getElementById(scrollToId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="cont !p-0 md:h-[500px] flex">
      <div className="my-auto flex-auto">
        <h1 className="font-extrabold">{title}</h1>
        <p className="text-secondary my-[10px]">{subtitle}</p>
        <span>{text}</span>
        {buttonText && scrollToId && (
          <button onClick={handleScroll} className="btn">
            {buttonText}
          </button>
        )}
      </div>
      <img className="hidden lg:block" src={imgSrc} alt="" />
    </section>
  );
}
