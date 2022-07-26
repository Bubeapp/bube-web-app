import React, { useContext, useEffect } from 'react';

import settings_icon from '../../../assets/setting-2_icon.svg';
import check_icon from '../../../assets/check_icon.svg';
import dots_icon from '../../../assets/dots-horizontal_icon.svg';

import ButtonBack from '../../../components/Button/ButtonBack';
import Checkbox from '../../../components/Checkbox';
import CustomTooltip from '../../../components/Tooltip';
import CustomToggle from '../../../components/ToggleButton';
import NotificationCard from '../../../components/NotificationCard';
import axios from '../../../util/axios';
import { AuthContext } from '../../../contexts/auth/authContext';

function Notification() {
  const { token } = useContext(AuthContext);
  useEffect(() => {
    try {
      const res = axios.get('/me/notifications', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  });
  return (
    <div className="notifications">
      <div className="notification__container">
        <ButtonBack />

        <div className="notification__header">
          <h2>Notifications</h2>
          <div className="notification__actions">
            <div className="notification__hide">
              <Checkbox label="Hide Notifications" />
            </div>

            <CustomTooltip
              className="notification__tooltip"
              title="Go to settings"
              icon={settings_icon}
            />
            <CustomTooltip
              className="notification__tooltip"
              title="Mark all as read"
              icon={check_icon}
            />

            <CustomToggle className="notification__toggle" icon={dots_icon}>
              <ul className="notification__list">
                <li className="notification__item">Clear all</li>
              </ul>
            </CustomToggle>
          </div>
        </div>

        <NotificationCard
          title="Hello Has Requested for your service."
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac."
          datetime="2022-03-11  11:22am"
        />

        <NotificationCard
          title="Hello Has Requested for your service."
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac."
          datetime="2022-03-11  11:22am"
        />
        <NotificationCard
          title="Hello Has Requested for your service."
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac."
          datetime="2022-03-11  11:22am"
        />

        <NotificationCard
          title="Hello Has Requested for your service."
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac."
          datetime="2022-03-11  11:22am"
        />

        <NotificationCard
          title="Hello Has Requested for your service."
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac."
          datetime="2022-03-11  11:22am"
        />
      </div>
    </div>
  );
}

export default Notification;
