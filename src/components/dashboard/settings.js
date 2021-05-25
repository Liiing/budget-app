import '../../scss/dashboard/settings.scss';
import Logout from './Logout.js';
import { useState } from 'react';

// Simple settings function so set a class on active state
function Settings() {
  const [open,setOpen] = useState(false);

  function openSettings() {
    setOpen(!open);
  }

  return (
    <div className="settings">
      <div onClick={openSettings} className="settings-opener"></div>
      <div className={`settings-wrapper ${open ? "open" : "closed"}`}>
        <div className="settings-window">
          <Logout />
          <button onClick={() => setOpen(false)} className='close-settings'>X</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;