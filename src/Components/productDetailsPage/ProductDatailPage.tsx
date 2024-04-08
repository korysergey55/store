import { useEffect } from 'react';
import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { pathes } from '../../utils/pathes';

import ProductItemDetails from './productDeteils/ProductDetails';

import styles from './styles.module.scss';

const ProductDatailPage = observer(() => {
  const { ProductsStore } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!ProductsStore.productById) {
      navigate(pathes.products);
    }
  }, []);

  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        <ProductItemDetails />
      </div>
    </div>
  );
});

export default ProductDatailPage;
