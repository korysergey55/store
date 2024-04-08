import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pathes } from '../../../utils/pathes'

import productImage1 from '../../../sourses/images/homePage/feachers/product-image-1.png'
import productImage2 from '../../../sourses/images/homePage/feachers/product-image-2.png'
import productImage3 from '../../../sourses/images/homePage/feachers/product-image-3.png'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Feachers = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={() => navigate(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>{t('feachers.european_brands_and_perfect_quality')}</h3>
            <button type="button" className={styles.btn}>
              {t('feachers.buy')}
              <FontAwesomeIcon icon={faArrowRight} className={styles.btn_icon} />
            </button>
          </div>
          <img className={styles.img} src={productImage1} alt="product image"></img>
        </li>
        <li className={`${styles.item} ${styles.orange}`} onClick={() => navigate(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>{t('feachers.we_work_directly_with_suppliers_from_europe')}</h3>
            <button type="button" className={styles.btn}>
              {t('feachers.buy')}
              <FontAwesomeIcon icon={faArrowRight} className={styles.btn_icon} />
            </button>
          </div>
          <img className={styles.img} src={productImage2} alt="product image"></img>
        </li>
        <li className={`${styles.item} ${styles.green}`} onClick={() => navigate(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>{t('feachers.the_highest_quality_of_delivered_products')}</h3>
            <button type="button" className={styles.btn}>
              {t('feachers.buy')}
              <FontAwesomeIcon icon={faArrowRight} className={styles.btn_icon} />
            </button>
          </div>
          <img className={styles.img} src={productImage3} alt="product image"></img>
        </li>
      </ul>
    </div>
  )
}

export default Feachers
