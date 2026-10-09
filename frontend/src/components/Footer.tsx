import { siteData } from '../config/siteData';
import logoImg from '../assets/images/logo.png';

export default function Footer() {
  const f = siteData.footer;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sectionIds: Record<string, string> = {
    Home: 'hero',
    'Our Story': 'story',
    Menu: 'menu',
    Gallery: 'gallery',
    Contact: 'contact',
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="hg-footer">
      <div className="container">
        <div className="hg-footer__top">
          <div className="hg-footer__brand">
            <img src={logoImg} alt="Highway Grill Logo" className="hg-footer__logo" />
            <p className="hg-footer__statement">{f.statement}</p>
          </div>

          <div className="hg-footer__nav">
            <h4>Quick Links</h4>
            <ul>
              {siteData.nav.map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo(sectionIds[item] || 'hero')}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="hg-footer__contact">
            <h4>Get in Touch</h4>
            <p>{siteData.contact.address}</p>
            <p>{siteData.contact.phone}</p>
            <p>{siteData.contact.email}</p>
          </div>
        </div>

        <div className="hg-footer__bottom">
          <p>{f.copyright}</p>
          <button className="hg-footer__back-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
