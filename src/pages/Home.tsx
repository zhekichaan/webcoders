import Quote from "../Quote";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div>
          <h1>WebCoders</h1>
          <h2>Full-Cycle Digital Agency</h2>
          <p>
            Grow your business with confidence in the future. We offer
            transparent, clear, and structured solutions from experienced
            professionals with years of expertise.
          </p>
          <button>Let's Work Together</button>
        </div>
        <img src="" alt="" />
      </section>
      <section id="services">
        <ul>
          <li>
            <div>
              <img src="" alt="" />
              <h3>Websites</h3>
            </div>
            <h4>What we develop:</h4>
            <ul>
              <li>Business Websites</li>
              <li>E-commerce Stores</li>
              <li>Landing Pages</li>
              <li>CMS Development</li>
            </ul>
            <button>See More...</button>
          </li>
          <li>
            <div>
              <img src="" alt="" />
              <h3>Design</h3>
            </div>
            <h4>What we do:</h4>
            <ul>
              <li>Logo & branding</li>
              <li>UI/UX design</li>
              <li>Website design</li>
              <li>Branding & Identity</li>
            </ul>
            <button>See More...</button>
          </li>
          <li>
            <div>
              <img src="" alt="" />
              <h3>Content Creation</h3>
            </div>
            <h4>What we create:</h4>
            <ul>
              <li>Motion Graphics</li>
              <li>Social Media Content</li>
              <li>Ad Campaigns</li>
              <li>Visual Storytelling</li>
            </ul>
            <button>See More...</button>
          </li>
          <li>
            <div>
              <img src="" alt="" />
              <h3>SEO</h3>
            </div>
            <h4>What we do:</h4>
            <ul>
              <li>SEO Optimization</li>
              <li>Keyword Research</li>
              <li>Backlink Building</li>
              <li>Content Strategy</li>
            </ul>
            <button>See More...</button>
          </li>
        </ul>
      </section>
      <section id="team">
        <ul>
          <li>
            <img src="" alt="" />
            <h3>Name</h3>
            <h4>Position, Position, Position</h4>
          </li>
          <li>
            <img src="" alt="" />
            <h3>Name</h3>
            <h4>Position, Position, Position</h4>
          </li>
          <li>
            <img src="" alt="" />
            <h3>Name</h3>
            <h4>Position, Position, Position</h4>
          </li>
          <li>
            <img src="" alt="" />
            <h3>Name</h3>
            <h4>Position, Position, Position</h4>
          </li>
        </ul>
      </section>
      <Quote />
      <section id="values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <span>1.</span>
            <p>
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li>
            <span>2.</span>
            <p>
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
          <li>
            <span>3.</span>
            <p>
              Мы передаем заказчику всю интеллектуальную собственность. Все
              кабинеты, настройки и исходники только его.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
