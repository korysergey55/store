import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pathes } from '../../../utils/pathes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';
import BunnerImg from '../../../sourses/images/homePage/baner/ImgBaner.png';

const Baner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.baner} onClick={() => navigate(pathes.products)}>
      <div className={styles.leftSide}>
        <p className={styles.text}>50%</p>
        <span className={styles.span}>{t('home.baner.sold')}</span>{' '}
        <button className={styles.button} onClick={() => navigate(pathes.products)}>
          {t('home.baner.buy')}
          <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow} />
        </button>
      </div>
      <h2 className={styles.title}> {t('home.baner.popular_and_trending_products')}</h2>
      <img className={styles.img} src={BunnerImg} alt="Bunner" onClick={() => navigate(pathes.products)} />
    </div>
  );
};

export default Baner;
