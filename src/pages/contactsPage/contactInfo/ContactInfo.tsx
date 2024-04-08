import { useTranslation } from 'react-i18next';
import { shopInformation } from '../../../utils/shopInformation';

import styles from './styles.module.scss';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.contactInfo}>
      <div className={styles.wripper}>
        <div className={styles.scheduleBox}>
          <p className={styles.subtitle}>{t('contactPage.contactInfo.schedule')}</p>
          <p className={styles.text}>{t('contactPage.contactInfo.mon_fri')}: 8:00 - 20:00</p>
          <p className={styles.text}>{t('contactPage.contactInfo.sat')}: 8:00 - 16:00</p>
          <p className={styles.text}>
            {t('contactPage.contactInfo.sun')}: {t('contactPage.contactInfo.day_off')}
          </p>
        </div>
        <div className={styles.phonesBox}>
          <p className={styles.subtitle}>{t('contactPage.contactInfo.phones')}:</p>
          <a className={styles.link} href={`tel:${shopInformation.phoneNumber}`} rel="noopener noreferrer">
            +380 68 397 3333
          </a>
          <a className={styles.link} href={`tel:${shopInformation.phoneNumber}`} rel="noopener noreferrer">
            +380 63 056 0488
          </a>
        </div>
        <div className={styles.emailBox}>
          <p className={styles.subtitle}>{t('contactPage.contactInfo.email')}</p>
          <a
            className={`${styles.link} ${styles.email}`}
            href={`mailto:${shopInformation.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shopInformation.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
