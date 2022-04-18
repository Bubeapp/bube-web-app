import React from 'react';

import circle_left_icon from '../../../assets/arrow-circle-left_icon.svg';
import Button from '../../../components/Button';

function Notification() {
  return (
    <div className="notifications">
      <div className="notification__container">
        <Button classname="dashboard__request-btn back-btn btn btn--ghost">
          <img src={circle_left_icon} alt="Plus icon" />
          <span>Back</span>
        </Button>

        <div className="notification__header">
          <h2>Notifications</h2>
          <div className="notification__actions">
            <div className="notification__hide">
              <input type="checkbox" id="hide-notification" name="hide-notification" />
              <label htmlFor="hide-notification">Hide notifications</label>
            </div>

            <Button></Button>
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
