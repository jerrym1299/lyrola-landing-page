// Lyrola — main app

const TWEAKS = /*EDITMODE-BEGIN*/{
  "transcriptOpen": true,
  "showOSFrame": true,
  "bottomMode": "chat",
  "compactSidebar": false,
  "accentHue": 285
} /*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAKS);
  const [activeId, setActiveId] = React.useState('m1');
  const [transcriptOpen, setTranscriptOpen] = React.useState(tweaks.transcriptOpen);
  const [recording, setRecording] = React.useState(true);
  const [time, setTime] = React.useState(127); // seconds
  const [aiTab, setAiTab] = React.useState('enhanced');
  const [notesOpen, setNotesOpen] = React.useState(true);
  const [aiOpen, setAiOpen] = React.useState(true);
  const [bottomMode, setBottomMode] = React.useState(tweaks.bottomMode);

  React.useEffect(() => setTranscriptOpen(tweaks.transcriptOpen), [tweaks.transcriptOpen]);
  React.useEffect(() => setBottomMode(tweaks.bottomMode), [tweaks.bottomMode]);

  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  // Apply accent hue
  React.useEffect(() => {
    const root = document.documentElement;
    const h = tweaks.accentHue;
    root.style.setProperty('--purple-50', `oklch(0.96 0.02 ${h})`);
    root.style.setProperty('--purple-200', `oklch(0.86 0.07 ${h})`);
    root.style.setProperty('--purple-400', `oklch(0.78 0.13 ${h})`);
    root.style.setProperty('--purple-500', `oklch(0.70 0.16 ${h})`);
    root.style.setProperty('--purple-600', `oklch(0.62 0.17 ${h})`);
    root.style.setProperty('--purple-glow', `oklch(0.70 0.16 ${h} / 0.18)`);
  }, [tweaks.accentHue]);

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  };

  const meetings = window.MEETINGS.map((m) => ({
    ...m,
    live: m.id === activeId && recording
  }));

  const inner =
  <div className={`app ${transcriptOpen ? 'with-transcript' : ''}`} data-screen-label="01 Lyrola — Meeting view">
      <Sidebar
      activeId={activeId}
      meetings={meetings}
      onSelect={setActiveId} />
    

      <main className="main">
        <div className="toolbar">
          <button className="icon-btn" title="Toggle sidebar"><Icon.Sidebar /></button>
          <div className="toolbar-right">
            <button className="btn"><Icon.Share /> Share</button>
            <button
            className={`icon-btn ${transcriptOpen ? 'active' : ''}`}
            onClick={() => setTranscriptOpen((o) => !o)}
            title="Toggle transcript">
            
              <Icon.TranscriptIcon />
            </button>
          </div>
        </div>

        <div className="content">
          <div className="content-inner">
            <h1 className="meeting-title" contentEditable suppressContentEditableWarning>
              Acme — discovery call
            </h1>
            <div className="meta-row">
              <span className="chip"><Icon.Calendar /> Wed, 29 Apr · 10:30</span>
              <div className="participants">
                <div className="avatar">J</div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, oklch(0.78 0.10 200), oklch(0.62 0.14 220))' }}>D</div>
                <span className="p-count">You & Dana Chen</span>
              </div>
            </div>

            <div className={`section ${notesOpen ? '' : 'collapsed'}`}>
              <div className="section-head" onClick={() => setNotesOpen((o) => !o)}>
                <h2>Meeting notes</h2>
                <Icon.Chevron className="chev" />
              </div>
              <div className="section-body">
                <MarkdownEditor />
              </div>
            </div>

            <div className={`section ${aiOpen ? '' : 'collapsed'}`}>
              <div className="section-head" onClick={() => setAiOpen((o) => !o)}>
                <h2>
                  Generated notes
                  <span className="ai-pill" style={{ fontFamily: "Inter" }}><Icon.Sparkle /> Auto</span>
                </h2>
                <Icon.Chevron className="chev" />
              </div>
              <div className="section-body">
                <AISummary tab={aiTab} onTab={setAiTab} generating={false} />
              </div>
            </div>
          </div>
        </div>

        <BottomBar
        recording={recording}
        onToggleRec={() => setRecording((r) => !r)}
        time={fmt(time)}
        transcriptOpen={transcriptOpen}
        onToggleTranscript={() => setTranscriptOpen((o) => !o)}
        mode={bottomMode}
        onMode={setBottomMode} />
      
      </main>

      {transcriptOpen &&
    <TranscriptPanel
      onClose={() => setTranscriptOpen(false)}
      transcript={window.TRANSCRIPT}
      isLive={recording}
      recTime={fmt(time)} />

    }

      <TweaksPanel title="Tweaks">
        <TweakSection title="Layout">
          <TweakToggle
          label="Transcript panel"
          value={tweaks.transcriptOpen}
          onChange={(v) => setTweak('transcriptOpen', v)} />
        
          <TweakToggle
          label="Show macOS frame"
          value={tweaks.showOSFrame}
          onChange={(v) => setTweak('showOSFrame', v)} />
        
          <TweakRadio
          label="Bottom bar"
          value={tweaks.bottomMode}
          options={[
          { value: 'chat', label: 'Chat' },
          { value: 'wave', label: 'Waveform' }]
          }
          onChange={(v) => setTweak('bottomMode', v)} />
        
        </TweakSection>
        <TweakSection title="Accent">
          <TweakSlider
          label="Accent hue"
          value={tweaks.accentHue}
          min={240} max={320} step={1}
          onChange={(v) => setTweak('accentHue', v)} />
        
        </TweakSection>
      </TweaksPanel>
    </div>;


  if (!tweaks.showOSFrame) return inner;

  return (
    <div className="os-frame">
      <div className="window">
        <div className="titlebar">
          <div className="traffic">
            <div className="light close"></div>
            <div className="light min"></div>
            <div className="light max"></div>
          </div>
          <div className="titlebar-title">Lyrola — Acme discovery call</div>
        </div>
        {inner}
      </div>
    </div>);

};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);