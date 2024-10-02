import React, { useEffect, useState } from "react";
import { formatElapsedTime } from "../../utils/utils";
import "./Activities.css";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import UserAvatar from "../UserAvatar";
import { ActivityData, ActivityProps, initialActivities } from "./utils";

/*
 * Responsible for fetching all the activities data from the backend
 * and rendering each individual activity.
 *
 *
 * https://www.figma.com/design/XBEbJlKyCR4kdwlhJvzAUS/UI-Developer-Assignment?node-id=2-10420&node-type=frame&t=HXKH7ZW9rGb62fvp-11
 */
// const fetchActivities = async (): Promise<ActivityData[]> => {
//   return new Promise((resolve) => {
//     resolve(initialActivities);
//   });
// };

const Activities: React.FC = () => {
  const [activities, setActivities] =
    useState<ActivityData[]>(initialActivities);
  const [newActivityTimestamp, setNewActivityTimestamp] = useState<
    string | null
  >(null);
  /**
   * isActivityAdded is used to add additional classNames to new activities,
   * this may be eliminated by adding classnames directlt to new packtes of data
   * comming from a websocket or debounced fetch calls
   */
  const [isActivityAdded, setIsActivityAdded] = useState(false);

  const addActivity = () => {
    if (!isActivityAdded) {
      const newActivity: ActivityData = {
        title: "New project onboarded",
        timestamp: new Date().toISOString(),
        src: "/images/ContactImages/KorayOkumus.png",
      };
      setActivities([newActivity, ...activities]);
      setNewActivityTimestamp(newActivity.timestamp);
      setIsActivityAdded(true);
    }
  };

  useEffect(() => {
    if (!isActivityAdded) {
      const timer = setTimeout(() => {
        addActivity();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [activities, isActivityAdded]);

  useEffect(() => {
    if (newActivityTimestamp) {
      const timer = setTimeout(() => {
        setNewActivityTimestamp(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [newActivityTimestamp]);

  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="activities-heading"
    >
      <header className="info-group-header">
        <h2 id="activities-heading">Activities</h2>
      </header>
      <AnimatePresence initial={false}>
        <ul role="list" className="info-group-list">
          {activities.map((activity) => (
            <Activity
              key={activity.timestamp}
              title={activity.title}
              timestamp={activity.timestamp}
              src={activity.src}
              isNew={activity.timestamp === newActivityTimestamp}
            />
          ))}
        </ul>
      </AnimatePresence>
    </section>
  );
};

/**
 * Renders each individual Activity with a subtle enter animation using Framer Motion,
 * @param title the title of the activity
 * @param timestamp the activity timestamp
 * @param src profileUrl for the contact
 * @param isNew to identify new Notifications
 */
const Activity: React.FC<ActivityProps> = ({
  title,
  timestamp,
  src,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ height: 0, opacity: 0, scale: 0.5 }}
      animate={{ height: 46, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      className="activity-wrapper"
      role="listitem"
      aria-label={`Activity: ${title}, ${formatElapsedTime(timestamp)}`}
      onClick={() =>
        toast("Activity Expanded. Feature under implementation...")
      }
    >
      <div className="activity-avatar-wrapper">
        <UserAvatar src={src} username="Not Available" />
        <span className="activity-bar" aria-hidden="true"></span>
      </div>
      <div className="activity-details">
        <p
          className={`activity-title ellipsis-clip ${
            isNew ? "shimmer-effect" : ""
          }`}
        >
          {title}
        </p>
        <p className="activity-timestamp">{formatElapsedTime(timestamp)}</p>
      </div>
    </motion.li>
  );
};

export default Activities;
