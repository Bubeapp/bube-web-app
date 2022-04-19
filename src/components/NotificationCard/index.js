import React, { useState } from 'react';

import down_arrow_icon from '../../assets/arrow-down_icon.svg';

function NotificationCard({ title, body, datetime }) {
  const [hasRead, setHasRead] = useState(false);

  return (
    <div className="notification__notis" onClick={() => setHasRead(true)}>
      <div className="notification__noti">
        <div className={`notification__read ${!hasRead ? 'active' : ''}`}>&nbsp;</div>
        <div className="notification__message">
          <h4 className="notification__title">{title}</h4>
          <p>{body}</p>
        </div>
        <div className="notification__datetime">
          <time>{datetime}</time>
          <img src={down_arrow_icon} alt="down arrow icon" />
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
