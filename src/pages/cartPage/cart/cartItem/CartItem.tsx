import { useState } from 'react';
import { useStore } from '../../../../storeMobx';
import { observer } from 'mobx-react';

import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import sprite from '../../../../sourses/icons/productsSprite.svg';

const CartListItem = observer(({ product }: any) => {
  const { ProductsStore } = useStore();
  const { id, category, name, price, image, discount, weight, qantity } = product;
  const navigate = useNavigate();
  const [counter, setCounter] = useState<number>(qantity);

  const qantityProduct = (evt: React.MouseEvent<HTMLElement>) => {
    const { dataset }: any = evt.target;

    if (dataset.name === 'increment') {
      setCounter(prev => prev + 1);
      ProductsStore.setQantityCartProducts(id, 'increment');
      ProductsStore.addToCart(id, false);
    }
    if (dataset.name === 'decrement') {
      if (counter > 1) {
        setCounter(prev => prev - 1);
        ProductsStore.setQantityCartProducts(id, 'decrement');
        ProductsStore.remuveItemFromCart(id);
      }
    }
    ProductsStore.setTotalPrice();
  };

  const removeFromCart = (product: any) => {
    ProductsStore.remuveFromCart(product.id);
  };

  return (
    <li className={styles.item}>
      {discount ? <p className={styles.discount}> - {discount} %</p> : null}
      <img
        className={styles.img}
        src={image}
        alt="productImg"
        onClick={() => navigate(`/products/${category}/${id}`)}
      />
      <div className={styles.wripper}>
        <h2 className={styles.title} onClick={() => navigate(`/products/${category}/${id}`)}>
          {name}
        </h2>
        <h2 className={styles.text}> {weight}</h2>
        <p className={styles.price}>
          {price} uan
          {discount ? <span className={styles.sale}> {price + price * Number(discount / 100)} uan</span> : null}
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn} type="button" data-name="decrement" onClick={qantityProduct}>
            {'-'}
          </button>
          <button className={styles.value}>{counter}</button>
          <button className={styles.btn} type="button" data-name="increment" onClick={qantityProduct}>
            {'+'}
          </button>
        </div>

        <div className={styles.iconBinContainer} onClick={() => removeFromCart(product)}>
          <svg className={styles.iconBin}>
            <use href={sprite + '#icon-bin'} />
          </svg>
        </div>
      </div>
    </li>
  );
});

export default CartListItem;
