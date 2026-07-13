import { Link } from 'react-router-dom';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="hero">
      <h1>{site.name}</h1>
      <div className="hero-bio">
        <img
          className="hero-photo"
          src={site.photo}
          alt={site.name}
          width={160}
          height={160}
        />
        <div className="hero-text">
          {site.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <div className="link-strip">
            {site.links.map((link) =>
              link.internal ? (
                <Link key={link.label} to={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
