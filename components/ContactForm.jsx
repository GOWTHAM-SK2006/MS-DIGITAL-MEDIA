'use client';
import {useState} from 'react';
import {S} from '../data/services';
export default function ContactForm(){const [sent,setSent]=useState(false);return (
<form className="a form" id="form" onSubmit={e=>{e.preventDefault();const f=e.target;if(!f.checkValidity()){f.reportValidity();return}setSent(true);f.reset()}} style={{'--x':800,'--t':188,'--ww':'83.8rem',height:'62rem'}} noValidate>
<div className="fh"><span className="ib"><svg className="i"><use href="/#plane"/></svg></span><div><h2>Send Us a Message</h2><p>Fill in the details below and our team will reach out to you soon.</p></div></div>
<div className="fg">
<label className="fld"><svg className="i"><use href="/#user"/></svg><input required placeholder="Your Name *" aria-label="Your Name"/></label>
<label className="fld"><svg className="i"><use href="/#mailo"/></svg><input required type="email" placeholder="Your Email *" aria-label="Your Email"/></label>
<label className="fld"><svg className="i"><use href="/#phoneo"/></svg><input required type="tel" placeholder="Phone Number *" aria-label="Phone Number"/></label>
<label className="fld"><svg className="i" style={{color:'var(--red)'}}><use href="/#layers"/></svg><select defaultValue="" required id="sel" aria-label="Service Interested In"><option value="" disabled>Service Interested In *</option>{S.map(s=><option key={s[1]}>{s[1]}</option>)}</select><svg className="i" style={{left:'auto',right:'2.2rem',fontSize:'1.8rem',color:'#222'}}><use href="/#chev"/></svg></label>
<label className="fld t"><svg className="i"><use href="/#chat"/></svg><textarea required placeholder="Your Message *" aria-label="Your Message"></textarea></label>
<button className="send" type="submit">Send Message <svg className="i" style={{width:'2.2rem',height:'2.2rem'}}><use href="/#arrow"/></svg></button><div className="ok" style={{display:sent?'block':'none'}}>Thank you! Our team will reach out to you within 24 hours.</div></div></form>
)}
