import { useEffect, useRef, useState } from 'react';
import { siteData } from '../config/siteData';

export default function Testimonials() {
  const t = siteData.testimonials;
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % t.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.length]);

  return (
    <section className="hg-testimonials section-padding" ref={sectionRef}>
      <div className="container">
        <div className="hg-testimonials__header hg-reveal">
          <span className="hg-eyebrow">WHAT PEOPLE SAY</span>
          <h2 className="hg-section-heading">Words Worth Savouring</h2>
        </div>

        <div className="hg-testimonials__carousel hg-reveal">
          <span className="hg-testimonials__quote-mark">"</span>
          <div className="hg-testimonials__slide-wrap">
            {t.map((item, i) => (
              <div
                key={i}
                className={`hg-testimonials__slide ${i === activeIdx ? 'hg-testimonials__slide--active' : ''}`}
              >
                <blockquote className="hg-testimonials__text">{item.quote}</blockquote>
                <cite className="hg-testimonials__author">
                  {item.author} <span className="hg-testimonials__note">{item.note}</span>
                </cite>
              </div>
            ))}
          </div>

          <div className="hg-testimonials__dots">
            {t.map((_, i) => (
              <button
                key={i}
                className={`hg-testimonials__dot ${i === activeIdx ? 'hg-testimonials__dot--active' : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
