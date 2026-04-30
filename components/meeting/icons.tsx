import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

export const Icon = {
  Sidebar: (p: P) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="2" y="3" width="12" height="10" rx="2" />
      <line x1="6" y1="3" x2="6" y2="13" />
    </svg>
  ),
  Home: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M3 7l5-4 5 4v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" />
    </svg>
  ),
  Chat: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M3 4h10a1 1 0 011 1v6a1 1 0 01-1 1H6l-3 2V5a1 1 0 011-1z" />
    </svg>
  ),
  Calendar: (p: P) => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
      <line x1="2.5" y1="6.5" x2="13.5" y2="6.5" />
      <line x1="6" y1="2" x2="6" y2="5" />
      <line x1="10" y1="2" x2="10" y2="5" />
    </svg>
  ),
  Plus: (p: P) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <line x1="6" y1="2" x2="6" y2="10" />
      <line x1="2" y1="6" x2="10" y2="6" />
    </svg>
  ),
  Chevron: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <polyline points="4,6 8,10 12,6" />
    </svg>
  ),
  Sparkle: (p: P) => (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M8 2l1.4 4.6L14 8l-4.6 1.4L8 14l-1.4-4.6L2 8l4.6-1.4L8 2z" fill="currentColor" />
    </svg>
  ),
  Mic: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="6" y="2" width="4" height="8" rx="2" />
      <path d="M3.5 8a4.5 4.5 0 009 0M8 12.5v2" />
    </svg>
  ),
  TranscriptIcon: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="3" y="2.5" width="10" height="11" rx="1.5" />
      <line x1="5.5" y1="5.5" x2="10.5" y2="5.5" />
      <line x1="5.5" y1="8" x2="10.5" y2="8" />
      <line x1="5.5" y1="10.5" x2="9" y2="10.5" />
    </svg>
  ),
  Send: (p: P) => (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <line x1="8" y1="13" x2="8" y2="3" />
      <polyline points="4,7 8,3 12,7" />
    </svg>
  ),
  Search: (p: P) => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="7" cy="7" r="4" />
      <line x1="10" y1="10" x2="13" y2="13" />
    </svg>
  ),
  Close: (p: P) => (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <line x1="4" y1="4" x2="12" y2="12" />
      <line x1="12" y1="4" x2="4" y2="12" />
    </svg>
  ),
  Copy: (p: P) => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="5" y="5" width="8" height="9" rx="1.5" />
      <path d="M3 11V3a1 1 0 011-1h7" />
    </svg>
  ),
  Share: (p: P) => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M11 5l-3-3-3 3M8 2v9" />
      <path d="M3 10v3a1 1 0 001 1h8a1 1 0 001-1v-3" />
    </svg>
  ),
  More: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <circle cx="3.5" cy="8" r="1.2" />
      <circle cx="8" cy="8" r="1.2" />
      <circle cx="12.5" cy="8" r="1.2" />
    </svg>
  ),
  Folder: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M2 5a1 1 0 011-1h3l1.5 1.5H13a1 1 0 011 1V12a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" />
    </svg>
  ),
  FolderOpen: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M2 5a1 1 0 011-1h3l1.5 1.5H13a1 1 0 011 1v.5H2V5z" />
      <path d="M2 7h12l-1 5a1 1 0 01-1 1H3a1 1 0 01-1-1V7z" />
    </svg>
  ),
  File: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M4 2h6l3 3v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" />
      <path d="M10 2v3h3" />
    </svg>
  ),
  People: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="6" cy="6" r="2.2" />
      <path d="M2.5 13c0-2 1.6-3.4 3.5-3.4S9.5 11 9.5 13" />
      <circle cx="11" cy="6.5" r="1.7" />
      <path d="M10 9.6c2 0 3.5 1.3 3.5 3.4" />
    </svg>
  ),
};
