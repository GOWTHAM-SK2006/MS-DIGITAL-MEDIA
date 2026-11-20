import Link from 'next/link';
import {S,SL} from '../data/services';
import ContactForm from '../components/ContactForm';
import Typewriter from '../components/Typewriter';
export default function Home(){return (<>
<section className="page" id="home"><div className="wave"></div>
<div className="a home-c" style={{'--x':730,'--t':117,left:'0',width:'100%',textAlign:'center'}}><span className="badge">DIGITAL MARKETING AGENCY</span></div>
<h1 className="a home-c" style={{'--x':0,'--t':166,left:'0',width:'100%',textAlign:'center'}}>Navigate Your Business<br/>Towards <em><Typewriter />.</em></h1>
<p className="lead a home-c" style={{'--x':0,'--t':300,left:'0',width:'100%',textAlign:'center'}}>Strategic marketing. Creative thinking. Smarter digital experiences.<br/>We help businesses attract the right audience and grow with confidence.</p>
<div className="a ctas home-c" style={{'--x':660,'--t':382}}><Link className="btn f" href="/#contact" style={{padding:'0 4.2rem'}}>Get a Quote <svg className="i" style={{width:'1.9rem',height:'1.9rem'}}><use href="/#arrow"/></svg></Link><Link className="btn" href="/#services">Our Services</Link></div>
<div className="a fr-wrap" style={{'--x':0,'--t':461,left:0,width:'100%',justifyContent:'center'}}>
<div className="feat"><svg className="i"><use href="/#target"/></svg>Strategy</div><i className="vd"></i>
<div className="feat"><svg className="i"><use href="/#layers"/></svg>Creativity</div><i className="vd"></i>
<div className="feat"><svg className="i"><use href="/#code"/></svg>Technology</div><i className="vd"></i>
<div className="feat"><svg className="i"><use href="/#chart"/></svg>Growth</div>
</div>
<img className="a art" style={{'--x':500,'--t':520,width:'75.6rem'}} src="/images/hero.webp" alt="MSDM Analytics dashboard on a laptop"/>
</section>
<section className="page" id="about"><div className="wave"></div>
<div className="a" style={{'--x':159,'--t':138}}><span className="badge" style={{height:'3.4rem'}}>ABOUT US</span></div>
<h1 className="a" style={{'--x':160,'--t':180}}>A Results-Driven<br/><em>Digital Marketing Agency.</em></h1>
<p className="lead a" style={{'--x':160,'--t':310,'--ww':'66rem'}}>MS Digital Media helps businesses build a strong digital presence through strategic marketing, creative branding, and performance-driven solutions.</p>
<div className="a ctas" style={{'--x':158,'--t':424}}><Link className="btn f" href="/#contact" style={{padding:'0 4rem'}}>Get a Quote <svg className="i" style={{width:'1.9rem',height:'1.9rem'}}><use href="/#arrow"/></svg></Link><Link className="btn" href="/#services" style={{padding:'0 4.4rem',marginLeft:'-.3rem'}}>Our Services</Link></div>
<img className="a art" style={{'--x':838,'--t':112,width:'78.4rem'}} src="/images/office.webp" alt="MS Digital Media office reception"/>
<div className="a fr-wrap ab-feats" style={{'--x':0,'--t':545,left:0,width:'100%',justifyContent:'center'}}>
<div className="feat"><svg className="i"><use href="/#target"/></svg>Strategy First</div><i className="vd"></i>
<div className="feat"><svg className="i"><use href="/#layers"/></svg>Execution Focused</div><i className="vd"></i>
<div className="feat"><svg className="i"><use href="/#chart"/></svg>Results Driven</div>
</div>
<div className="a grid3" style={{'--x':143,'--t':643,'--ww':'146.1rem',gap:'4.7rem'}}><div className="card ab"><span className="ib"><svg className="i"><use href="/#gauge"/></svg></span><div><h3>Our Mission</h3><p>To empower businesses with creative, result-oriented digital solutions.</p></div></div>
<div className="card ab"><span className="ib"><svg className="i"><use href="/#eye"/></svg></span><div><h3>Our Vision</h3><p>To be a trusted digital growth partner for businesses across industries.</p></div></div>
<div className="card ab"><span className="ib"><svg className="i"><use href="/#gem"/></svg></span><div><h3>Our Values</h3><p>Growth &nbsp;|&nbsp; Transparency &nbsp;|<br/>Creativity &nbsp;|&nbsp; Commitment</p></div></div></div>
</section>
<section className="page" id="services"><div className="wave"></div>
<div className="a" style={{'--x':130,'--t':125}}><span className="badge">OUR SERVICES</span></div>
<h1 className="a h1-serv" style={{'--x':130,'--t':168}}>Comprehensive Digital Solutions<br/>for Your <em>Business Growth.</em></h1>
<p className="lead a" style={{'--x':130,'--t':292,'--ww':'66rem',lineHeight:'2.8rem'}}>From visibility to conversions, we offer end-to-end digital marketing solutions tailored to your business goals.</p>
<div className="a ctas" style={{'--x':130,'--t':370,gap:'1.9rem'}}><Link className="btn f" href="/#contact" style={{padding:'0 4rem'}}>Get a Quote <svg className="i" style={{width:'1.9rem',height:'1.9rem'}}><use href="/#arrow"/></svg></Link><Link className="btn" href="/#contact" style={{padding:'0 3rem',fontSize:'1.75rem'}}>Discuss Your Project</Link></div>
<img className="a art" style={{'--x':900,'--t':108,width:'70rem'}} src="/images/services.webp" alt="Growth chart on a laptop with target and megaphone icons"/>
<div className="a grid3" style={{'--x':105,'--t':453,'--ww':'154.8rem',gap:'2.3rem 2.4rem'}}>{S.map((s,i)=>(<div className="card sv" key={s[1]}><span className="ib"><svg className="i"><use href={'#'+s[0]}/></svg></span><div><h3>{s[1]}</h3><p>{s[2]}</p><Link href={'/services/'+SL[i]}>Learn More <svg className="i" style={{width:'1.8rem',height:'1.8rem'}}><use href="#arrow"/></svg></Link></div></div>))}</div>
</section>
<section className="page" id="contact"><div className="wave"></div>
<div className="blob" style={{left:'72.8rem',top:'13.5rem',width:'96rem',height:'70rem',borderRadius:'46% 54% 40% 60%/22% 30% 70% 78%',background:'linear-gradient(160deg,#ff3d00 0%,#ff6a00 45%,#ffb27a 80%,#fff 100%)',opacity:'.95'}}></div>
<div className="a" style={{'--x':118,'--t':149}}><span className="badge">CONTACT US</span></div>
<h1 className="a h1-contact" style={{'--x':118,'--t':195}}>Let’s Discuss<br/>Your <em>Next Project.</em></h1>
<p className="lead a" style={{'--x':118,'--t':347,'--ww':'62rem',lineHeight:'3.1rem'}}>Have a project in mind? Get in touch with us. We’re here to help you grow your business online.</p>
<div className="a ci" style={{'--x':121,'--t':443}}><span className="ib"><svg className="i"><use href="/#phone"/></svg></span><div><b>+91 93632 88733</b><small>Mon – Sat, 10:00 AM – 7:00 PM</small></div></div>
<div className="a ci" style={{'--x':121,'--t':530}}><span className="ib"><svg className="i"><use href="/#mail"/></svg></span><div><b>businessmsdm@gmail.com</b><small>We’ll get back to you within 24 hours.</small></div></div>
<div className="a ci" style={{'--x':121,'--t':622}}><span className="ib"><svg className="i"><use href="/#pin"/></svg></span><div><b style={{fontSize:'2.1rem',lineHeight:'2.9rem'}}>Workspro – No. 25, 2nd Floor,<br/>Lakshmi Talkies Road, Shenoy Nagar,<br/>Aminjikarai, Chennai – 600030</b></div></div>
<div className="a soc" style={{'--x':121,'--t':746}}>Follow Us
<a href="https://wa.me/message/WYW6B2GTORZZB1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{background:'#25D366'}}><svg viewBox="0 0 448 512" style={{width:'52%',height:'52%'}}><path fill="#fff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
<a href="https://www.instagram.com/msdigitalmediamarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{background:'linear-gradient(45deg,#fdc468,#f5576c 45%,#c13584 75%,#833ab4)'}}><svg viewBox="0 0 448 512" style={{width:'52%',height:'52%'}}><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
<a href="https://www.linkedin.com/in/malathy-m-suresh-27b00751" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{background:'#0A66C2'}}><svg viewBox="0 0 448 512" style={{width:'48%',height:'48%'}}><path fill="#fff" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
<a href="https://www.facebook.com/profile.php?id=61558578742946" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{background:'#1877F2'}}><svg viewBox="0 0 320 512" style={{width:'48%',height:'48%'}}><path fill="#fff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V144c0-26.9 13.2-53.1 55.4-53.1H296V7.7C286.9 6.5 255.8 4 220 4 145.4 4 96 49.3 96 131.7V201.5H10.5v97.8H80z"/></svg></a>
</div>
<ContactForm/>
</section>
</>)}
