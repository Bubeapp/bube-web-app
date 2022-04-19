import React from 'react';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/Button/ButtonBack';

function Settings() {
  return (
    <div className="settings">
      <div className="settings__container">
        <ButtonBack />

        <div className="settings__header">
          <h2>Settings</h2>
        </div>

        <div className="settings__card">
          <h3>Change Password</h3>
          <Button>Change</Button>
        </div>

        <div className="settings__card">
          <h3>Preferred Currency</h3>
          <Button>Change</Button>
        </div>

        <div className="settings__card">
          <h3>Notification sounds</h3>
          <Button>Change</Button>
        </div>

        <div className="settings__card">
          <h3>Version</h3>
          <Button>Change</Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
