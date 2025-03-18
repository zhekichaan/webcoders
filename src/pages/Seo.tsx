export default function Seo() {
  return (
    <>
      <section id="hero" className="container md:h-[500px] flex">
        <div className="my-auto">
          <h1 className="font-extrabold">SEO</h1>
          <p className="text-secondary my-[10px]">Full-Cycle Digital Agency</p>
          <p>
            Grow your business with confidence in the future. We offer
            transparent, clear, and structured solutions from experienced
            professionals with years of expertise.
          </p>
          <button className="btn">Get A Quote</button>
        </div>
        <img src="home.png" alt="" className="hidden lg:block" />
      </section>
    </>
  );
}
