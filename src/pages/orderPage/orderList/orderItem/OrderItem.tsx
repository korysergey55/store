import { useStore } from '../../../../storeMobx';
import { observer } from 'mobx-react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import sprite from '../../../../sourses/icons/productsSprite.svg';

interface IProps {
  product: any
}

const OrderItem = observer(({ product }: IProps) => {
  const navigate = useNavigate();
  const { ProductsStore } = useStore();
  const { name, price, category, id, image, qantity } = product;
  const { t } = useTranslation();

  const openDetails = () => {
    navigate(`/products/${category}/${id}`);
  };
  const removeFromCart = (product: any) => {
    ProductsStore.remuveFromCart(product.id);
  };

  return (
    <li className={styles.orderItem}>
      <div className={styles.imgWripper}>
        <img className={styles.img} src={image} alt="productImg" onClick={openDetails} />
      </div>
      <div className={styles.wripper}>
        <h2 className={styles.title} onClick={openDetails}>
          {name}
        </h2>
        <p className={styles.qantity}>
          {qantity} {t('orderPage.orderItem.pcs')}
        </p>
        <span className={styles.price}>
          {' '}
          {price} {t('orderPage.orderItem.uan')}
        </span>
      </div>
      <div className={styles.iconBinContainer} onClick={() => removeFromCart(product)}>
        <svg className={styles.iconBin}>
          <use href={sprite + '#icon-bin'} />
        </svg>
      </div>
    </li>
  );
});

export default OrderItem;
