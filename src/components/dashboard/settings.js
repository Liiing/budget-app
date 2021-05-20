import '../../scss/dashboard/settings.scss';
import Logout from '../../components/Logout.js';
import { useState, useEffect } from 'react';

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