import React from 'react';

function InboxChatList({ children }) {
  return (
    <div className="inbox__inner">
      <ul className="inbox__chat-list">{children}</ul>
    </div>
  );
}

export default InboxChatList;
