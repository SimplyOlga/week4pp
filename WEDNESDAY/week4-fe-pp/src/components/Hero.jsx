function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>backroads app</h1>
        <p>
          I confirmed with another pair in pair programming that by the time you are finished with it, this button stops redirecting since we changed routes. So, I fixed it here :)
        </p>
        <a href="tours" className="btn hero-btn">
          explore tours that actually redirects
        </a>
      </div>
    </section>
  );
}

export default Hero;
