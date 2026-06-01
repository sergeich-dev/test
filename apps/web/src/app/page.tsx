"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { useLocale } from "@/components/locale-provider";

export default function HomePage() {
  const { dict } = useLocale();

  return (
    <main className="page-shell">
      <AppHeader currentPage="welcome" />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{dict.welcome.eyebrow}</p>
          <h1>{dict.welcome.title}</h1>
          <p className="hero-text">{dict.welcome.description}</p>

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

      <section className="content-section" id="overview">
        <div className="section-heading">
          <p className="eyebrow">{dict.welcome.whyEyebrow}</p>
          <h2>{dict.welcome.whyTitle}</h2>
          <p>{dict.welcome.whyDescription}</p>
        </div>

        <div className="feature-grid" id="features">
          {dict.welcome.features.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section workflow-section" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">{dict.welcome.flowEyebrow}</p>
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
