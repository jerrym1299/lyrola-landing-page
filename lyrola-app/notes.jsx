// Markdown editor + AI summary

const MarkdownEditor = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && !ref.current.dataset.init) {
      ref.current.dataset.init = '1';
      ref.current.innerHTML = `
        <ul>
          <li>~40 person team, mostly PMs + sales</li>
          <li>Tried 2 notetakers — failed on bot + Windows</li>
          <li>Legal will ask about audio retention</li>
        </ul>
        <h3>Next steps</h3>
        <ul>
          <li>Send pricing one-pager</li>
          <li>Offer 10-seat pilot</li>
          <li>Loop in their security team for privacy review</li>
        </ul>
      `;
    }
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="editor"
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Start typing your notes…" />
      
      <div className="editor-hint">
        <span><span className="key">/</span> commands</span>
        <span><span className="key">⌘</span><span className="key">B</span> bold</span>
        <span><span className="key">⌘</span><span className="key">K</span> link</span>
        <span><span className="key">— —</span> divider</span>
      </div>
    </>);

};

const AISummary = ({ tab, onTab, generating }) => {
  return (
    <div className="ai-card">
      <div className="ai-toolbar">
        <button className={`ai-tab ${tab === 'enhanced' ? 'active' : ''}`} onClick={() => onTab('enhanced')}>
          <Icon.Sparkle /> Enhanced notes
        </button>
        <button className={`ai-tab ${tab === 'summary' ? 'active' : ''}`} onClick={() => onTab('summary')}>
          Summary
        </button>
        <button className={`ai-tab ${tab === 'actions' ? 'active' : ''}`} onClick={() => onTab('actions')}>
          Action items
        </button>
        <button className={`ai-tab ${tab === 'decisions' ? 'active' : ''}`} onClick={() => onTab('decisions')}>
          Decisions
        </button>
        <div style={{ flex: 1 }}></div>
        {generating ?
        <span className="generating"><span className="spinner"></span>Enhancing…</span> :

        <button className="ai-tab"><Icon.Copy /> Copy</button>
        }
      </div>

      <div className="ai-content">
        {tab === 'enhanced' &&
        <>
            <h3>Acme's situation</h3>
            <ul>
              <li>~40-person team — heavy meeting load, mostly PMs and sales (~20–25 meetings/week per PM).</li>
              <li>Tried <strong>two notetaker tools</strong> last year; both failed: one required a visible bot in the call, the other was Mac-only.</li>
              <li>Current pain: duplicate note-taking across teammates, and meeting content is unsearchable a week later.</li>
            </ul>
            <h3>Why Lyrola fits</h3>
            <ul>
              <li><strong>No bot in the call</strong> — system audio capture means customers never see "Notetaker has joined the meeting".</li>
              <li><strong>Mac and Windows from day one</strong> — addresses their second blocker directly.</li>
              <li><strong>Search across every meeting</strong> — Dana flagged spending an hour finding one quote; Lyrola's chat panel returns the line + timestamp.</li>
              <li>User's notes stay intact — Lyrola enhances rather than overwriting.</li>
            </ul>
            <h3>Privacy posture (Dana flagged for legal)</h3>
            <ul>
              <li>Transcription runs <strong>locally</strong> on the device.</li>
              <li>Only encrypted summaries leave the machine.</li>
              <li>Raw audio is discarded once the summary lands.</li>
            </ul>
          </>
        }
        {tab === 'summary' &&
        <p>
            Discovery call with Dana Chen (Acme, ~40 people). Their team is buried in
            back-to-back meetings and has burned on two prior notetaker tools — one for
            requiring a visible bot, the other for being Mac-only. Lyrola's no-bot capture
            and cross-platform support land directly on both objections. Dana flagged
            privacy as a legal review item and asked about cross-meeting search; both
            covered. She's open to a 10-seat pilot pending pricing details.
          </p>
        }
        {tab === 'actions' &&
        <ul>
            <li><strong>You</strong> — send pricing one-pager to Dana today.</li>
            <li><strong>You</strong> — propose 10-seat pilot scoped to Acme's PM team.</li>
            <li><strong>Dana</strong> — loop in Acme's security team for the privacy review.</li>
            <li><strong>You</strong> — follow up Friday if no reply by EOD Thursday.</li>
          </ul>
        }
        {tab === 'decisions' &&
        <ul>
            <li>Lead with the <strong>10-seat pilot</strong>, not full team rollout.</li>
            <li>Privacy posture (local transcription, no raw audio retention) is the headline for legal review.</li>
            <li>Cross-platform parity (Mac + Windows) is the deciding factor over competitors for Acme.</li>
          </ul>
        }
      </div>
    </div>);

};

window.MarkdownEditor = MarkdownEditor;
window.AISummary = AISummary;
