import heroImg from './assets/hero.svg';
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            eaque quidem harum vel quas eligendi delectus. Rem, dolores facere
            eveniet atque doloremque voluptas explicabo error tempora neque
            blanditiis quis aperiam.
          </p>
        </div>
        <div className="img-container">
          <img
            src={heroImg}
            alt="woman and the browser"
            className="img"
          />
        </div>
      </div>
    </section>
  );
};
