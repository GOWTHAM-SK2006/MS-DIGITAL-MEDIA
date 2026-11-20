'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { S, SL } from '../data/services';

const ids = ['home', 'about', 'services', 'contact'];

export default function Navbar() {
  const path = usePathname();
  const home = path === '/';
  const [act, setAct] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const spy = () => {
      setScrolled(window.scrollY > 20);
      if (!home) { setAct('services'); return; }
      const y = window.scrollY + window.innerHeight * 0.35;
      let p = 'home';
      ids.forEach((i) => { const el = document.getElementById(i); if (el && el.offsetTop <= y) p = i; });
      setAct(p);
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    return () => { window.removeEventListener('scroll', spy); window.removeEventListener('resize', spy); };
  }, [home, path]);

  const on = (p) => (act === p ? 'on' : '');
  const arrow = { width: '1.9rem', height: '1.9rem' };
  return (
    <header className={'nav' + (scrolled ? ' s' : '')} id="nav">
      <Link className="logo" href="/#home"><img src="/logo.png" alt="MS Digital Media – Design • Digital • Build" /></Link>
      <nav className={'links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        <Link href="/#home" className={on('home')}>Home</Link>
        <Link href="/#about" className={on('about')}>About</Link>
        <span className="dd">
          <Link href="/#services" className={on('services')}>Services <svg className="i" style={{ width: '1.3rem', height: '1.3rem' }}><use href="#chev" /></svg></Link>
          <div className="menu">{S.map((s, i) => <Link key={s[1]} href={'/services/' + SL[i]}>{s[1]}</Link>)}</div>
        </span>
        <Link href="/#contact" className={on('contact')}>Contact</Link>
        <Link className="btn f m-quote" href="/#contact">Get a Quote <svg className="i" style={arrow}><use href="#arrow" /></svg></Link>
      </nav>
      <Link className="btn quote" href="/#contact">Get a Quote <svg className="i" style={arrow}><use href="#arrow" /></svg></Link>
      <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">{open ? '✕' : '☰'}</button>
    </header>
  );
}
