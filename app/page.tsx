import Image from 'next/image';
import './landing.css';
import { NavScroller } from './nav-scroller';

export default function LandingPage() {
  return (
    <>
      <NavScroller />
      <div className="landing-shell">
        <nav className="nav" id="nav">
          <div className="nav-inner">
            <a className="logo logo-nav" href="#" aria-label="Lyrola">
              <Image src="/assets/lyrola-mark.svg" alt="" width={36} height={36} priority />
              <span className="logo-nav-word">lyrola</span>
            </a>
            <div className="nav-links">
              <a className="nav-dl" href="#download">Download</a>
            </div>
          </div>
        </nav>

        <header className="hero" id="top">
          <div className="pill">Now in beta for MacOS</div>
          <h1 className="hero-title">
            The AI meeting notepad
            <br />
            that just <em>works.</em>
          </h1>
          <p className="hero-sub">Lyrola listens, transcribes and makes your notes incredible.</p>
          <div className="hero-ctas">
            <DownloadButton />
          </div>
          <div className="hero-meta"></div>
        </header>

        <div className="preview-stage">
          <div className="preview-glow"></div>
          <div className="preview-scaler">
            <iframe
              className="preview-frame preview-live"
              src="/meeting"
              title="Lyrola app preview"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="preview-static"
              src="/assets/lyrola-app-preview.png"
              alt="Lyrola app preview"
              loading="lazy"
            />
          </div>
        </div>

        {/* SPLIT: notes -> enhanced */}
        <section>
          <div className="section-wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 20px' }}>
              <h2 className="section-title">
                Your scrappy notes,
                <br />
                <em>transformed.</em>
              </h2>
              <p className="section-sub center">
                Type the way you think. Lyrola fills in the rest with the context from the call.
              </p>
            </div>

            <div
              className="split"
              style={{ gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch', position: 'relative' }}
            >
              {/* Card 1: your notes + transcript */}
              <div
                className="split-card"
                style={{
                  background: '#1a1730',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 420,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                    padding: '11px 0',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(0,0,0,0.2)',
                  }}
                >
                  Your notes + transcript
                </div>
                <div style={{ display: 'flex', gap: 6, padding: '10px 12px' }}>
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="split-card-body" style={{ padding: '10px 28px 28px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 28,
                      marginBottom: 22,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    Intro call: AllHands
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 12, lineHeight: 1.55 }}>
                    100, growing
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 12, lineHeight: 1.55 }}>
                    <span
                      style={{
                        background: 'rgba(189,188,253,0.25)',
                        color: 'var(--purple)',
                        padding: '1px 5px',
                        borderRadius: 3,
                      }}
                    >
                      use Tuesday.ai
                    </span>
                    , v expensive
                  </div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: 8, padding: 14 }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'rgba(189,188,253,0.15)',
                      display: 'inline-block',
                    }}
                  ></span>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'var(--purple)',
                      display: 'inline-block',
                    }}
                  ></span>
                </div>
              </div>

              {/* Arrow between cards */}
              <div
                className="split-arrow-mid"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: 44,
                  height: 44,
                  background: 'var(--purple)',
                  color: '#14112a',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(189,188,253,0.4)',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>

              {/* Card 2: AI enhanced */}
              <div
                className="split-card"
                style={{
                  background: 'linear-gradient(180deg, rgba(189,188,253,0.06) 0%, #1a1730 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 420,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--purple)',
                    padding: '11px 0',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(0,0,0,0.2)',
                  }}
                >
                  ✨ AI enhanced
                </div>
                <div style={{ display: 'flex', gap: 6, padding: '10px 12px' }}>
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="split-card-body" style={{ padding: '10px 28px 28px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 28,
                      marginBottom: 18,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    Intro call: AllHands
                  </div>
                  <EnhancedSection label="AllHands overview">
                    100 employees, adding 20 next quarter. Offices in San Francisco and Austin.
                  </EnhancedSection>
                  <EnhancedSection
                    label={
                      <>
                        Current provider{' '}
                        <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>(Tuesday.ai)</span>
                      </>
                    }
                  >
                    Too complex for non-technical team members. $180 per employee per year (&quot;too expensive&quot;).
                  </EnhancedSection>
                  <EnhancedSection label="Their requirements" last>
                    Finding a better fit is &quot;a priority for Q2.&quot; Need secure information sharing.
                  </EnhancedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKS EVERYWHERE */}
        <section>
          <div className="section-wrap">
            <div className="platforms-grid">
              <div className="platforms-copy">
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Every meeting,
                  <br />
                  <em>every platform.</em>
                </h2>
                <p className="section-sub" style={{ margin: '18px 0 28px', maxWidth: 440 }}>
                  Lyrola simply listens. No bot to invite, no integration to install, in person meetings also supported.
                </p>
              </div>
              <div className="platforms-logos">
                <div className="logo-orb dot d1"></div>
                <div className="logo-orb dot d2"></div>
                <div className="logo-orb dot d3"></div>
                <div className="logo-orb dot d4"></div>
                <div className="logo-orb dot d5"></div>
                <div className="logo-orb lg zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/zoom/0B5CFF" alt="Zoom" />
                </div>
                <div className="logo-orb md meet">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googlemeet/00897B" alt="Google Meet" />
                </div>
                <div className="logo-orb sm slack">
                  <SlackLogo />
                </div>
                <div className="logo-orb md webex">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/webex/00BCEB" alt="Webex" />
                </div>
                <div className="logo-orb lg teams">
                  <TeamsLogo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES / DEMO VIDEO */}
        <section id="features">
          <div className="section-wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <h2 className="section-title">
                Built for people in <em>back-to-back</em> calls.
              </h2>
              <p className="section-sub center">
                Stop frantically typing. Stop dreading the post-meeting cleanup. Lyrola handles the boring parts so you
                can stay present.
              </p>
            </div>

            <div className="demo-stage">
              <div className="demo-glow"></div>
              <div className="demo-frame">
                <div className="demo-titlebar">
                  <div className="demo-tl-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="demo-tl-label">Lyrola Demo</div>
                  <div className="demo-tl-meta">2:14</div>
                </div>
                <div className="demo-aspect">
                  <iframe
                    src="https://www.loom.com/embed/b396816e327544cd89b5624c9133adc2?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                    allowFullScreen
                    title="Lyrola demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="download">
          <div className="section-wrap">
            <div className="cta-card">
              <div className="cta-eyebrow">Get started</div>
              <h2 className="cta-title">
                Try Lyrola on your <em>next call.</em>
              </h2>
              <p className="cta-sub">No credit card. No bot. No calendar invites required.</p>
              <div className="hero-ctas" style={{ marginBottom: 14 }}>
                <DownloadButton />
              </div>
              <div className="hero-meta" style={{ textAlign: 'center' }}>
                v0.9.4 · macOS 12+
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="foot-inner foot-inner-min">
            <div>
              <a className="logo" href="#">
                <span className="logo-mark"></span>
                <span className="logo-word">lyrola</span>
              </a>
              <p className="foot-tag">
                The quiet AI notepad that turns every meeting into something worth keeping.
              </p>
            </div>
            <div className="foot-col foot-col-inline">
              <a href="#download">Download</a>
              <a href="mailto:hello@lyrola.app">Contact</a>
            </div>
          </div>
          <div className="foot-bar">
            <span>© 2026 Lyrola, Inc.</span>
            <span>Built for people who&apos;d rather be in the meeting.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

const DOWNLOAD_URL =
  'https://github.com/jerrym1299/lyrola-landing-page/releases/latest/download/Lyrola_0.2.0_universal.dmg';

function DownloadButton({ href = DOWNLOAD_URL }: { href?: string }) {
  return (
    <a className="dl-btn" href={href} aria-label="Download for Mac">
      <span className="dl-left">
        <span className="dl-glyph">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5 V19" />
            <path d="M6 13 L12 19 L18 13" />
          </svg>
        </span>
      </span>
      <span className="dl-right">
        <span className="dl-title">
          Download for <span className="dl-accent">Mac</span>
        </span>
        <span className="dl-meta">v0.2.0 · 17.0 MB</span>
      </span>
    </a>
  );
}

function EnhancedSection({
  label,
  children,
  last,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <>
      <div
        style={{
          fontFamily: 'var(--font-spectral), serif',
          fontSize: 15,
          fontWeight: 500,
          color: '#b9a8ff',
          letterSpacing: '-0.005em',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 13,
          color: 'var(--text-dim)',
          lineHeight: 1.6,
          marginBottom: last ? 0 : 14,
        }}
      >
        {children}
      </div>
    </>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#E01E5A"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#36C5F0"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#2EB67D"
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#ECB22E"
        d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      />
    </svg>
  );
}

function TeamsLogo() {
  return (
    <svg viewBox="0 0 24 24" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#5059C9"
        d="M19.875 7.5a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Zm-2.625 1.875v6.75c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5v-6.75H17.25Z"
        opacity=".7"
      />
      <path fill="#7B83EB" d="M14.625 7.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" />
      <path
        fill="#5059C9"
        d="M22.5 9.375h-5.25v6.75c0 1.18.45 2.255 1.187 3.063A4.5 4.5 0 0 0 24 15.375v-4.5a1.5 1.5 0 0 0-1.5-1.5Z"
      />
      <path
        fill="#7B83EB"
        d="M16.5 11.25v6c0 2.485-2.015 4.5-4.5 4.5a4.493 4.493 0 0 1-3.75-2.012c.375.075.75.137 1.125.137 2.485 0 4.5-2.015 4.5-4.5v-5.25h1.125c.825 0 1.5.675 1.5 1.125Z"
      />
      <path fill="#4B53BC" d="M0 5.25h12v13.5H0z" />
      <path fill="#fff" d="M9.375 8.25H7.125v6.75H4.875V8.25H2.625v-1.5h6.75z" />
    </svg>
  );
}
