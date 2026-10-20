import { useState } from 'react'
import './App.css'

const treatments = [
  { icon: 'laser', name: 'CO₂ Fractional Laser', detail: 'Advanced resurfacing for smoother, more radiant skin.' },
  { icon: 'sparkle', name: 'Microneedling', detail: 'A collagen-boosting treatment tailored to your skin.' },
  { icon: 'flask', name: 'Chemical Peels', detail: 'Professional exfoliation for a brighter, more even complexion.' },
  { icon: 'sun', name: 'IPL Laser Therapy', detail: 'Target pigmentation, redness and unwanted hair.' },
  { icon: 'waves', name: 'HIFU Skin Tightening', detail: 'Lift and firm with focused ultrasound technology.' },
  { icon: 'scissors', name: 'Laser Hair Removal', detail: 'Long-lasting smoothness with medical-grade laser.' },
]

const reviews = [
  {
    quote: 'Anna completely transformed my skin. After years of dealing with pigmentation, just a few sessions of IPL and the results are incredible. I’ve never felt more confident.',
    name: 'Sarah M.',
    treatment: 'IPL LASER THERAPY',
  },
  {
    quote: 'The microneedling sessions were amazing. Anna took the time to explain everything and tailor the treatment to my skin. My acne scars have faded dramatically.',
    name: 'Jessica L.',
    treatment: 'MICRONEEDLING + BOOSTER',
  },
  {
    quote: 'I’ve tried many clinics in Adelaide but Anna Skin is on another level. The attention to detail, the expertise, and the results speak for themselves.',
    name: 'Priya K.',
    treatment: 'HIFU SKIN TIGHTENING',
  },
]

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: "Simply DM us on Instagram @anna_skin_care or contact us directly. We'll find a time that works best for you.",
  },
  {
    question: 'Is there a consultation fee?',
    answer: 'We offer complimentary initial consultations to assess your skin and discuss treatment options.',
  },
  {
    question: 'How many sessions will I need?',
    answer: "This varies by treatment and individual skin concerns. During your consultation, we'll create a personalised treatment plan with clear expectations.",
  },
  {
    question: 'Is there any downtime after treatments?',
    answer: "Downtime varies depending on the treatment. We'll discuss what to expect before, during, and after each session so you can plan accordingly.",
  },
  {
    question: 'Are your treatments safe?',
    answer: 'Absolutely. We use only TGA-approved, medical-grade devices and products that meet Australian safety standards. Anna is fully certified and trained in all treatments offered.',
  },
]

const reasonsToChooseAnna = [
  {
    icon: 'award',
    title: '12+ Years Experience',
    description: 'Over a decade of hands-on expertise in advanced skin therapy and aesthetic treatments.',
  },
  {
    icon: 'shield',
    title: 'Medical-Grade Technology',
    description: 'We use only TGA-approved, medical-grade devices that meet the highest Australian safety and efficacy standards.',
  },
  {
    icon: 'heart',
    title: 'Personalised Approach',
    description: 'Every treatment plan is tailored to your unique skin type, concerns, and goals — no cookie-cutter solutions.',
  },
]

const expertiseAreas = [
  'Skin Tightening & Lifting',
  'Acne & Acne Scarring',
  'Pigmentation Correction',
  'Texture Refinement',
  'Skin Rejuvenation',
  'Anti-Aging Treatments',
  'Laser Hair Removal',
  'Body Contouring',
]

const iconPaths = {
  laser: <><path d="m13 2-3 8h7l-6 12 1-9H6l7-11Z" /></>,
  sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.4L22.5 17l-2.4 1.1L19 20.5l-1.1-2.4-2.4-1.1 2.4-.6L19 14Z" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5.2 9.1A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.9L14 9V3" /><path d="M8 15h8" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
  waves: <><path d="M3 8c2.2-2 4.4-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0M3 13c2.2-2 4.4-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0M3 18c2.2-2 4.4-2 6.5 0s4.3 2 6.5 0 4.3-2 6.5 0" /></>,
  scissors: <><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="m8 8 12 12M8 16 20 4m-5 3 3 3" /></>,
}

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="Anna Skin Care home">
      <span className="brand-name">Anna<span className="brand-butterfly">✿</span></span>
      <span className="brand-subtitle">skin care</span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const requestedPage = window.location.pathname.split('/').filter(Boolean)[0] || 'home'
  const page = ['about', 'services', 'pricing', 'contact'].includes(requestedPage)
    ? requestedPage
    : 'home'
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="/about" target="_blank" rel="noreferrer" onClick={closeMenu}>About</a>
            <a href="/services" target="_blank" rel="noreferrer" onClick={closeMenu}>Services</a>
            <a href="/pricing" target="_blank" rel="noreferrer" onClick={closeMenu}>Pricing</a>
            <a href="/contact" target="_blank" rel="noreferrer" onClick={closeMenu}>Contact</a>
            <a className="mobile-book" href="/contact" target="_blank" rel="noreferrer" onClick={closeMenu}>Book Now</a>
            <div className="mobile-menu-footer">
              <span />
              <p>Adelaide&apos;s boutique skin studio</p>
            </div>
          </nav>
          <a className="header-book" href="/contact" target="_blank" rel="noreferrer">Book Now</a>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className={`page-content page-${page}`}>
        {page === 'home' && <section className="hero" id="home">
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow eyebrow-light">Adelaide’s boutique skin specialist studio</p>
            <h1>Your Skin,<br />Our Expertise</h1>
            <p className="hero-copy">
              Over 12 years of advanced Adelaide skin care. Medical-grade treatments personalised by your trusted skin specialist to reveal your most radiant self.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#contact">Book an appointment</a>
              <a className="button button-outline-light" href="#services">View treatments</a>
            </div>
            <a className="scroll-cue" href="#about" aria-label="Scroll to learn about Anna Skin Care">
              <span />
            </a>
          </div>
          <p className="hero-index">01 <span /> 04</p>
        </section>}

        <section className="intro section-pad" id="about">
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85"
              alt="A relaxing, professional facial treatment"
            />
            <span className="image-caption">A considered approach to your skin</span>
          </div>
          <div className="intro-copy">
            <p className="eyebrow">About us</p>
            <h2>Where Science Meets Skincare</h2>
            <span className="short-rule" />
            <p>
              Anna Skin Adelaide is a boutique skin and aesthetic studio dedicated to delivering real, visible, and lasting skin results. With over 12 years of experience, Anna combines clinical expertise with a genuine passion for helping you feel confident in your own skin.
            </p>
            <div className="stats">
              <div><strong>12<span>+</span></strong><small>Years experience</small></div>
              <div><strong>500<span>+</span></strong><small>Happy clients</small></div>
              <div><strong>30<span>+</span></strong><small>Treatments</small></div>
            </div>
            <a className="button button-outline-dark" href="#contact">Learn more</a>

            {/* <a className="text-link" href="#results">Discover our approach <span>↗</span></a> */}
          </div>
        </section>

        <section className="meet-anna section-pad" id="meet-anna">
          <div className="meet-anna-content">
            <p className="eyebrow">Meet Anna</p>
            <h2>A Passion Born From Purpose</h2>
            <p>
              Anna&apos;s journey into skincare began with a personal mission — to help people feel confident in their own skin. After years of training across multiple disciplines and earning certifications in advanced aesthetic treatments, Anna opened her boutique studio in Adelaide.
            </p>
            <p>
              What started as a small practice has blossomed into one of Adelaide&apos;s most trusted skin clinics, known for honest consultations, transparent pricing, and treatments that genuinely deliver. Every client who walks through our doors receives the same level of care and attention — because your skin deserves nothing less.
            </p>
            <div className="promise-card">
              <h3>Our Promise</h3>
              <span className="short-rule" />
              <ul>
                <li>Honest, no-pressure consultations</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Medical-grade treatments only</li>
                <li>Ongoing skin health support</li>
                <li>Results you can see and feel</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="why-choose section-pad" id="why-choose">
          <div className="section-heading">
            <p className="eyebrow">Why choose us</p>
            <h2>The Anna Skin Difference</h2>
            <span className="short-rule" />
          </div>
          <div className="reason-grid">
            {reasonsToChooseAnna.map((reason, index) => (
              <article className="reason-card" key={reason.title}>
                <svg className="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {index === 0 && <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-3 4.5 3-1-9" /></>}
                  {index === 1 && <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />}
                  {index === 2 && <path d="M20.8 8.6c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.8 2.1Z" />}
                </svg>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <p className="eyebrow">The Anna Skin edit</p>
            <h2>Our Services</h2>
            <p>Discover our comprehensive range of advanced skin treatments designed to nourish, rejuvenate, and enhance your skin’s natural beauty.</p>
          </div>
          <div className="treatment-grid">
            {treatments.map((treatment, index) => (
              <a className="treatment-card" href="#contact" key={treatment.name}>
                <span className="card-number">0{index + 1}</span>
                <svg className="treatment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {iconPaths[treatment.icon]}
                </svg>
                <h3>{treatment.name}</h3>
                <p>{treatment.detail}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <a className="text-link services-link" href="#contact">View all treatments <span>→</span></a>
        </section>

        <section className="approach" id="results">
          <div className="approach-image" role="img" aria-label="Skincare products and treatment essentials" />
          <div className="approach-content">
            <p className="eyebrow eyebrow-light">Skin, understood</p>
            <h2>Where science meets <em>skin care.</em></h2>
            <p>
              Great skin is personal. Every treatment begins with a thoughtful conversation, a careful assessment, and a plan created just for you.
            </p>
            <div className="approach-points">
              <div><span>01</span><p><strong>Personalised care</strong><small>A treatment journey tailored to your skin goals.</small></p></div>
              <div><span>02</span><p><strong>Medical-grade technology</strong><small>Evidence-led treatments and trusted products.</small></p></div>
              <div><span>03</span><p><strong>Results that last</strong><small>Long-term skin health, never quick fixes.</small></p></div>
            </div>
            <a className="button button-outline-light" href="#contact">Meet your skin specialist</a>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise">
          <div className="expertise-panel">
            <div className="section-heading">
              <p className="eyebrow">Areas of expertise</p>
              <h2>What We Specialise In</h2>
              <span className="short-rule" />
            </div>
            <div className="expertise-grid">
              {expertiseAreas.map((area) => (
                <div className="expertise-card" key={area}>{area}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="partners section-pad" id="partners">
          <div className="section-heading">
            <p className="eyebrow">Trusted partners</p>
            <h2>Brands We Work With</h2>
            <span className="short-rule" />
          </div>
          <div className="partner-grid" aria-label="Our skincare partners">
            <div className="partner-card">Thalgo</div>
            <div className="partner-card">ASAP Skincare</div>
            <div className="partner-card">Dermalogica</div>
          </div>
        </section>

        <section className="pricing section-pad" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Thoughtful care, clear pricing</p>
            <h2>Treatment Pricing</h2>
            <span className="short-rule" />
          </div>
          <div className="price-list">
            <article className="price-card">
              <div className="price-card-heading">
                <h3>HIFU + Radio Frequency</h3>
                <span>Free RF session</span>
              </div>
              <div className="price-row"><span>Full Face Lifting</span><strong>$345</strong></div>
              <div className="price-row"><span>Eye Area &amp; Brow Lifting</span><strong>$129</strong></div>
              <div className="price-row"><span>Double Chin &amp; Jawline</span><strong>$179</strong></div>
              <div className="price-row"><span>Full Face + Double Chin</span><strong>$450</strong></div>
            </article>
            <article className="price-card">
              <div className="price-card-heading"><h3>Chemical Peels</h3></div>
              <div className="price-row"><span>Glow Refresh Peel</span><strong>$140</strong></div>
              <div className="price-row"><span>Acne Clarifying Peel</span><strong>$150</strong></div>
              <div className="price-row"><span>Melanostop Depigment Peel</span><strong>$180</strong></div>
              <div className="price-row"><span>Premium Combination Peel</span><strong>$190</strong></div>
            </article>
            <article className="price-card">
              <div className="price-card-heading">
                <h3>Specialty Treatments</h3>
                <span>Sale</span>
              </div>
              <div className="price-row"><span>CO₂ Fractional Laser</span><strong><del>$700</del> $350</strong></div>
              <div className="price-row"><span>Premium Microneedling with Exosome (Exomide)</span><strong>$245</strong></div>
              <div className="price-row"><span>Mesotherapy Booster – Single Session</span><strong>$165</strong></div>
              <div className="price-row"><span>Mesotherapy Booster – 3 Sessions</span><strong>$425</strong></div>
            </article>
          </div>
        </section>

        <section className="testimonials section-pad" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Kind words</p>
            <h2>What our clients say</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{review.quote}”</blockquote>
                <div className="review-author">
                  <span>{review.name}</span>
                  <small>{review.treatment}</small>
                </div>
              </article>
            ))}
          </div>
          <div className="review-footnote"><span>★★★★★</span> Loved by clients across Adelaide</div>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="eyebrow">Take the first step</p>
          <h2>Begin your skin journey<br />today.</h2>
          <p className="contact-copy">Start your transformation with a personalised consultation. Let Anna assess your skin and recommend the perfect treatment plan — no obligation, no pressure.</p>
          <div className="contact-actions">
            <a className="button button-brown" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Book a consultation</a>
            <a className="button button-outline-brown" href="/pricing" target="_blank" rel="noreferrer">View Pricing</a>
          </div>
          <span className="contact-flower" aria-hidden="true">✳</span>
        </section>

        <section className="faqs section-pad" id="faqs">
          <div className="section-heading">
            <p className="eyebrow">Common questions</p>
            <h2>Frequently Asked</h2>
            <span className="short-rule" />
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>Adelaide’s boutique skin specialist studio.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-title">Explore</span><a href="/about">About</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a></div>
            <div><span className="footer-title">Get in touch</span><a href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Instagram</a><a href="/contact">Book Now</a><span>Adelaide, South Australia</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Anna Skin Care</span><span>Thoughtful care. Beautiful skin.</span></div>
      </footer>
    </>
  )
}

export default App
