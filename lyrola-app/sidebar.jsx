// Sidebar — folders & spaces

const Sidebar = ({ activeId, onSelect, meetings }) => {
  const [sharedOpen, setSharedOpen] = React.useState(true);
  const [spacesOpen, setSpacesOpen] = React.useState(true);
  const [teamOpen, setTeamOpen] = React.useState(true);
  const [granolaOpen, setGranolaOpen] = React.useState(true);

  return (
    <aside className="sidebar">
      <div className="sidebar-scroll">
        <div className="sidebar-top">
        <div className="brand">
          <div className="brand-mark"></div>
          <div className="brand-name">Lyrola</div>
        </div>
        <div className="tree-item active">
          <Icon.Home />
          <span className="label">Home</span>
        </div>
        <div className="tree-item">
          <Icon.People />
          <span className="label">Shared with me</span>
        </div>
        <div className="tree-item">
          <Icon.Chat />
          <span className="label">Chat</span>
        </div>
      </div>

      <div className="section-label">
        <span>Shared</span>
        <div className="add" title="New folder"><Icon.Plus /></div>
      </div>
      <div style={{padding: '0 8px'}}>
        <div className="tree-item" onClick={() => setGranolaOpen(o => !o)}>
          {granolaOpen ? <Icon.FolderOpen /> : <Icon.Folder />}
          <span className="label">Granola internal c…</span>
        </div>
        {granolaOpen && (
          <div className="tree-item indent">
            <Icon.File />
            <span className="label">Transcription l…</span>
          </div>
        )}
      </div>

      <div className="section-label">
        <span>Spaces</span>
        <div className="add" title="New space"><Icon.Plus /></div>
      </div>
      <div className="meeting-list">
        <div className="tree-item">
          <Icon.Folder />
          <span className="label">My notes</span>
        </div>
        <div className="tree-item" onClick={() => setTeamOpen(o => !o)}>
          <span className="tree-dot" style={{background: 'var(--purple-400)'}}></span>
          <span className="label">Team</span>
        </div>
        {teamOpen && (
          <>
            <div className="tree-item indent">
              <span className="tree-dot" style={{background: 'oklch(0.78 0.13 165)'}}></span>
              <span className="label">Client calls</span>
            </div>
            <div className="tree-item indent">
              <span className="tree-dot" style={{background: 'oklch(0.80 0.13 75)'}}></span>
              <span className="label">Team meetings</span>
            </div>
          </>
        )}

        <div className="section-label" style={{paddingLeft: 12, paddingTop: 14}}>
          <span>Recent meetings</span>
        </div>
        {meetings.slice(0, 6).map(m => (
          <div
            key={m.id}
            className={`meeting-item ${m.id === activeId ? 'active' : ''}`}
          >
            <span className={`meeting-dot ${m.live ? 'live' : ''}`}></span>
            <span className="meeting-name">{m.name}</span>
            <span className="meeting-time">{m.time}</span>
          </div>
        ))}
      </div>
      </div>

      <div className="user-row">
        <div className="avatar">J</div>
        <div className="user-email">jerry@lyrola.app</div>
        <Icon.More />
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
