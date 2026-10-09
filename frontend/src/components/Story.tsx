import { useEffect, useRef } from 'react';
import { siteData } from '../config/siteData';

export default function Story() {
  const s = siteData.story;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('hg-visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.hg-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="hg-story section-padding" ref={sectionRef}>
      <div className="hg-story__overlap-top" />
      <div className="container">
        <div className="hg-story__grid">
          <div className="hg-story__image-col hg-reveal">
            <div className="hg-story__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
                alt="Traditional Mandi platter with aromatic rice and tender chicken"
                loading="lazy"
              />
            </div>
          </div>

          <div className="hg-story__text-col">
            <span className="hg-eyebrow hg-reveal">{s.eyebrow}</span>
            <h2 className="hg-story__heading hg-reveal">
              {s.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="hg-story__malayalam hg-reveal">{s.malayalamAccent}</p>
            <p className="hg-story__body hg-reveal">{s.body}</p>
            <button className="hg-btn hg-btn--text hg-reveal" onClick={() => {
              const el = document.getElementById('menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              {s.cta} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
