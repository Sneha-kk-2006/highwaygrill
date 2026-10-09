import { useEffect, useRef } from 'react';
import { siteData } from '../config/siteData';

export default function Why() {
  const w = siteData.why;
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
    <section className="hg-why section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="hg-section-heading hg-reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          {w.heading}
        </h2>

        <div className="hg-why__grid">
          {w.points.map((point, i) => (
            <div
              key={i}
              className="hg-why__card hg-reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="hg-why__icon">{point.icon}</span>
              <h3 className="hg-why__title">{point.title}</h3>
              <p className="hg-why__desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
