import { useLayoutEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import PricingPage from './pages/PricingPage'
import ServicesPage from './pages/ServicesPage'
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

const serviceGroups = [
  {
    title: 'Advanced Skin Treatments',
    description: 'Our most powerful, results-driven treatments using medical-grade technology to target deep skin concerns.',
    icon: 'sparkle',
    treatments: [
      {
        name: 'CO₂ Fractional Laser',
        summary: 'Advanced skin resurfacing for scars, wrinkles, enlarged pores, and uneven texture.',
        description: "This gold-standard laser creates micro-columns of thermal energy in the skin, triggering your body's natural healing response. New collagen production smooths scars, reduces wrinkles, and refines pores over 4–6 weeks. Ideal for acne scarring, sun damage, and age-related texture changes.",
        duration: '45–60 min',
        downtime: '5–7 days',
      },
      {
        name: 'Q-Switched Laser',
        summary: 'Precision pigmentation removal and tattoo removal with minimal downtime.',
        description: 'Ultra-short pulses of light energy shatter pigment particles beneath the skin, which your body then naturally eliminates. Effective on sun spots, melasma, age spots, and all ink colours for tattoo removal.',
        duration: '20–40 min',
        downtime: '2–5 days',
      },
      {
        name: 'Microneedling + Booster Therapy',
        summary: 'Collagen-boosting treatment with custom mesotherapy cocktails for hydration & repair.',
        description: 'Fine needles create controlled micro-injuries to stimulate collagen and elastin production. Combined with custom mesotherapy serums (hyaluronic acid, peptides, vitamins) that penetrate deep into the skin for enhanced results. A favourite for overall skin rejuvenation.',
        duration: '60 min',
        downtime: '1–3 days',
      },
      {
        name: 'Radio Frequency Skin Tightening',
        summary: 'Non-invasive lifting and firming using controlled thermal energy.',
        description: 'RF energy heats the deeper layers of skin to stimulate collagen remodelling and elastin production. Results in tighter, firmer skin with improved contours — particularly effective on the jawline, neck, and around the eyes.',
        duration: '30–45 min',
        downtime: 'None',
      },
      {
        name: 'HIFU (High-Intensity Focused Ultrasound)',
        summary: 'Deep tissue lifting and contouring without surgery.',
        description: 'Ultrasound energy targets the deep structural layers of the skin (SMAS layer) — the same layer addressed in surgical facelifts. Stimulates long-term collagen renewal for natural lifting and tightening that improves over 2–3 months.',
        duration: '60–90 min',
        downtime: 'None',
      },
      {
        name: 'IPL Laser',
        summary: 'Broad-spectrum light therapy for pigmentation, redness, and vascular concerns.',
        description: 'Intense pulsed light targets melanin and haemoglobin to treat sun spots, rosacea, broken capillaries, and diffuse redness. Evens skin tone and improves overall clarity with minimal discomfort.',
        duration: '30 min',
        downtime: '1–3 days',
      },
      {
        name: 'Hair Loss & Scalp Rejuvenation',
        summary: 'Stimulate follicle regrowth and improve scalp health with targeted therapy.',
        description: 'A combination of laser therapy and specialised scalp treatments designed to improve blood circulation, nourish dormant follicles, and promote healthier, thicker hair growth. Suitable for both men and women experiencing thinning.',
        duration: '45 min',
        downtime: 'None',
      },
    ],
  },
  {
    title: 'Advanced Facial & Skin Therapy',
    description: 'Luxurious facial treatments combining clinical-grade ingredients with relaxing techniques for visible results.',
    icon: 'flask',
    treatments: [
      {
        name: 'Carbon Laser Peel',
        summary: "Deep-cleansing 'Hollywood Peel' for oil control, pore refinement, and instant glow.",
        description: 'A layer of liquid carbon is applied to the skin, then vaporised with a laser. This process deeply cleanses pores, reduces oiliness, and stimulates collagen — a red-carpet favourite.',
        duration: '30 min',
        downtime: 'None',
      },
      {
        name: 'Deep Cleansing & Hydration Facial',
        summary: 'Multi-step facial with extraction, hydration infusion, and LED light therapy.',
        description: 'A comprehensive facial experience including double cleansing, gentle exfoliation, professional extractions, targeted serum infusion, and LED light therapy. Customised to your skin type for deep nourishment and a healthy glow.',
        duration: '60–75 min',
        downtime: 'None',
      },
      {
        name: 'Microdermabrasion',
        summary: 'Crystal-free exfoliation to smooth texture and boost product absorption.',
        description: 'A diamond-tip handpiece gently resurfaces the outermost layer of skin, removing dead cells and improving texture. Excellent as a standalone treatment or as preparation before other advanced treatments for enhanced product penetration.',
        duration: '30–40 min',
        downtime: 'None',
      },
      {
        name: 'Galvanic Therapy',
        summary: 'Electrical current-assisted deep product penetration for enhanced nourishment.',
        description: 'Low-level galvanic current drives active ingredients deeper into the skin than topical application alone. Ideal for boosting hydration, reducing puffiness, and improving the efficacy of your treatment serums.',
        duration: '30 min',
        downtime: 'None',
      },
      {
        name: 'Oxygen Therapy',
        summary: 'Pressurised oxygen infusion for instant hydration, plumping, and radiance.',
        description: 'Hyperbaric oxygen is infused into the skin along with custom serums containing hyaluronic acid, peptides, and botanical extracts. Instantly plumps and hydrates for a dewy, refreshed complexion. Perfect before events.',
        duration: '45 min',
        downtime: 'None',
      },
      {
        name: 'SQT Bio-Microneedling',
        summary: 'Natural spicule-based treatment stimulating collagen without traditional needles.',
        description: 'Derived from natural sea sponge spicules, this treatment creates micro-channels in the skin to stimulate collagen and cell renewal — without the use of mechanical needles. Effective for acne, pigmentation, fine lines, and overall skin renewal.',
        duration: '45 min',
        downtime: '2–3 days',
      },
      {
        name: 'Advanced Chemical Peels',
        summary: 'Medical-grade peels customised to your skin type for renewal and brightening.',
        description: "Professional-strength acid peels (glycolic, lactic, salicylic, or combination) dissolve dead skin cells and stimulate cellular turnover. Tailored to your skin's needs — from gentle brightening to deep resurfacing for scarring and hyperpigmentation.",
        duration: '30–45 min',
        downtime: '3–7 days',
      },
    ],
  },
  {
    title: 'Hair Removal & Body Treatments',
    description: 'Comprehensive body treatments from permanent hair reduction to non-surgical contouring solutions.',
    icon: 'scissors',
    treatments: [
      {
        name: 'Laser Hair Removal',
        summary: 'Long-lasting hair reduction for face and body using advanced IPL/laser technology.',
        description: 'Light energy targets the melanin in hair follicles, disabling regrowth at the root. Suitable for most skin types and body areas including face, underarms, bikini, legs, and back. Multiple sessions achieve progressive, long-lasting smoothness.',
        duration: '15–60 min',
        downtime: 'None',
      },
      {
        name: 'Fat Cavitation',
        summary: 'Ultrasound-based fat cell disruption for non-invasive body sculpting.',
        description: 'Low-frequency ultrasound waves create pressure changes that rupture fat cell membranes, releasing their contents for natural elimination by the body. Targets stubborn fat deposits on the abdomen, thighs, and flanks.',
        duration: '30–45 min',
        downtime: 'None',
      },
      {
        name: 'RF Body Contouring',
        summary: 'Radiofrequency skin tightening for a firmer, smoother body silhouette.',
        description: 'Controlled radiofrequency energy heats the dermal layer to stimulate collagen contraction and new collagen production. Tightens loose skin after weight loss or aging, and improves the appearance of cellulite.',
        duration: '30–45 min',
        downtime: 'None',
      },
      {
        name: 'Cosmetic Tattoo – Lip Blush',
        summary: 'Semi-permanent lip colour for natural-looking definition and fullness.',
        description: 'A delicate tattooing technique deposits custom-blended pigment into the lips for a soft, natural-looking wash of colour. Enhances lip shape, symmetry, and definition — lasting 2–3 years with proper care.',
        duration: '90–120 min',
        downtime: '3–5 days',
      },
      {
        name: 'Body Tattoo Removal',
        summary: 'Precision Q-Switched laser removal for unwanted body tattoos.',
        description: 'The Q-Switched laser delivers rapid, high-intensity pulses that fragment tattoo ink particles beneath the skin. Your immune system then gradually clears the fragmented ink. Multiple sessions are typically needed depending on ink colour, depth, and age.',
        duration: '15–30 min',
        downtime: '3–7 days',
      },
    ],
  },
]

const pricingCategories = [
  {
    title: 'Hydrafacial Treatments',
    badge: 'Sale',
    treatments: [
      { name: 'Signature Hydrafacial', originalPrice: '$168', price: '$140' },
      { name: 'Deluxe Hydrafacial', originalPrice: '$192', price: '$160' },
      { name: 'Platinum Hydrafacial', originalPrice: '$210', price: '$175' },
      { name: 'Teen / Acne-Prone Hydrafacial', originalPrice: '$179', price: '$149' },
      { name: 'Microneedling w/ Booster', originalPrice: '$198', price: '$165' },
    ],
  },
  {
    title: 'IPL Laser',
    treatments: [
      { name: 'Full Face – Pigmentation', price: '$149' },
      { name: 'Full Face – Skin Rejuvenation', price: '$139' },
      { name: 'Full Face – Vascular & Redness', price: '$139' },
      { name: 'Cheeks / Nose – Pigmentation or Redness', price: '$65' },
      { name: 'Neck', price: '$70' },
      { name: 'Full Face + Neck', price: '$179' },
      { name: 'Full Face + Neck + Décolletage', price: '$220' },
      { name: '3-Session Package – Rejuvenation', price: '$319' },
    ],
  },
  {
    title: 'HIFU + Radio Frequency',
    badge: 'Free RF session',
    treatments: [
      { name: 'Full Face Lifting', price: '$345' },
      { name: 'Eye Area & Brow Lifting', price: '$129' },
      { name: 'Double Chin & Jawline', price: '$179' },
      { name: 'Full Face + Double Chin', price: '$450' },
    ],
  },
  {
    title: 'Chemical Peels',
    treatments: [
      { name: 'Glow Refresh Peel', price: '$140' },
      { name: 'Acne Clarifying Peel', price: '$150' },
      { name: 'Melanostop Depigment Peel', price: '$180' },
      { name: 'Premium Combination Peel', price: '$190' },
    ],
  },
  {
    title: 'Specialty Treatments',
    badge: 'Sale',
    treatments: [
      { name: 'CO2 Fractional Laser', originalPrice: '$700', price: '$350' },
      { name: 'Premium Microneedling with Exosome (Exomide)', price: '$245' },
      { name: 'Mesotherapy Booster – Single Session', price: '$165' },
      { name: 'Mesotherapy Booster – 3 Sessions', price: '$425' },
      { name: 'SQT Bio Microneedling', originalPrice: '$350', price: '$249' },
      { name: 'Exosome Therapy with Microneedling', originalPrice: '$249', price: '$199' },
      { name: 'Hair Loss Treatment – Single Session', price: '$160' },
      { name: 'Hair Loss Treatment – 3 Sessions', price: '$429' },
    ],
  },
  {
    title: 'Tattoo Removal',
    treatments: [
      { name: 'Eyebrow Tattoo Removal – 1 Session', price: '$170' },
      { name: 'Body XS – 1 Session / 3 Sessions', price: '$80 / $210' },
      { name: 'Body S – 1 Session / 3 Sessions', price: '$120 / $320' },
      { name: 'Body M – 1 Session / 3 Sessions', price: '$180 / $470' },
      { name: 'Body L – 1 Session / 3 Sessions', price: '$250 / $650' },
    ],
  },
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
    <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label="Anna Skin Care home">
      <img className="brand-logo" src="/img/logo200.png" alt="Anna Skin Care" />
    </Link>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, key } = useLocation()
  const requestedPage = pathname.split('/').filter(Boolean)[0] || 'home'
  const page = ['home', 'about', 'services', 'pricing', 'contact'].includes(requestedPage)
    ? requestedPage : 'not-found'
  const closeMenu = () => setMenuOpen(false)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [key])

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <a className="mobile-book" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer" onClick={closeMenu}>Book Now</a>
            <div className="mobile-menu-footer">
              <span />
              <p>Adelaide&apos;s boutique skin studio</p>
            </div>
          </nav>
          <a className="header-book" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Book Now</a>
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

      <Routes>
      <Route path="/services" element={<ServicesPage groups={serviceGroups} />} />
      <Route path="/pricing" element={<PricingPage categories={pricingCategories} />} />
      <Route path="/:page?" element={<main className={`page-content page-${page}`}>
        {page === 'not-found' ? (
          <section className="section-pad">
            <h1>Page not found</h1>
            <Link to="/">Return home</Link>
          </section>
        ) : <>
        {page === 'home' && <section className="hero" id="home">
          <div className="hero-gallery" aria-hidden="true">
            <img src="/img/_TAN5816.jpg" alt="" fetchPriority="high" />
            <img src="/img/_TAN5876.jpg" alt="" fetchPriority="high" />
            <img src="/img/_TAN5940.jpg" alt="" fetchPriority="high" />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow eyebrow-light">Adelaide’s boutique skin specialist studio</p>
            <h1>Your Skin,<br />Our Expertise</h1>
            <p className="hero-copy">
              Over 12 years of advanced Adelaide skin care. Medical-grade treatments personalised by your trusted skin specialist to reveal your most radiant self.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Book an appointment</a>
              <Link className="button button-outline-light" to="/services">View treatments</Link>
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
              src="/img/results1.jpg"
              alt="Anna performing a focused skin treatment"
              loading="lazy"
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
            <Link className="button button-outline-dark" to="/about">Learn more</Link>

            {/* <a className="text-link" href="#results">Discover our approach <span>↗</span></a> */}
          </div>
        </section>

        <section className="meet-anna section-pad" id="meet-anna">
          <div className="meet-anna-layout">
            <figure className="meet-anna-photo">
              <img src="/img/anna.jpg" alt="Anna, founder and skin specialist at Anna Skin Care" loading="lazy" />
              <figcaption><strong>Anna</strong><span>Founder &amp; Skin Specialist</span></figcaption>
            </figure>
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
              <a className="treatment-card" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer" key={treatment.name}>
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
          <Link className="text-link services-link" to="/services">View all treatments <span>→</span></Link>
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
            <a className="button button-outline-light" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Meet your skin specialist</a>
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
            <Link className="button button-outline-brown" to="/pricing">View Pricing</Link>
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
        </>}
      </main>} />
      <Route path="*" element={<main className="page-content page-not-found"><section className="section-pad"><h1>Page not found</h1><Link to="/">Return home</Link></section></main>} />
      </Routes>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>Adelaide’s boutique skin specialist studio.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-title">Explore</span><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/pricing">Pricing</Link><Link to="/contact">Contact</Link></div>
            <div><span className="footer-title">Get in touch</span><a href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Book Now</a><span>Adelaide, South Australia</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Anna Skin Care</span><span>Thoughtful care. Beautiful skin.</span></div>
      </footer>
    </>
  )
}

export default App
