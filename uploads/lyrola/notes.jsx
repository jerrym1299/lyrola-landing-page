// Markdown editor + AI summary

const MarkdownEditor = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && !ref.current.dataset.init) {
      ref.current.dataset.init = '1';
      ref.current.innerHTML = `
        <ul>
          <li>Jack — report EOW</li>
          <li>Sally cake decision</li>
          <li>Tim Cook end of year</li>
        </ul>
        <h3>Demo flow</h3>
        <ul>
          <li>Show Slack Huddle capture</li>
          <li>Ask chatbot: "what did we decide on pricing?"</li>
          <li>Walk through enhanced notes vs raw notes</li>
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
            <h3>Granola-style meeting app (Lyrola)</h3>
            <ul>
              <li>Lyrola is built in the style of <strong>Granola</strong> — an AI meeting assistant for desktop.</li>
              <li>It transcribes meeting audio and uses it to <strong>enhance the user's own notes</strong>, rather than replacing them.</li>
              <li>Cross-platform — works with Zoom, Slack Huddles, Google Meet, anything that produces system audio.</li>
              <li>A built-in <strong>chatbot</strong> answers queries like "who was in the meeting?" or "what did they decide on pricing?", grounded in transcript + notes.</li>
              <li>Recording status persists at the bottom of the window so the user can navigate freely without losing context.</li>
            </ul>
            <h3>No bot invite</h3>
            <ul>
              <li>No separate bot or invite link is required — Lyrola listens through system audio.</li>
              <li>This avoids the awkward "[Lyrola Bot has joined the meeting]" experience.</li>
            </ul>
            <h3>Privacy</h3>
            <ul>
              <li>Local transcription where possible; encrypted upload only for the summary step.</li>
              <li>Raw audio is discarded once the summary completes.</li>
            </ul>
          </>
        }
        {tab === 'summary' &&
        <p>
            Jerry walked Marcus through Lyrola, a Granola-style AI meeting assistant for macOS.
            The product captures system audio across any meeting platform without an invite-bot,
            then enhances the user's notes and produces a chat-able summary. The conversation
            covered the demo flow (Slack Huddle), privacy posture (local-first transcription),
            and the persistent recording status that lets users navigate freely while a meeting is live.
          </p>
        }
        {tab === 'actions' &&
        <ul>
            <li><strong>Jerry</strong> — share recording of the Slack Huddle demo with Marcus by EOW.</li>
            <li><strong>Marcus</strong> — review pricing doc and reply with feedback Monday.</li>
            <li><strong>Jerry</strong> — sync with Tim Cook on end-of-year roadmap.</li>
          </ul>
        }
        {tab === 'decisions' &&
        <ul>
            <li>Ship with <strong>local-first transcription</strong>; raw audio is discarded post-summary.</li>
            <li>Demo flow leads with Slack Huddle, not Zoom.</li>
            <li>Recording status stays pinned to bottom bar across navigation.</li>
          </ul>
        }
      </div>
    </div>);

};

window.MarkdownEditor = MarkdownEditor;
window.AISummary = AISummary;