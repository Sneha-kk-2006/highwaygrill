import { siteData } from '../config/siteData';
import heroVideo from '../assets/videos/hero.mp4';

export default function Hero() {
  const h = siteData.hero;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hg-hero">
      {/* Background video */}
      <div className="hg-hero__video-wrap">
        <video
          className="hg-hero__video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hg-hero__overlay" />
      </div>

      {/* Content */}
      <div className="hg-hero__content">
        <p className="hg-hero__location">{h.locationLabel}</p>

        <div className="hg-hero__text">
          <span className="hg-hero__eyebrow">{h.eyebrow}</span>
          <h1 className="hg-hero__headline">
            <span>{h.headlineTop}</span>
            <span>{h.headlineBottom}</span>
          </h1>
          <p className="hg-hero__malayalam">{h.malayalamAccent}</p>
          <p className="hg-hero__desc">{h.description}</p>

          <div className="hg-hero__ctas">
            <button className="hg-btn hg-btn--primary" onClick={() => scrollTo('menu')}>
              {h.ctaPrimary}
            </button>
            <button className="hg-btn hg-btn--outline" onClick={() => scrollTo('story')}>
              {h.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="hg-hero__scroll-indicator">
          <div className="hg-hero__scroll-line" />
          <span>{h.scrollLabel}</span>
        </div>
      </div>
    </section>
  );
}
