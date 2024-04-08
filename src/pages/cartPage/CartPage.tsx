import { observer } from 'mobx-react';

import Cart from './cart/Cart';
import styles from './styles.module.scss';

const CartPage = observer(() => {
  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <Cart />
      </div>
    </div>
  );
});

export default CartPage;
