import Link from "next/link";
import { getDictionary } from "@/i18n";

export default function HomePage() {
  const dict = getDictionary();

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{dict.welcome.eyebrow}</p>
          <h1>{dict.welcome.title}</h1>
          <p className="hero-text">
            {dict.welcome.description}
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/sign-up">
              {dict.common.signUp}
            </Link>
            <Link className="button button-secondary" href="/sign-in">
              {dict.common.signIn}
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
                <span className="panel-label">{dict.welcome.panel.projectLabel}</span>
                <strong>{dict.welcome.panel.projectTitle}</strong>
                <p>{dict.welcome.panel.projectDescription}</p>
              </div>

              <div className="panel-grid">
                <div className="mini-card">
                  <span className="mini-card-label">{dict.welcome.panel.sceneLabel}</span>
                  <strong>{dict.welcome.panel.sceneTitle}</strong>
                  <p>{dict.welcome.panel.sceneDescription}</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">{dict.welcome.panel.shotListLabel}</span>
                  <strong>{dict.welcome.panel.shotListTitle}</strong>
                  <p>{dict.welcome.panel.shotListDescription}</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">{dict.welcome.panel.referencesLabel}</span>
                  <strong>{dict.welcome.panel.referencesTitle}</strong>
                  <p>{dict.welcome.panel.referencesDescription}</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">{dict.welcome.panel.exportLabel}</span>
                  <strong>{dict.welcome.panel.exportTitle}</strong>
                  <p>{dict.welcome.panel.exportDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Зачем это нужно</p>
          <h2>{dict.welcome.whyTitle}</h2>
          <p>{dict.welcome.whyDescription}</p>
        </div>

        <div className="feature-grid">
          {dict.welcome.features.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">Основной путь</p>
          <h2>{dict.welcome.flowTitle}</h2>
        </div>

        <ol className="workflow-list">
          {dict.welcome.workflow.map((step) => (
            <li className="workflow-item" key={step}>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
