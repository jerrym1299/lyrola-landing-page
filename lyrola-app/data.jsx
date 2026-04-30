// Mock data for Lyrola

const MEETINGS = [
  { id: 'm1', name: 'Acme — discovery call',     time: '10:30', live: true,  active: true },
  { id: 'm2', name: 'Weekly product sync',        time: 'Yesterday' },
  { id: 'm3', name: 'Design crit — onboarding',   time: 'Mon' },
  { id: 'm4', name: 'Northwind renewal',          time: 'Apr 24' },
  { id: 'm5', name: 'Eng standup',                time: 'Apr 23' },
  { id: 'm6', name: '1:1 with Priya',             time: 'Apr 22' },
  { id: 'm7', name: 'Q3 roadmap review',          time: 'Apr 21' },
  { id: 'm8', name: 'Customer interview — Linnea',time: 'Apr 18' },
  { id: 'm9', name: 'Investor catchup — Felix',   time: 'Apr 15' },
];

const TRANSCRIPT = [
  { speaker: 'You',    who: 'me',    time: '00:14', text: "Thanks for making time, Dana. What made you take the call?" },
  { speaker: 'Dana',   who: 'other', time: '00:22', text: "Honestly, our team is drowning in meetings. Everyone's writing the same notes five times and nobody can find anything afterwards." },
  { speaker: 'You',    who: 'me',    time: '00:31', text: "How many meetings a week for a PM on your team?" },
  { speaker: 'Dana',   who: 'other', time: '00:36', text: "Twenty, maybe twenty-five. Most are back-to-back. We tried two notetaker tools last year and gave up on both." },
  { speaker: 'You',    who: 'me',    time: '00:48', text: "What broke?" },
  { speaker: 'Dana',   who: 'other', time: '00:51', text: "First one needed a bot to join every call. Our customers hated it. The second one wouldn't run on Windows, so half the company was locked out." },
  { speaker: 'You',    who: 'me',    time: '01:04', text: "Lyrola listens through system audio — no bot. And ships Mac + Windows.", highlight: true },
  { speaker: 'Dana',   who: 'other', time: '01:18', text: "Okay, that's interesting. What about privacy? Our legal team will ask before I can." },
  { speaker: 'You',    who: 'me',    time: '01:24', text: "Transcription is local. Only encrypted summaries leave the machine; raw audio is discarded." },
  { speaker: 'Dana',   who: 'other', time: '01:38', text: "Good. And do my notes survive, or does the AI just rewrite everything in its own voice?" },
  { speaker: 'You',    who: 'me',    time: '01:44', text: "Your notes stay yours. Lyrola enhances — never overwrites." },
  { speaker: 'Dana',   who: 'other', time: '01:58', text: "Can I search across every meeting I've ever had? Last month I spent an hour looking for one number from a Q3 call." },
  { speaker: 'You',    who: 'me',    time: '02:06', text: "Yes — ask the chat panel anything across every meeting. It returns the exact quote and timestamp." },
  { speaker: 'Dana',   who: 'other', time: '02:18', text: "Alright. What does pricing look like for a team of forty?" },
  { speaker: 'You',    who: 'me',    time: '02:22', text: "I'll send a one-pager. Happy to start with a 10-seat pilot if that's easier." },
];

window.MEETINGS = MEETINGS;
window.TRANSCRIPT = TRANSCRIPT;
