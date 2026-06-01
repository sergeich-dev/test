import Link from "next/link";

const featureCards = [
  {
    title: "Script-first workflow",
    description:
      "Start from the story, then shape it into scenes and a production-ready shot plan without scattered notes.",
  },
  {
    title: "Shot planning that stays visual",
    description:
      "Organize shots, camera moves, location notes, and practical constraints in one place before shoot day.",
  },
  {
    title: "References that stay attached",
    description:
      "Keep stills, PDFs, and links tied to the exact scene or shot they support instead of burying them in folders.",
  },
];

const workflowSteps = [
  "Create a project and define the target format for your video.",
  "Write the script, split it into scenes, and shape each scene into a shot plan.",
  "Attach visual references and export a clean brief for the shoot.",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Creator Lab</p>
          <h1>Pre-production that feels like part of the creative process, not admin.</h1>
          <p className="hero-text">
            Plan video ideas from script to shot list in one focused workspace built for solo creators and compact
            production teams.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/sign-up">
              Sign Up
            </Link>
            <Link className="button button-secondary" href="/sign-in">
              Sign In
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-window">
            <div className="panel-header">
              <span className="panel-dot panel-dot-red" />
              <span className="panel-dot panel-dot-gold" />
              <span className="panel-dot panel-dot-green" />
            </div>

            <div className="panel-body">
              <div className="panel-block">
                <span className="panel-label">Project</span>
                <strong>Night Street Portrait Film</strong>
                <p>Vertical social cut, mood-driven, 45 sec.</p>
              </div>

              <div className="panel-grid">
                <div className="mini-card">
                  <span className="mini-card-label">Scene 01</span>
                  <strong>Arrival</strong>
                  <p>Cold open, walking shot, ambient traffic.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">Shot List</span>
                  <strong>12 planned shots</strong>
                  <p>Wide opener, close portrait, handheld inserts.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">References</span>
                  <strong>8 attached assets</strong>
                  <p>Lighting stills, movement references, frame ideas.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">Export</span>
                  <strong>Shooting brief ready</strong>
                  <p>Shareable PDF for set planning and execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Why it exists</p>
          <h2>Most creator workflows break the moment planning gets detailed.</h2>
          <p>
            Scripts live in one app, references in another, and shot notes in a mess of documents. Creator Lab is meant
            to pull those early production decisions back into one clear system.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">Core flow</p>
          <h2>Built around the actual path from idea to shoot day.</h2>
        </div>

        <ol className="workflow-list">
          {workflowSteps.map((step) => (
            <li className="workflow-item" key={step}>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

