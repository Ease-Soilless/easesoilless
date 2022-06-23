import digital from "../images/soilless.png";
export const HeroSection = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="headerhold">
        <div className="logo">
          <div>
            <img src={digital} />
          </div>
        </div>

        <div className="navgator">
          <a href="#">Home</a>
          <a href="About us.html">About</a>
          <a href="Contact.html">Contact</a>
          <a href="Product.html">Product</a>
        </div>
      </div>

      <section className="hero_s">
        <div className="content">
          <div className="herotext">
            <div className="heroH1">
              <h1>We transform the</h1>
              <h1>Agriculture world</h1>
            </div>
            <div className="BtnStyle">
              <a href="#">
                <span>Get Started</span>
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export const AboutUs = () => {
  return (
    <section className="big h-60px">
      <div className="AboutHero">
        <div className="logo">
          <div>
            <img src={digital} />
          </div>
        </div>
      </div>
    </section>
  );
};
