import { site } from '../data/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-bar">
        <img className="header-graphic" src={site.headerGraphic} alt="" />
      </div>
    </header>
  );
}
