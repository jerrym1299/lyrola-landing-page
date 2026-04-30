'use client';

import { useEffect, useState } from 'react';
import './meeting.css';
import { Sidebar } from '@/components/meeting/sidebar';
import { TranscriptPanel } from '@/components/meeting/transcript';
import { BottomBar } from '@/components/meeting/bottom-bar';
import { MarkdownEditor, AISummary, type AITab } from '@/components/meeting/notes';
import { Icon } from '@/components/meeting/icons';
import { MEETINGS, TRANSCRIPT } from '@/components/meeting/data';

const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
};

export default function MeetingPage() {
  const [activeId, setActiveId] = useState('m1');
  const [transcriptOpen, setTranscriptOpen] = useState(true);
  const [recording, setRecording] = useState(true);
  const [time, setTime] = useState(127);
  const [aiTab, setAiTab] = useState<AITab>('enhanced');
  const [notesOpen, setNotesOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(true);
  const [bottomMode, setBottomMode] = useState<'chat' | 'wave'>('chat');

  useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  const meetings = MEETINGS.map((m) => ({ ...m, live: m.id === activeId && recording }));

  const inner = (
    <div className={`app ${transcriptOpen ? 'with-transcript' : ''}`}>
      <Sidebar activeId={activeId} meetings={meetings} onSelect={setActiveId} />

      <main className="main">
        <div className="toolbar">
          <button className="icon-btn" title="Toggle sidebar">
            <Icon.Sidebar />
          </button>
          <div className="toolbar-right">
            <button className="btn">
              <Icon.Share /> Share
            </button>
            <button
              className={`icon-btn ${transcriptOpen ? 'active' : ''}`}
              onClick={() => setTranscriptOpen((o) => !o)}
              title="Toggle transcript"
            >
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
              <span className="chip">
                <Icon.Calendar /> Wed, 29 Apr · 10:30
              </span>
              <div className="participants">
                <div className="avatar">J</div>
                <div
                  className="avatar"
                  style={{ background: 'linear-gradient(135deg, oklch(0.78 0.10 200), oklch(0.62 0.14 220))' }}
                >
                  D
                </div>
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
                  <span className="ai-pill">
                    <Icon.Sparkle /> Auto
                  </span>
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
          onMode={setBottomMode}
        />
      </main>

      {transcriptOpen && (
        <TranscriptPanel
          onClose={() => setTranscriptOpen(false)}
          transcript={TRANSCRIPT}
          isLive={recording}
          recTime={fmt(time)}
        />
      )}
    </div>
  );

  return (
    <div className="meeting-shell">
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
      </div>
    </div>
  );
}
