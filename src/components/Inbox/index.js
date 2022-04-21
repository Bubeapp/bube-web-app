import React from 'react';

import Button from '../Button';
import InboxChat from '../InboxChat';
import InboxChatList from '../InboxChatList';

import dp_01 from '../../assets/dp_01 33.png';
import send_icon from '../../assets/send_icon.svg';

function Inbox() {
  return (
    <div className="inbox">
      <div className="inbox__side">
        <h4>Messages</h4>
        <InboxChatList>
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            count={2}
          />

          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            count={2}
          />

          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            // count={2}
          />
          <InboxChat
            name="Ronald Richards"
            summary={'How is it going to work'}
            time={'12:45'}
            avatar={dp_01}
            count={2}
          />
        </InboxChatList>
      </div>
      <div className="inbox__main">
        <div className="inbox__messages">
          <div className="inbox__message inbox__message--sent">
            <p>
              Eleifend ridiculus dolor vulputate laoreet. Eu tincidunt tincidunt risus,
              eget consequat sed.
            </p>
            <time>Aug 8, 9:23pm</time>
          </div>
          <div className="inbox__message inbox__message--recieve">
            <p>
              Eleifend ridiculus dolor vulputate laoreet. Eu tincidunt tincidunt risus,
              eget consequat sed.
            </p>
            <time>Aug 8, 9:23pm</time>
          </div>

          <div className="inbox__message inbox__message--recieve">
            <p>
              Eleifend ridiculus dolor vulputate laoreet. Eu tincidunt tincidunt risus,
              eget consequat sed.
            </p>
            <time>Aug 8, 10:23pm</time>
          </div>

          <div className="inbox__message inbox__message--sent">
            <p>Eleifend ridiculus dolor vulputate laoreet.</p>
            <time>Aug 8, 10:23pm</time>
          </div>
        </div>
        <form className="inbox__write">
          <input
            className="inbox__input"
            type="text"
            placeholder="Write your message"
            id="message"
            name="message"
            multiple
            autoComplete="off"
          />
          {/* <InputField type="text" label="Write your message" /> */}
          <Button classname="btn btn--primary btn--rounded inbox__send-btn">
            <img src={send_icon} alt="Send message icon" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Inbox;
