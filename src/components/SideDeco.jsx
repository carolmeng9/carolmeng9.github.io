import { site } from '../data/site';

export default function SideDeco() {
  return (
    <>
      <img
        className="side-deco side-deco-left"
        src={site.sideLeft}
        alt=""
        width={300}
        height={800}
      />
      <img
        className="side-deco side-deco-right"
        src={site.sideRight}
        alt=""
        width={300}
        height={800}
      />
    </>
  );
}
