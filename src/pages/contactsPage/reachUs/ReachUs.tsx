import { shopInformation } from '../../../utils/shopInformation';

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ReachUs = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wripper}>
      <div className={styles.reachUs}>
        <h3 className={styles.title}>{t('contactPage.reach_us')}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={styles.iconContainer}
              href={shopInformation.shopLocation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} color="#ffffff" size="2x" />
            </a>
            <div className={styles.linkContainer}>
              <a className={styles.link} href={shopInformation.shopLocation} target="_blank" rel="noopener noreferrer">
                {shopInformation.adress}
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.iconContainer} href={`tel:${shopInformation.phoneNumber}`}>
              <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} color="#ffffff" size="2x" />
            </a>
            <div className={styles.linkContainer}>
              <a className={styles.link} href={`tel:${shopInformation.phoneNumber}`}>
                {shopInformation.phoneNumber}
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.iconContainer} href={`mailto:${shopInformation.email}`}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} color="#ffffff" size="2x" />
            </a>
            <div className={styles.linkContainer}>
              <a className={styles.link} href={`mailto:${shopInformation.email}`}>
                {shopInformation.email}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReachUs;
