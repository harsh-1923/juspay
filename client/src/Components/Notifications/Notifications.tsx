import React, { useEffect, useState } from "react";
import { formatElapsedTime } from "../../utils/utils";
import "./Notifications.css";
import { Bug, Subscribe, User } from "../IconSet";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface NotificationData {
  title: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface NotificationProps {
  icon: React.ReactNode;
  timestamp: string;
  title: string;
  isNew: boolean; // New prop to indicate if the notification is new
}

const initialNotifications: NotificationData[] = [
  {
    title: "You have a bug that needs resolution",
    timestamp: new Date().toISOString(),
    icon: <Bug />,
  },
  {
    title: "New user registered",
    timestamp: "2024-09-22T09:30:15.000Z",
    icon: <User />,
  },
  {
    title: "Andi Lane subscribed to you",
    timestamp: "2024-09-18T07:45:00.000Z",
    icon: <Subscribe />,
  },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] =
    useState<NotificationData[]>(initialNotifications);
  const [newNotificationTimestamp, setNewNotificationTimestamp] = useState<
    string | null
  >(null);

  const addNotification = () => {
    const newActivity: NotificationData = {
      title: "Natali subscribed to you",
      timestamp: new Date().toISOString(),
      icon: <Subscribe />,
    };
    setNotifications([newActivity, ...notifications]);
    setNewNotificationTimestamp(newActivity.timestamp);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (newNotificationTimestamp) {
      const timer = setTimeout(() => {
        setNewNotificationTimestamp(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [newNotificationTimestamp]);

  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="notifications-heading"
    >
      <header className="info-group-header">
        <h2 id="notifications-heading ">Notifications</h2>
      </header>
      <AnimatePresence initial={false} mode="popLayout">
        <ul role="list" className="info-group-list">
          {notifications.map((notification) => (
            <Notification
              key={notification.timestamp}
              title={notification.title}
              icon={notification.icon}
              timestamp={notification.timestamp}
              isNew={notification.timestamp === newNotificationTimestamp} // Pass isNew prop
            />
          ))}
        </ul>
      </AnimatePresence>
    </section>
  );
};

const Notification: React.FC<NotificationProps> = ({
  icon,
  timestamp,
  title,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ scale: 0.9, opacity: 0, y: -10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0 }}
      className="notification-wrapper"
      role="listitem"
      onClick={() =>
        toast("Notification Expanded. Feature under implementation...")
      }
    >
      <div className="notification-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <div className="notification-details">
        {/* Add the shimmer-effect class if isNew is true */}
        <p
          className={`notification-title ellipsis-clip ${
            isNew ? "shimmer-effect" : ""
          }`}
        >
          {title}
        </p>
        <p className="notification-timestamp">{formatElapsedTime(timestamp)}</p>
      </div>
    </motion.li>
  );
};

export default Notifications;
