import { useEffect, useRef } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', alt: 'Freshly marinated chicken ready for the grill', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', alt: 'Chicken roasting over charcoal flames', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80', alt: 'Aromatic basmati rice with saffron threads', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Chef plating a Mandi platter with precision', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', alt: 'Close-up of aromatic spices and smoke', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80', alt: 'A fully plated family-sized Mandi platter', size: 'large' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('hg-visible');
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll('.hg-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="hg-gallery section-padding" ref={sectionRef}>
      <div className="container">
        <div className="hg-gallery__header hg-reveal">
          <span className="hg-eyebrow">A FEAST FOR THE EYES</span>
          <h2 className="hg-section-heading">From Our Kitchen</h2>
        </div>

        <div className="hg-gallery__grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`hg-gallery__item hg-gallery__item--${img.size} hg-reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
