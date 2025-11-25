import React from 'react';
import './NotificationAlert.css';

interface NotificationAlertPopupProps {
  message: string;
  subMessage?: string;
}

const NotificationAlert: React.FC<NotificationAlertPopupProps> = ({ message, subMessage }) => {
  return (
    <div className="alert-popup">
      <div className="alert-popup-content">
        <div className="alert-popup-title">{message}</div>
        {subMessage && <div className="alert-popup-subtitle">{subMessage}</div>}
      </div>
    </div>
  );
};

export default NotificationAlert;
