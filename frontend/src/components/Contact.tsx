import { useEffect, useRef } from 'react';
import { siteData } from '../config/siteData';

export default function Contact() {
  const c = siteData.contact;
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
    <section id="contact" className="hg-contact section-padding" ref={sectionRef}>
      <div className="container">
        <div className="hg-contact__header hg-reveal">
          <span className="hg-eyebrow">FIND US</span>
          <h2 className="hg-section-heading">{c.heading}</h2>
        </div>

        <div className="hg-contact__grid">
          <div className="hg-contact__info hg-reveal">
            <div className="hg-contact__block">
              <h3>Address</h3>
              <p>{c.address}</p>
            </div>
            <div className="hg-contact__block">
              <h3>Hours</h3>
              <p>{c.hours}</p>
            </div>
            <div className="hg-contact__block">
              <h3>Phone</h3>
              <p>{c.phone}</p>
            </div>
            <div className="hg-contact__block">
              <h3>Email</h3>
              <p>{c.email}</p>
            </div>
          </div>

          <div className="hg-contact__actions hg-reveal">
            <a href={c.mapLink} className="hg-btn hg-btn--primary" target="_blank" rel="noopener noreferrer">
              GET DIRECTIONS
            </a>
            <a href={c.whatsappLink} className="hg-btn hg-btn--outline" target="_blank" rel="noopener noreferrer">
              ORDER VIA WHATSAPP
            </a>
            <a href={c.instagramLink} className="hg-btn hg-btn--text" target="_blank" rel="noopener noreferrer">
              FOLLOW ON INSTAGRAM →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
