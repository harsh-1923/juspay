import React, { useEffect, useState } from "react";
import { formatElapsedTime } from "../../utils/utils";

import "./Activities.css";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import UserAvatar from "../UserAvatar";

interface ActivityData {
  title: string;
  timestamp: string;
  src: string;
}

interface ActivityProps {
  title: string;
  timestamp: string;
  src: string;
  isNew: boolean; // New prop to indicate if the activity is new
}

const initialActivities: ActivityData[] = [
  {
    title: "Released a new version",
    timestamp: new Date().toISOString(),
    src: "/images/ContactImages/DrewCano.png",
  },
  {
    title: "Fixed a critical bug",
    timestamp: "2024-09-22T09:30:15.000Z",
    src: "/images/ContactImages/AndiLane.png",
  },
  {
    title: "Deployed to production",
    timestamp: "2024-09-18T07:45:00.000Z",
    src: "/images/ContactImages/KateMorrison.png",
  },
  {
    title: "Code review completed",
    timestamp: "2024-08-29T20:20:12.000Z",
    src: "/images/ContactImages/OrlandoDiggs.png",
  },
  {
    title: "Merged PR into main",
    timestamp: "2024-07-01T10:12:30.000Z",
    src: "/images/ContactImages/KorayOkumus.png",
  },
];

const Activities: React.FC = () => {
  const [activities, setActivities] =
    useState<ActivityData[]>(initialActivities);
  const [newActivityTimestamp, setNewActivityTimestamp] = useState<
    string | null
  >(null);

  const addActivity = () => {
    const newActivity: ActivityData = {
      title: "New project onboarded",
      timestamp: new Date().toISOString(),
      src: "/images/ContactImages/KorayOkumus.png",
    };
    setActivities([newActivity, ...activities]);
    setNewActivityTimestamp(newActivity.timestamp);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      addActivity();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
              isNew={activity.timestamp === newActivityTimestamp} // Pass isNew prop
            />
          ))}
        </ul>
      </AnimatePresence>
    </section>
  );
};

const Activity: React.FC<ActivityProps> = ({
  title,
  timestamp,
  src,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ scale: 0.9, opacity: 0, y: -10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0 }}
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
        {/* Add the shimmer-effect class if isNew is true */}
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
