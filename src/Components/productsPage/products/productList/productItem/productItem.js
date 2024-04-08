import React, { useState, useEffect } from 'react';
import { useStore } from '../../../../../storeMobx';
import { observer } from 'mobx-react';

import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pathes } from '../../../../../utils/pathes';

import StarList from '../../../../../containers/Reuseble/starList/StarList';
import defaultPhoto from '../../../../../sourses/images/defaultPhoto.png';

import styles from './styles.module.scss';
import classnames from 'classnames';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductItem = observer(({ product }) => {
  const { ProductsStore } = useStore();
  const { favoriteItems } = ProductsStore;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const findFavorite = () => {
    return favoriteItems.find(item => {
      if (item === product?.id) return true;
      return false;
    });
  };
  const [activeItem, setActiveItem] = useState(findFavorite());

  useEffect(() => {
    if (location.pathname === '/favorite') setActiveItem(true);
  }, []);

  const bayNow = () => {
    ProductsStore.addToCart(product.id);
    navigate(pathes.cart);
  };

  const openDetails = () => {
    navigate({
      pathname: `/products/${product.category}/${product.id}`,
      state: { from: location.pathname },
    });
  };

  const setLike = () => {
    setActiveItem(!activeItem);
    if (!activeItem) {
      ProductsStore.setFavoriteItemIdAction(product.id);
    } else {
      ProductsStore.remuveFavoriteItemAction(product.id);
    }
  };

  return (
    <li className={styles.item}>
      {product && (
        <div className={styles.content}>
          {product.discount ? <p className={styles.discount}> - {product.discount} %</p> : null}
          <a
            className={classnames({
              [styles.like]: true,
              [styles.likeActive]: activeItem,
            })}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setLike();
            }}
            href=""
          >
            <FontAwesomeIcon className={styles.icon} icon={faHeart} size="lg" />
          </a>
          <div className={styles.imgWrapper} onClick={openDetails}>
            <img className={styles.img} src={product.image ? product.image : defaultPhoto} alt={product.name} />
          </div>
          <h3 className={styles.title}>{product.name}</h3>
          <StarList />
          <div className={styles.priceWripper}>
            <p className={styles.price}>
              {product.price} {t('productsPage.productItem.uan')}
            </p>
            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartPlus}
              size="lg"
              onClick={() => ProductsStore.addToCart(product.id)}
            />
          </div>
          <Button className={styles.btn} type={'primary'} size="middle" onClick={() => bayNow(product)}>
            {t('productsPage.productItem.buy')}
          </Button>
        </div>
      )}
    </li>
  );
});

export default ProductItem;
