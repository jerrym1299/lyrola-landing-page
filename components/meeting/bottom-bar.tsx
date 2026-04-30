'use client';

import { useEffect, useState } from 'react';
import { Icon } from './icons';

function Waveform({ active }: { active: boolean }) {
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 40 }, () => 0.3));

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setBars((prev) => prev.map(() => Math.random() * 0.85 + 0.1));
    }, 110);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="waveform">
      {bars.map((h, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{
            height: `${h * 100}%`,
            opacity: active ? 0.4 + h * 0.6 : 0.25,
            background: active ? 'oklch(0.78 0.13 285 / 0.7)' : 'oklch(0.5 0.02 285 / 0.4)',
          }}
        />
      ))}
    </div>
  );
}

export function BottomBar({
  recording,
  onToggleRec,
  time,
  transcriptOpen,
  onToggleTranscript,
  mode,
  onMode,
}: {
  recording: boolean;
  onToggleRec: () => void;
  time: string;
  transcriptOpen: boolean;
  onToggleTranscript: () => void;
  mode: 'chat' | 'wave';
  onMode: (m: 'chat' | 'wave') => void;
}) {
  return (
    <div className="bottom-bar">
      <div className="rec-controls">
        <button
          className={`rec-btn ${recording ? 'recording' : ''}`}
          onClick={onToggleRec}
          title={recording ? 'Stop recording' : 'Start recording'}
        >
          <Icon.Mic />
        </button>
        <button
          className={`rec-btn transcript-btn ${transcriptOpen ? 'active' : ''}`}
          onClick={onToggleTranscript}
          title="Toggle transcript"
        >
          <Icon.TranscriptIcon />
        </button>
      </div>

      <div className="rec-time">{time}</div>

      {mode === 'wave' ? (
        <Waveform active={recording} />
      ) : (
        <div className="chat-input">
          <input placeholder="Ask anything about this meeting…" />
          <button className="chat-send">
            <Icon.Send />
          </button>
        </div>
      )}

      <div style={{ display: 'flex', gap: 4 }}>
        <button
          className={`rec-btn ${mode === 'wave' ? 'active' : ''}`}
          onClick={() => onMode(mode === 'wave' ? 'chat' : 'wave')}
          title="Toggle chat / waveform"
          style={{ width: 28, height: 28, fontSize: 11 }}
        >
          {mode === 'wave' ? <Icon.Chat /> : <Icon.Mic />}
        </button>
      </div>
    </div>
  );
}
