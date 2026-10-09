import { useEffect, useRef, useState } from 'react';
import { siteData } from '../config/siteData';

const dishImages: Record<string, string> = {
  'Classic Chicken Mandi': 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d4a?w=600&q=80',
  'Spicy Chicken Mandi': 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&q=80',
  'Alfaham Mandi': 'https://images.unsplash.com/photo-1610057099443-fde6c99db9e1?w=600&q=80',
  'Peri Peri Mandi': 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80',
  'Mutton Mandi': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
  'Beef Mandi': 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80',
};

const categories = ['All', ...new Set(siteData.menu.items.map(i => i.category))];

export default function MenuShowcase() {
  const m = siteData.menu;
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? m.items
      : m.items.filter((i) => i.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('hg-visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.hg-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="menu" className="hg-menu section-padding" ref={sectionRef}>
      <div className="container">
        <div className="hg-menu__header hg-reveal">
          <span className="hg-eyebrow">{m.eyebrow}</span>
          <h2 className="hg-section-heading">{m.heading}</h2>
          <p className="hg-menu__malayalam">{m.malayalamAccent}</p>
        </div>

        <div className="hg-menu__filters hg-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`hg-menu__filter ${activeCategory === cat ? 'hg-menu__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hg-menu__grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="hg-menu__card hg-reveal"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="hg-menu__card-image">
                <img
                  src={dishImages[item.name] || dishImages['Classic Chicken Mandi']}
                  alt={item.name}
                  loading="lazy"
                />
                <span className="hg-menu__card-badge">{item.category}</span>
              </div>
              <div className="hg-menu__card-body">
                <h3 className="hg-menu__card-name">{item.name}</h3>
                <p className="hg-menu__card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hg-menu__cta-wrap hg-reveal">
          <button className="hg-btn hg-btn--primary" onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            {m.cta}
          </button>
          <span className="hg-menu__cta-ml">{m.malayalamCta}</span>
        </div>
      </div>
    </section>
  );
}
