import Link from 'next/link';
import { notFound } from 'next/navigation';
import { S, SL, D, P } from '../../../data/services';
import { ILL } from '../../../components/illustrations';

export function generateStaticParams() { return SL.map((slug) => ({ slug })); }
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const i = SL.indexOf(params.slug);
  if (i < 0) return {};
  return { title: `${S[i][1]} – MS Digital Media`, description: D[i][1] };
}

const Arrow = ({ big }) => <svg className="i" style={big ? { width: '1.9rem', height: '1.9rem' } : undefined}><use href="#arrow" /></svg>;

export default function ServicePage({ params }) {
  const i = SL.indexOf(params.slug);
  if (i < 0) notFound();
  const s = S[i], d = D[i];
  const IK = [s[0], 'target', 'chart', 'gauge', 'layers', 'gem'];
  return (
    <main className="det">
      <Link className="back" href="/#services"><Arrow /> All Services</Link>
      <div className="dhero">
        <div>
          <span className="badge">OUR SERVICES</span>
          <h1>{d[0][0]}<br /><em>{d[0][1]}</em></h1>
          <p className="lead" style={{ maxWidth: '66rem' }}>{d[1]}</p>
          <div className="ctas" style={{ marginTop: '3.4rem' }}>
            <Link className="btn f" href="/#contact">Get a Quote <Arrow big /></Link>
            <Link className="btn" href="/#services">All Services</Link>
          </div>
        </div>
        <div className="dart2" dangerouslySetInnerHTML={{ __html: ILL[i] }} />
      </div>
      <div className="dsec">
        <h2>What’s <em>included</em></h2><p>{s[2]}</p>
        <div className="dgrid">{d[2].map((x, n) => { const [t, desc] = x.split('|'); return (
          <div className="card dc" key={t}><span className="ib"><svg className="i"><use href={'#' + IK[n]} /></svg></span><h3>{t}</h3><p>{desc}</p></div>); })}</div>
      </div>
      <div className="dsec">
        <h2>How we <em>work</em></h2><p>A simple, transparent process from first call to ongoing results.</p>
        <div className="dgrid four">{P.map((x, n) => (<div className="card dc" key={x[0]}><div className="n">0{n + 1}</div><h3>{x[0]}</h3><p>{x[1]}</p></div>))}</div>
      </div>
      <div className="cta">
        <h2>Ready to get started with {s[1]}?</h2>
        <p>Tell us about your project and our team will get back to you within 24 hours.</p>
        <Link className="btn" href="/#contact">Get a Quote <Arrow big /></Link>
      </div>
      <div className="dsec" style={{ marginTop: '7rem' }}>
        <h2>Explore other <em>services</em></h2>
        <div className="chips" style={{ marginTop: '2.4rem' }}>{S.map((x, n) => <Link key={x[1]} href={'/services/' + SL[n]} className={n === i ? 'cur' : ''}>{x[1]}</Link>)}</div>
      </div>
    </main>
  );
}
