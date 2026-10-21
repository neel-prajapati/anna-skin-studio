import { useEffect, useRef, useState } from 'react'
const resultImages = [
  '/img/beforeafter1.jpg',
  '/img/beforeafter2.jpg',
  '/img/beforeafter3.jpg',
  '/img/beforeafter4.JPG',
  '/img/beforeafter5.PNG',
  '/img/beforeafter6.PNG',
  '/img/beforeafter7.PNG',
  '/img/beforeafter8.PNG',
  '/img/beforeafter9.PNG',
  '/img/beforeafter10.JPG',
]

const groupIcons = {
  sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.4L22.5 17l-2.4 1.1L19 20.5l-1.1-2.4-2.4-1.1 2.4-.6L19 14Z" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5.2 9.1A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.9L14 9V3" /><path d="M8 15h8" /></>,
  scissors: <><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="m8 8 12 12M8 16 20 4m-5 3 3 3" /></>,
}

export default function ServicesPage({ groups }) {
  const [openTreatments, setOpenTreatments] = useState(() => new Set())
  const [selectedResult, setSelectedResult] = useState(null)
  const resultDialogRef = useRef(null)

  useEffect(() => {
    const dialog = resultDialogRef.current
    if (!dialog) return

    if (selectedResult && !dialog.open) dialog.showModal()
    if (!selectedResult && dialog.open) dialog.close()
  }, [selectedResult])

  return (
    <main className="page-content page-services">
      <section className="services-page">
        <div className="service-intro section-pad">
          <p className="eyebrow">What we offer</p>
          <h1>Our Treatments</h1>
          <span className="short-rule" />
          <p>
            Every treatment at Anna Skin Adelaide is carefully selected and performed using medical-grade, TGA-approved technology. All treatments begin with a thorough skin consultation to ensure the most effective and safe plan for your unique needs.
          </p>
        </div>
        {groups.map((group) => (
          <section className="service-group section-pad" key={group.title}>
            <div className="service-group-heading">
              <svg className="service-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {groupIcons[group.icon]}
              </svg>
              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="service-accordion">
              {group.treatments.map((treatment) => {
                const isOpen = openTreatments.has(treatment.name)
                const panelId = `treatment-${treatment.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                return (
                  <article className={`service-card${isOpen ? ' is-open' : ''}`} key={treatment.name}>
                    <button
                      className="service-card-toggle"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenTreatments((previous) => {
                        const next = new Set(previous)
                        if (isOpen) next.delete(treatment.name)
                        else next.add(treatment.name)
                        return next
                      })}
                    >
                      <span>
                        <span className="service-card-title">{treatment.name}</span>
                        <span className="service-card-summary">{treatment.summary}</span>
                      </span>
                      <svg className="service-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div className="service-card-details" id={panelId} hidden={!isOpen}>
                      <p>{treatment.description}</p>
                      <div className="service-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>{treatment.duration}</span>
                        <span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /></svg>Downtime: {treatment.downtime}</span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
        <section className="service-results section-pad" aria-labelledby="service-results-title">
          <div className="service-results-heading">
            <p className="eyebrow">Real transformations</p>
            <h2 id="service-results-title">Before &amp; After</h2>
            <span className="short-rule" />
            <p>Explore some of the results achieved through personalised skin treatments.</p>
          </div>
          <div className="service-results-grid">
            {resultImages.map((src, index) => (
              <figure className="service-result-card" key={src}>
                <button
                  className="service-result-image-button"
                  type="button"
                  aria-label={`View before and after skin treatment result ${index + 1} larger`}
                  onClick={() => setSelectedResult({ src, index })}
                >
                  <img
                    src={src}
                    alt={`Before and after skin treatment result ${index + 1}`}
                    loading="lazy"
                  />
                </button>
                <figcaption>Skin transformation <span>{String(index + 1).padStart(2, '0')}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
        <dialog
          className="service-result-dialog"
          ref={resultDialogRef}
          aria-label="Expanded before and after image"
          onClose={() => setSelectedResult(null)}
          onCancel={(event) => {
            event.preventDefault()
            event.currentTarget.close()
            setSelectedResult(null)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault()
              event.currentTarget.close()
              setSelectedResult(null)
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedResult(null)
          }}
        >
          {selectedResult && (
            <>
              <button
                className="service-result-dialog-close"
                type="button"
                aria-label="Close enlarged image"
                onClick={() => setSelectedResult(null)}
                autoFocus
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <img
                src={selectedResult.src}
                alt={`Enlarged before and after skin treatment result ${selectedResult.index + 1}`}
              />
              <p>Skin transformation <span>{String(selectedResult.index + 1).padStart(2, '0')}</span></p>
            </>
          )}
        </dialog>
        <section className="service-consult section-pad">
          <p className="eyebrow">Not sure where to start?</p>
          <h2>Book a Free Skin<br />Consultation</h2>
          <p>Every skin journey is unique. Let Anna assess your skin and recommend the perfect treatment plan — no obligation, no pressure.</p>
          <a className="button button-brown" href="https://www.instagram.com/anna_skin_care/" target="_blank" rel="noreferrer">Get in touch</a>
        </section>
      </section>
    </main>
  )
}
