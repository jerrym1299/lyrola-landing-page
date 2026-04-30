// Transcript panel — right sidebar with Assistant chat tab

const Assistant = () => {
  const [msgs, setMsgs] = React.useState([
    { role: 'user', text: 'Who were the participants in this meeting?' },
    { role: 'ai',   text: 'The participants in this meeting were Jerry and Marcus.' },
    { role: 'user', text: 'What did they talk about?' },
    { role: 'ai',   text: 'They talked about Lyrola, a Granola-style AI meeting app that transcribes meeting audio, enhances user notes, and generates summaries. They discussed its cross-platform functionality without requiring invites or bots, demonstrated it using a Slack Huddle, and Marcus shared his favorite UI feature — the persistent recording status at the bottom of the screen.' },
  ]);
  const [val, setVal] = React.useState('');
  const threadRef = React.useRef(null);

  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [msgs.length]);

  const send = () => {
    if (!val.trim()) return;
    setMsgs(m => [...m, { role: 'user', text: val }]);
    setVal('');
    setTimeout(() => {
      setMsgs(m => [...m, { role: 'ai', text: 'Let me look through the transcript and notes for that…' }]);
    }, 400);
  };

  const suggest = (s) => {
    setMsgs(m => [...m, { role: 'user', text: s }]);
    setTimeout(() => {
      setMsgs(m => [...m, { role: 'ai', text: 'Looking at the transcript and notes for that question now.' }]);
    }, 400);
  };

  return (
    <>
      <div className="chat-thread" ref={threadRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`chat-msg ${m.role}`}>
            <div className="bubble">{m.text}</div>
            {m.role === 'ai' && (
              <div className="actions"><Icon.Copy /></div>
            )}
          </div>
        ))}
      </div>

      <div className="chat-suggestions">
        <div className="sug" onClick={() => suggest('Summarize key decisions')}>Key decisions</div>
        <div className="sug" onClick={() => suggest('What are the action items?')}>Action items</div>
        <div className="sug" onClick={() => suggest('Draft a follow-up email')}>Follow-up email</div>
      </div>

      <div className="chat-composer">
        <input
          placeholder="Ask anything about this meeting…"
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
        />
        <button className="send" onClick={send}><Icon.Send /></button>
      </div>
    </>
  );
};

const TranscriptPanel = ({ onClose, transcript, isLive }) => {
  const [tab, setTab] = React.useState('transcript');
  const [query, setQuery] = React.useState('');
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (isLive && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [transcript.length, isLive]);

  const highlight = (text) => {
    if (!query.trim()) return text;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
    const parts = text.split(re);
    return parts.map((p, i) => re.test(p)
      ? <mark key={i}>{p}</mark>
      : <span key={i}>{p}</span>);
  };

  const filtered = transcript.filter(t =>
    !query.trim() || t.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="transcript-panel">
      <div className="transcript-head">
        <h3>
          {tab === 'assistant' ? 'Assistant' : 'Transcript'}
          {isLive && tab === 'transcript' && <span className="chip live" style={{padding: '2px 7px', fontSize: 10}}>
            <span className="dot"></span>LIVE
          </span>}
        </h3>
        <button className="icon-btn" onClick={onClose} title="Close">
          <Icon.Close />
        </button>
      </div>

      <div className="transcript-tabs">
        <button className={`t-tab ${tab === 'transcript' ? 'active' : ''}`} onClick={() => setTab('transcript')}>
          Transcript
        </button>
        <button className={`t-tab ${tab === 'assistant' ? 'active' : ''}`} onClick={() => setTab('assistant')}>
          Assistant
        </button>
      </div>

      {tab === 'transcript' && (
        <>
          <div className="transcript-search">
            <Icon.Search />
            <input
              placeholder="Search transcript…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <span style={{fontSize: 11, color: 'var(--fg-3)'}}>
                {filtered.length}
              </span>
            )}
          </div>

          <div className="transcript-body" ref={bodyRef}>
            <div className="t-divider">Beginning of meeting</div>
            {filtered.map((t, i) => (
              <div key={i} className={`t-entry ${t.highlight ? 'highlight' : ''} ${i === filtered.length - 1 && isLive ? 'active' : ''}`}>
                <div className="t-meta">
                  <div className={`t-speaker ${t.who}`}>{t.speaker}</div>
                </div>
                <div className="t-text">
                  {highlight(t.text)}
                  {i === filtered.length - 1 && isLive && <span className="live-cursor"></span>}
                </div>
              </div>
            ))}
            {isLive && (
              <div className="t-divider" style={{marginTop: 16}}>
                <span style={{color: 'var(--purple-200)'}}>Listening</span>
              </div>
            )}
          </div>
        </>
      )}

      {tab === 'assistant' && <Assistant />}
    </aside>
  );
};

window.TranscriptPanel = TranscriptPanel;
