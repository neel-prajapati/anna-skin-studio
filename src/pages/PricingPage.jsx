const pricingImages = [
  { src: '/img/results3.jpg', alt: 'Anna performing an advanced skin treatment', caption: 'Advanced skin treatments' },
  { src: '/img/results2.jpg', alt: 'LED light therapy treatment', caption: 'Technology-led skin care' },
  { src: '/img/medicines2.JPG', alt: 'Microneedling and advanced skin boosters', caption: 'Professional skin boosters' },
  { src: '/img/medicines3.JPG', alt: 'Professional microneedling device and serums', caption: 'Clinical-grade products' },
]

export default function PricingPage({ categories }) {
  return (
    <main className="page-content page-pricing">
      <section className="pricing section-pad" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">Investment in you</p>
          <h2>Treatment Pricing</h2>
          <span className="short-rule" />
        </div>
        <article className="pricing-package">
          <p className="eyebrow">Don&apos;t miss this amazing opportunity</p>
          <h3>Exclusive Skin Rejuvenation Package</h3>
          <ul>
            <li>1 × Hydrafacial</li>
            <li>1 × VIP Facial (Polagen, Carbon Laser or Carboxy Therapy)</li>
            <li>2 × Microneedling Sessions with Booster</li>
          </ul>
          <p className="package-price"><del>$750</del><strong>$529</strong></p>
          <p className="package-sessions">4 sessions included</p>
        </article>
        <section className="pricing-story" aria-labelledby="pricing-story-title">
          <div className="pricing-story-copy">
            <p className="eyebrow">Care behind every treatment</p>
            <h3 id="pricing-story-title">Thoughtful care.<br />Visible results.</h3>
            <span className="short-rule" />
            <p>Every price reflects personalised attention, carefully selected products, and advanced treatment technology.</p>
          </div>
          <div className="pricing-story-gallery">
            {pricingImages.map((image) => (
              <figure className="pricing-story-image" key={image.src}>
                <div className="pricing-story-image-frame">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <div className="price-list">
          {categories.map((category) => (
            <article className="price-card" key={category.title}>
              <div className="price-card-heading">
                <h3>{category.title}</h3>
                {category.badge && <span>{category.badge}</span>}
              </div>
              {category.treatments.map((treatment) => (
                <div className="price-row" key={treatment.name}>
                  <span>{treatment.name}</span>
                  <strong>
                    {treatment.originalPrice && <del>{treatment.originalPrice}</del>}
                    {treatment.price}
                  </strong>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
