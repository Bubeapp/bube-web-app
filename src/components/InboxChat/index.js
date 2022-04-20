import React from 'react';

function InboxChat({ name, summary, time, count, avatar }) {
  return (
    <li className="inbox__chat">
      <img src={avatar} alt="DP" />
      <div className="inbox__chat-info">
        <h6>{name}</h6>
        <span>{summary}</span>
      </div>
      <div className="inbox__metadata">
        <time>{`${time}pm`}</time>
        {count && <span className="inbox__chat-count">{count}</span>}
      </div>
    </li>
  );
}

export default InboxChat;
