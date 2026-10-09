import { useState, useEffect } from 'react';
import { siteData } from '../config/siteData';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionIds: Record<string, string> = {
    Home: 'hero',
    'Our Story': 'story',
    Menu: 'menu',
    Gallery: 'gallery',
    Contact: 'contact',
  };

  return (
    <header className={`hg-header ${scrolled ? 'hg-header--scrolled' : ''}`}>
      <div className="hg-header__inner">
        <button className="hg-header__logo" onClick={() => scrollTo('hero')} aria-label="Go to top">
          <img src={logoImg} alt="Highway Grill Logo" className="hg-header__logo-img" />
        </button>

        <nav className={`hg-header__nav ${menuOpen ? 'hg-header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="hg-header__links">
            {siteData.nav.map((item) => (
              <li key={item}>
                <button className="hg-header__link" onClick={() => scrollTo(sectionIds[item] || 'hero')}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button className="hg-header__cta" onClick={() => scrollTo('menu')}>
            ORDER NOW
          </button>
        </nav>

        <button
          className={`hg-header__burger ${menuOpen ? 'hg-header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
