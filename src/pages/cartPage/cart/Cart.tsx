import { useEffect } from 'react';
import { useStore } from '../../../storeMobx';
import { observer } from 'mobx-react';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { pathes } from '../../../utils/pathes';

import CartItem from './cartItem/CartItem';
import styles from './styles.module.scss';
import { Empty } from 'antd';

const Cart = observer(() => {
  const { ProductsStore } = useStore();
  const { cart, products, cartProducts, totalPrice } = ProductsStore;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const findProductCart = () => {
    const cartArr: any = [];
    const unq = Array.from(new Set(cart));
    unq.forEach(key => {
      const item = products.find(v => v.id === key);
      if (item) {
        cartArr.push({
          ...item,
          qantity: cart.filter((product: any) => product === item.id).length,
        });
      }
    });
    return cartArr;
  };

  useEffect(() => {
    ProductsStore.setCartProducts(findProductCart());
  }, [cart, products]);

  useEffect(() => {
    ProductsStore.setTotalPrice();
  }, [cartProducts, location.pathname]);


  return (
    <div className={styles.container}>
      {cartProducts.length ? (
        <div className={styles.cart}>
          <h2 className={styles.title}>{t('cart.cart')}</h2>
          <ul className={styles.list}>
            {cartProducts.map((product: any) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice}>
              {totalPrice} {t('cart.uan')}
            </h2>
            <button className={styles.orderButton} type="button" onClick={() => navigate(pathes.order)}>
              {t('cart.make_order')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className={styles.titleEmpty}>{t('cart.cart_is_empty')}!</h2>
          <Empty description={''} />
        </>
      )}
    </div>
  );
});
export default Cart;
