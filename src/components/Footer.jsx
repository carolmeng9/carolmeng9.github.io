import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>© {site.copyrightYear} {site.name}</p>
      </div>
    </footer>
  );
}
