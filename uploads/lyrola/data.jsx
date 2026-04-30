// Mock data for Lyrola

const MEETINGS = [
  { id: 'm1', name: 'Jerry <-> Marcus', time: '10:30', live: true,  active: true },
  { id: 'm2', name: 'Marcus <-> Jerry', time: 'Yesterday' },
  { id: 'm3', name: 'Meeting with Marketing', time: 'Mon' },
  { id: 'm4', name: 'Alan Sync', time: 'Apr 24' },
  { id: 'm5', name: 'Jackie, Tim, Sally + 2', time: 'Apr 23' },
  { id: 'm6', name: 'Jerry — Josh sync', time: 'Apr 22' },
  { id: 'm7', name: 'Lyrola Internal Meeting', time: 'Apr 21' },
  { id: 'm8', name: 'Design review', time: 'Apr 18' },
  { id: 'm9', name: 'Investor catchup', time: 'Apr 15' },
];

const TRANSCRIPT = [
  { speaker: 'Jerry',  who: 'me',    time: '00:14', text: 'Alright Marcus, thanks for hopping on. I wanted to walk you through Lyrola — what we\'re building and where we are.' },
  { speaker: 'Marcus', who: 'other', time: '00:22', text: 'Yeah for sure, excited to see it. You mentioned it\'s an AI meeting tool?' },
  { speaker: 'Jerry',  who: 'me',    time: '00:28', text: 'Right, in the style of Granola. The core idea is that the user takes their own notes during the meeting, and Lyrola enhances them with the transcript afterwards.' },
  { speaker: 'Jerry',  who: 'me',    time: '00:41', text: 'No bot invite, no separate participant joining the call — it just listens through the system audio.' },
  { speaker: 'Marcus', who: 'other', time: '00:52', text: 'So it works with anything? Zoom, Slack huddles, Meet?' },
  { speaker: 'Jerry',  who: 'me',    time: '00:56', text: 'Exactly. Cross-platform. We demoed it with a Slack Huddle last week and it captured everything cleanly.', highlight: true },
  { speaker: 'Marcus', who: 'other', time: '01:08', text: 'And after the meeting, what does the user actually get?' },
  { speaker: 'Jerry',  who: 'me',    time: '01:12', text: 'Alright Marcus, thanks for hopping on. I wanted to walk you through Lyrola — what we\'re building and where we are.' },
  { speaker: 'Jerry',  who: 'me',    time: '01:28', text: 'Alright Marcus, thanks for hopping on. I wanted to walk you through Lyrola — what we\'re building and where we are.' },
  { speaker: 'Marcus', who: 'other', time: '01:44', text: 'Nice. And the recording status is always visible?' },
  { speaker: 'Jerry',  who: 'me',    time: '01:48', text: 'Yeah, bottom of the screen. You can navigate around the app while the meeting is being recorded and you always see the status.' },
  { speaker: 'Marcus', who: 'other', time: '01:58', text: 'Cool. Cool. What about privacy? Where does the audio go?' },
  { speaker: 'Jerry',  who: 'me',    time: '02:03', text: 'Local processing for transcription where possible, then encrypted upload for the summary step. We never store raw audio after the summary is generated.' },
];

window.MEETINGS = MEETINGS;
window.TRANSCRIPT = TRANSCRIPT;
