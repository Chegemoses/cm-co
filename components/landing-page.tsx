'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Menu,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  XIcon,
} from 'lucide-react'

const offerings = [
  { number: '01', title: 'IT & Tech Support', description: 'Automated helpdesk routing, asset management, and infrastructure maintenance platforms that slash resolution times.', icon: Network },
  { number: '02', title: 'Cybersecurity & Security Analysis', description: 'Proactive threat hunting, vulnerability assessments, and penetration testing suites for resilient defenses.', icon: ShieldCheck },
  { number: '03', title: 'Coding & Full-Stack Development', description: 'Custom scalable web applications, APIs, and enterprise software architecture built with modern frameworks.', icon: Code2 },
  { number: '04', title: 'Data Analysis & AI Solutions', description: 'Predictive analytics dashboards, automated quantitative pipelines, and practical machine learning integration.', icon: BarChart3 },
]

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!message.trim()) return
    setSent(true)
    setMessage('')
  }

  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <header className="site-header container">
          <a href="#home" className="brand" aria-label="CM & Co Tech Firm home">
            <img className="brand-symbol" src="/cm-co-symbol.png" alt="" />
            <span className="brand-name"><span>CM &amp; Co</span><span>Tech Firm</span></span>
          </a>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a href="#contact" className="header-cta">Start a conversation <ArrowRight size={16} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </header>

        <div className="hero-content container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> ENTERPRISE TECHNOLOGY PARTNER</p>
            <h1>Engineering clarity into <span>complex systems.</span></h1>
            <p className="hero-lede">We bridge corporate infrastructure and next-generation software — building secure, resilient systems that make ambitious organizations move better.</p>
            <div className="hero-actions">
              <a href="#solutions" className="button button-primary">Explore solutions <ArrowRight size={17} /></a>
              <a href="#contact" className="button button-ghost">Get in touch <span className="button-dot" /></a>
            </div>
            
          </div>
          <div className="orb-stage" aria-label="Abstract floating glass orbs representing connected systems" role="img">
            <div className="orb orb-one"><span>CM</span></div>
            <div className="orb orb-two"><span /></div>
            <div className="orb orb-three"><span /></div>
            <div className="orb orb-four"><span /></div>
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
            <div className="stage-label"><span className="pulse-dot" /> Systems in motion <small>01 — 04</small></div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><ChevronDown size={16} /></div>
      </section>

      <section className="intro-section section-padding" id="about">
        <div className="container intro-grid">
          <div className="section-kicker"><i /> Who we are</div>
          <div className="intro-copy"><h2>Technology should remove friction, <em>not create it.</em></h2><p>Founded in the heart of Westlands, Nairobi, CM &amp; Co Tech Firm was built on a simple premise: the right technology makes good organizations exceptional.</p><p>We streamline corporate IT operations, automate workflows, and bring elite engineering standards to every system we touch.</p><a href="#approach" className="text-link">Our perspective <ArrowRight size={16} /></a></div>
          <div className="principle-card"><div className="principle-icon"><Target size={20} /></div><p className="quote">“Think like attackers, build like defenders.”</p><span>Our guiding principle</span></div>
        </div>
      </section>

      <section className="solutions-section section-padding" id="solutions">
        <div className="container"><div className="section-heading"><div><div className="section-kicker"><i /> What we do</div><h2>Built for the <em>critical.</em></h2></div><p>From the everyday to the existential, our solutions create the operational confidence to focus on what matters next.</p></div>
          <div className="offerings-grid">{offerings.map(({ number, title, description, icon: Icon }) => <article className="offering-card" key={number}><div className="card-top"><span aria-hidden="true" /> <Icon size={22} /></div><h3>{title}</h3><p>{description}</p><a href="#launch" className="card-link" aria-label={`Explore ${title}`}>Explore platform <ArrowRight size={15} /></a></article>)}</div>
        </div>
      </section>

      <section className="approach-section section-padding" id="approach"><div className="container approach-grid"><div className="approach-visual"><div className="presentation-scene"><div className="presentation-screen"><span className="screen-kicker">CM &amp; CO / ADVISORY</span><strong>Make technology<br /><em>work harder.</em></strong><div className="screen-diagram"><i /><i /><i /><span>secure systems</span><span>better operations</span></div></div><div className="presentation-table"><span /><span /><span /></div><div className="team-member member-one" /><div className="team-member member-two" /><div className="team-member member-three" /></div></div><div className="approach-copy"><div className="section-kicker"><i /> How we work</div><h2>Precision at every <em>layer.</em></h2><p>We work alongside your teams to understand the full picture, find the pressure points, and build systems that hold up under real-world demand.</p><div className="approach-list"><div><span>01</span><p><strong>Understand deeply.</strong> We begin with context, not assumptions.</p></div><div><span>02</span><p><strong>Build deliberately.</strong> Every line of code earns its place.</p></div><div><span>03</span><p><strong>Stay accountable.</strong> Your outcomes are our north star.</p></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div><div className="section-kicker light"><i /> Let&apos;s work together</div><h2>Ready to make<br /><em>complexity</em> work?</h2><p>Tell us where the friction is. We’ll help you find the way forward.</p></div><form className="contact-card enquiry-form" onSubmit={(event) => event.preventDefault()}><span className="card-label">Direct line</span><div className="enquiry-fields"><input type="text" placeholder="Your name" aria-label="Your name" required /><input type="email" placeholder="Work email" aria-label="Work email" required /><textarea placeholder="Tell us about your enquiry" aria-label="Tell us about your enquiry" rows={4} required /></div><button type="submit" className="button button-light">Send an enquiry <Send size={15} /></button></form></div></section>

      <footer className="footer"><div className="container footer-top"><div className="footer-brand"><a href="#home" className="brand" aria-label="CM & Co Tech Firm home"><img className="brand-symbol" src="/cm-co-symbol.png" alt="" /><span className="brand-name"><span>CM &amp; Co</span><span>Tech Firm</span></span></a><p>Enterprise systems.<br />Engineered with intent.</p></div><div className="footer-column"><h4>Explore</h4><a href="#about">About us</a><a href="#solutions">Solutions</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div><div className="footer-column"><h4>Connect</h4><a href="mailto:hello@cmco.tech">Email support</a><a href="tel:+254700000000">Phone / WhatsApp</a><div className="socials"><a href="#linkedin" aria-label="LinkedIn">in</a><a href="#facebook" aria-label="Facebook">f</a><a href="#instagram" aria-label="Instagram">◎</a><a href="#x" aria-label="X"><XIcon /></a></div></div><div className="newsletter"><h4>Stay in the loop</h4><p>Occasional notes on systems, security, and what’s next.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Your work email" aria-label="Your work email" required /><button aria-label="Subscribe"><ArrowRight size={17} /></button></form></div></div><div className="container footer-bottom"><span>© 2026 CM &amp; Co Tech Firm. All rights reserved.</span><span>Privacy policy &nbsp; / &nbsp; Terms of use</span><span>Made with intention in Nairobi <Sparkles size={13} /></span></div></footer>

      <div className={chatOpen ? 'chat-widget open' : 'chat-widget'}><button className="chat-trigger" onClick={() => setChatOpen(!chatOpen)} aria-expanded={chatOpen}><Bot size={20} /><span>{chatOpen ? 'Close chat' : 'Chat with CM & Co Support'}</span>{chatOpen ? <X size={17} /> : <span className="chat-live-dot" />}</button>{chatOpen && <div className="chat-drawer"><div className="chat-drawer-head"><div><strong>CM &amp; Co Support</strong><span><i /> Usually replies within a few hours</span></div><CircleDot size={18} /></div><div className="chat-body">{sent ? <div className="chat-success"><Check size={24} /><strong>Message received.</strong><span>Our team will be in touch shortly.</span></div> : <><div className="chat-greeting">Hello. How can we help you move forward?</div><div className="chat-suggestion">I’d like to discuss a project <ArrowRight size={14} /></div><div className="chat-suggestion">I need IT support <ArrowRight size={14} /></div></>}</div><form className="chat-form" onSubmit={sendMessage}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..." aria-label="Write a message" /><button aria-label="Send message"><Send size={16} /></button></form></div>}</div>
    </main>
  )
}


export default LandingPage
