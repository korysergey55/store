import ContactInfo from './contactInfo/ContactInfo';
import MapComponent from '../../GoogleMap/MapComponent/MapComponent';
import ReachUs from './reachUs/ReachUs';

import styles from './styles.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <div className={styles.map}></div>
          {/* <MapComponent /> */}
          <ReachUs />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactsPage;
