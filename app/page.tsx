import './landing.css';
import { NavScroller } from './nav-scroller';

export default function LandingPage() {
  return (
    <>
      <NavScroller />
      <div className="landing-shell">
        <nav className="nav" id="nav">
          <div className="nav-inner">
            <a className="logo" href="#">
              <span className="logo-mark"></span>
              <span>Lyrola</span>
            </a>
            <div className="nav-links">
              <a className="btn btn-primary" href="#download">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download
              </a>
            </div>
          </div>
        </nav>

        <header className="hero">
          <div className="pill">
            <span className="pill-dot"></span> Now in beta · Mac & Windows
          </div>
          <h1 className="hero-title">
            The AI meeting notepad
            <br />
            that just <em>works.</em>
          </h1>
          <p className="hero-sub">
            Lyrola sits quietly beside every meeting — listening, transcribing, and turning your messy notes
            into something you&apos;ll be proud to share.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download for Mac
            </a>
            <a className="btn btn-lg" href="#">
              Download for Windows
            </a>
          </div>
          <div className="hero-meta">free · no bot · no calendar invite required</div>
        </header>

        <div className="preview-stage">
          <div className="preview-glow"></div>
          <iframe className="preview-frame" src="/meeting" title="Lyrola app preview" loading="lazy" />
        </div>

        <section id="features">
          <div className="section-wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <div className="eyebrow">// What we do</div>
              <h2 className="section-title">
                Built for people in <em>back-to-back</em> calls.
              </h2>
              <p className="section-sub center">
                Stop frantically typing. Stop dreading the post-meeting cleanup. Lyrola handles the boring parts
                so you can stay present.
              </p>
            </div>

            <div className="features">
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                }
                title="No bot in the call"
                body={"Lyrola listens locally on your device. No \"Notetaker\" appearing in the participant list. No awkward client moments."}
              />
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                }
                title="Works in every app"
                body="Zoom, Meet, Teams, phone speakers, even in-person. If sound comes out of your machine, Lyrola hears it."
              />
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                }
                title="Action items & summaries"
                body="Get clean action items and meeting summaries pulled straight from what was said — ready to share the moment the call ends."
              />
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                }
                title="Live meeting transcriptions"
                body="Watch the conversation transcribe itself in real time, color-coded by speaker. Searchable from the moment a word is spoken."
              />
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                }
                title="Ask anything, during or after"
                body="Ask an AI agent questions mid-call without breaking flow, or revisit any meeting later — Lyrola searches across every conversation you've had."
              />
              <Feature
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6z" />
                  </svg>
                }
                title="Made for fast typers"
                body="Markdown shortcuts, slash commands, keyboard-only flow. Built by people who hate clicking."
              />
            </div>
          </div>
        </section>

        <section>
          <div className="section-wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 20px' }}>
              <div className="eyebrow">// Before &amp; after</div>
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
              <div
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
                    fontSize: 12,
                    color: 'var(--text-faint)',
                    padding: '10px 0',
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
                <div style={{ padding: '10px 28px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-serif), serif', fontSize: 20, marginBottom: 18, letterSpacing: '-0.01em' }}>
                    Intro call: AllHands
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 10 }}>100, growing</div>
                  <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 10 }}>
                    <span style={{ background: 'rgba(189,188,253,0.25)', color: 'var(--purple)', padding: '1px 5px', borderRadius: 3 }}>
                      use Tuesday.ai
                    </span>
                    , v expensive
                  </div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: 8, padding: 14 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(189,188,253,0.15)', display: 'inline-block' }}></span>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--purple)', display: 'inline-block' }}></span>
                </div>
              </div>

              <div
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>

              <div
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
                    fontSize: 12,
                    color: 'var(--purple)',
                    padding: '10px 0',
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
                <div style={{ padding: '10px 28px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-serif), serif', fontSize: 20, marginBottom: 14, letterSpacing: '-0.01em' }}>
                    Intro call: AllHands
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>AllHands overview</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.55, marginBottom: 10 }}>
                    100 employees, adding 20 next quarter. Offices in San Francisco and Austin.
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>Current Provider (Tuesday.ai)</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.55, marginBottom: 10 }}>
                    Too complex for non-technical team members. $180 per employee per year (&quot;too expensive&quot;).
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>Their Requirements</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.55 }}>
                    Finding a better fit is &quot;a priority for Q2.&quot; Need secure information sharing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="section-wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <div className="eyebrow">// How it works</div>
              <h2 className="section-title">Three things, in order.</h2>
            </div>

            <div className="steps">
              <Step num="01" title="Open Lyrola." body="That's the whole setup. No calendar permissions, no Zoom integration, no bot to invite. The app launches with a single keystroke." />
              <Step num="02" title="Take notes the lazy way." body="Jot fragments. Misspell things. Use your own shorthand. Lyrola records audio in the background and lines it up with what you wrote." />
              <Step num="03" title="Hit Generate. Send it." body="Get a clean, shareable summary in seconds — with action items, decisions, and follow-ups extracted in your team's tone." />
            </div>
          </div>
        </section>

        <section id="download">
          <div className="section-wrap">
            <div className="cta-card">
              <div className="eyebrow" style={{ justifyContent: 'center', textAlign: 'center' }}>
                // Free during beta
              </div>
              <h2
                className="section-title center"
                style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                Try Lyrola on your <span style={{ color: 'var(--purple)' }}>next call.</span>
              </h2>
              <p className="section-sub center" style={{ margin: '0 auto 32px' }}>
                Download Lyrola and try it on your next call. No credit card. No bot. No calendar invites required.
              </p>
              <div className="hero-ctas" style={{ marginBottom: 14 }}>
                <a className="btn btn-primary btn-lg" href="#">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Download for Mac
                </a>
                <a className="btn btn-lg" href="#">
                  Download for Windows
                </a>
              </div>
              <div className="hero-meta" style={{ textAlign: 'center' }}>
                v0.9.4 · macOS 12+ · Windows 10+
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-inner">
            <div>
              <a className="logo" href="#">
                <span className="logo-mark"></span>
                <span>Lyrola</span>
              </a>
              <p className="foot-tag">The quiet AI notepad that turns every meeting into something worth keeping.</p>
            </div>
            <FootCol heading="Product" links={['Features', 'Download', 'Changelog', 'Pricing']} />
            <FootCol heading="Company" links={['About', 'Blog', 'Careers', 'Press kit']} />
            <FootCol heading="Resources" links={['Help center', 'Privacy', 'Security', 'Contact']} />
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

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="feature">
      <div className="feature-ico">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="step">
      <div className="step-num">{num}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

function FootCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div className="foot-col">
      <h6>{heading}</h6>
      {links.map((l) => (
        <a key={l} href="#">
          {l}
        </a>
      ))}
    </div>
  );
}
