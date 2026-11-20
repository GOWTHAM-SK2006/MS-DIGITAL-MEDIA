import Link from 'next/link';
import { notFound } from 'next/navigation';
import { S, SL, D, P } from '../../../data/services';
import { SERVICE_DETAILS } from '../../../data/serviceDetails';
import { ILL } from '../../../components/illustrations';

export function generateStaticParams() {
  return SL.map((slug) => ({ slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const i = SL.indexOf(params.slug);
  if (i < 0) return {};
  return { title: `${S[i][1]} – MS Digital Media`, description: D[i][1] };
}

const Arrow = ({ big }) => (
  <svg className="i" style={big ? { width: '1.9rem', height: '1.9rem' } : undefined}>
    <use href="#arrow" />
  </svg>
);

const Check = () => (
  <svg className="i" style={{ width: '1.4rem', height: '1.4rem', stroke: 'var(--red)', strokeWidth: '3', flexShrink: 0 }}>
    <use href="#check" />
  </svg>
);

const ChevDown = () => (
  <svg className="i faq-chev" style={{ width: '1.6rem', height: '1.6rem', transition: 'transform .3s ease' }}>
    <use href="#chev" />
  </svg>
);

export default function ServicePage({ params }) {
  const i = SL.indexOf(params.slug);
  if (i < 0) notFound();
  const s = S[i], d = D[i];
  const slug = params.slug;
  const details = SERVICE_DETAILS[slug] || null;
  const IK = [s[0], 'target', 'chart', 'gauge', 'layers', 'gem'];
  const PERK_ICONS = ['gem', 'target', 'chart'];

  return (
    <main className="det">
      <Link className="back" href="/#services"><Arrow /> All Services</Link>

      {/* Hero Section */}
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

      {/* Key Impact Metrics Bar */}
      {details?.stats && (
        <section className="dstats-wrap">
          <div className="dstats-grid">
            {details.stats.map((st, idx) => (
              <div className="dstat" key={idx}>
                <div className="dstat-num">{st.num}</div>
                <div className="dstat-label">{st.label}</div>
                <p className="dstat-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's Included: Enhanced Deliverables Grid */}
      <section className="dsec">
        <div className="dsec-header">
          <span className="sub-badge">COMPREHENSIVE DELIVERABLES</span>
          <h2>What’s <em>included</em></h2>
          <p>{s[2]}</p>
        </div>
        <div className="dgrid">
          {(details?.items || d[2].map((x) => {
            const [t, desc] = x.split('|');
            return { title: t, desc, bullets: [] };
          })).map((item, n) => (
            <div className="card dc" key={item.title}>
              <span className="ib"><svg className="i"><use href={'#' + IK[n % IK.length]} /></svg></span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="dc-bullets">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx}><Check /><span>{b}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Advantages / Why Choose Us */}
      {details?.perks && (
        <section className="dsec">
          <div className="dsec-header">
            <span className="sub-badge">STRATEGIC EDGE</span>
            <h2>Why partner with <em>MS Digital Media</em></h2>
            <p>We blend creative storytelling with technical precision to drive measurable business revenue.</p>
          </div>
          <div className="dperks-grid">
            {details.perks.map((p, pIdx) => (
              <div className="dperk" key={p.title}>
                <span className="ib perk-ib"><svg className="i"><use href={'#' + PERK_ICONS[pIdx % PERK_ICONS.length]} /></svg></span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Platforms & Tools We Master */}
      {details?.tools && (
        <section className="dsec">
          <div className="dsec-header">
            <span className="sub-badge">TECH STACK & ECOSYSTEM</span>
            <h2>Platforms & tools we <em>leverage</em></h2>
            <p>Industry-standard technology to execute, analyze, and optimize your growth.</p>
          </div>
          <div className="dtools-list">
            {details.tools.map((t) => (
              <div className="dtool" key={t}>
                <span className="tool-dot"></span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How We Work 4-Step Process */}
      <section className="dsec">
        <div className="dsec-header">
          <span className="sub-badge">CLEAR ROADMAP</span>
          <h2>How we <em>work</em></h2>
          <p>A simple, transparent process from first call to compounding results.</p>
        </div>
        <div className="dgrid four">
          {P.map((x, n) => (
            <div className="card dc" key={x[0]}>
              <div className="n">0{n + 1}</div>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      {details?.faqs && (
        <section className="dsec">
          <div className="dsec-header">
            <span className="sub-badge">CLARITY FIRST</span>
            <h2>Frequently asked <em>questions</em></h2>
            <p>Everything you need to know about our {s[1]} services.</p>
          </div>
          <div className="faq-wrap">
            {details.faqs.map((faq, fIdx) => (
              <details className="faq-item" key={fIdx}>
                <summary>
                  <span className="faq-q">{faq.q}</span>
                  <ChevDown />
                </summary>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Ready to Get Started CTA Banner */}
      <section className="cta">
        <h2>Ready to scale your business with {s[1]}?</h2>
        <p>Tell us about your project goals and get a personalized growth proposal within 24 hours.</p>
        <div className="cta-actions">
          <Link className="btn f" href="/#contact">Get a Free Proposal <Arrow big /></Link>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="dsec" style={{ marginTop: '7rem' }}>
        <h2>Explore other <em>services</em></h2>
        <div className="chips" style={{ marginTop: '2.4rem' }}>
          {S.map((x, n) => (
            <Link key={x[1]} href={'/services/' + SL[n]} className={n === i ? 'cur' : ''}>
              {x[1]}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
