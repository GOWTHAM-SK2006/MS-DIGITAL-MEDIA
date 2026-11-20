import Link from 'next/link';
import {S,SL} from '../data/services';
import ContactForm from '../components/ContactForm';
export default function Home(){return (<>
<section className="page" id="home"><div className="wave"></div>
<div className="a home-c" style={{'--x':730,'--t':117,left:'0',width:'100%',textAlign:'center'}}><span className="badge">DIGITAL MARKETING AGENCY</span></div>
<h1 className="a home-c" style={{'--x':0,'--t':166,left:'0',width:'100%',textAlign:'center'}}>Navigate Your Business<br/>Towards <em>Digital Growth.</em></h1>
<p className="lead a home-c" style={{'--x':0,'--t':300,left:'0',width:'100%',textAlign:'center'}}>Strategic marketing. Creative thinking. Smarter digital experiences.<br/>We help businesses attract the right audience and grow with confidence.</p>
<div className="a ctas home-c" style={{'--x':660,'--t':382}}><Link className="btn f" href="/#contact" style={{padding:'0 4.2rem'}}>Get a Quote <svg className="i" style={{width:'1.9rem',height:'1.9rem'}}><use href="/#arrow"/></svg></Link><Link className="btn" href="/#services">Our Services</Link></div>
<div className="a fr-wrap" style={{'--x':435,'--t':461}}>
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
<div className="a fr-wrap ab-feats" style={{'--x':272,'--t':539}}>
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
<span style={{background:'#25D366'}}><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600-.4.400c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.100.100.1.600-.1 1.200z"/></svg></span>
<span style={{background:'linear-gradient(45deg,#fdc468,#f5576c 45%,#c13584 75%,#833ab4)'}}><svg viewBox="0 0 24 24" style={{fill:'none',stroke:'#fff',strokeWidth:'2'}}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg></span>
<span style={{background:'#0A66C2',fontWeight:'800',fontSize:'2.3rem'}}>in</span>
<span style={{background:'#1877F2',fontWeight:'800',fontSize:'2.8rem',fontFamily:'Arial'}}>f</span></div>
<ContactForm/>
</section>
</>)}
