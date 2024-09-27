import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import "./InfoPannel.css";

const InfoPannel = () => {
  return (
    <div className="infopannel-wrapper">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default InfoPannel;
