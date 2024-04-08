import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pathes } from '../../../utils/pathes'

import { Button } from 'antd'
import styles from './styles.module.scss'

const AboutUs = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <h2 className={styles.subtitle}>{t('aboutUs.about_us')}</h2>
          <h3 className={styles.title}>{t('aboutUs.we_provide_you_the_best_experience')}</h3>
          <p className={styles.text}>
            {t('aboutUs.description')}
            <br />
            <br />
            {t('aboutUs.description-2')}
          </p>
          <Button className={styles.button} type="primary" size="large" onClick={() => navigate(pathes.products)}>
            {t('aboutUs.to_shop')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
