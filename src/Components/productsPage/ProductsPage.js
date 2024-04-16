import { useEffect, useState } from 'react';
import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';

import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Filters from '../productsPage/filters/Filters';
import SubscribeForm from '../../containers/Reuseble/subscribeForm/SubscribeForm.tsx';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'antd';
const { Search } = Input;

const ProductsPage = observer(() => {
  const { ProductsStore } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearchValue] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (location.pathname === '/products') navigate('/products/all');
  }, [location.pathname]);

  useEffect(() => {
    window.scroll(0, 350);
  }, []);

  useEffect(() => {
    setSearchValue('');
    setShowFilters(false);
    ProductsStore.filterProducts('');
    ProductsStore.resetFilters();
  }, [location.pathname]);

  const onChangeSearch = evt => {
    const { value } = evt.target;
    setSearchValue(value);
    ProductsStore.filterProducts(value);
  };

  const onSearch = value => {
    setSearchValue(value);
    ProductsStore.filterProducts(value);
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <h2 className={styles.title} onClick={() => navigate('products/all')}>
          {t('productsPage.category_of_goods')}
        </h2>

        {location.pathname !== '/products/all' && (
          <div className={styles.filterWripper}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faFilter}
              size="2x"
              color="#1890ff"
              onClick={() => setShowFilters(!showFilters)}
            />
            <Search
              className={styles.search}
              placeholder={t('productsPage.search_product')}
              value={search}
              onChange={onChangeSearch}
              onSearch={onSearch}
              size="large"
              enterButton={t('productsPage.search')}
            />
          </div>
        )}
        <div className={styles.wripper}>{showFilters && <Filters />}</div>
        <Outlet />
        <SubscribeForm />
      </div>
    </div>
  );
});

export default ProductsPage;
