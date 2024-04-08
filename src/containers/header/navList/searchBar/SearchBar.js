import { useEffect, useState } from 'react';
import { useStore } from '../../../storeMobx';
import { observer } from 'mobx-react';

import { useTranslation } from 'react-i18next';

import { Input } from 'antd';
const { Search } = Input;

const SearchBar = () => {
  const { AuthStore, ProductsStore } = useStore();
  const { t } = useTranslation();
  
    const [search, setSearchValue] = useState('');

  // useEffect(() => {
  //   setSearchValue('')
  //   ProductsStore.filterProducts('')
  // }, [location.pathname])

  // const onChangeSearch = evt => {
  //   const { value } = evt.target
  //   setSearchValue(value)
  //   if (value === '') {
  //     ProductsStore.filterProducts('')
  //   }
  //   ProductsStore.filterProducts(value)
  // }

  // const onSearch = (value) => {
  //   ProductsStore.filterProducts(value)
  //   setSearchValue(value)
  // }
  return {
     {/* <li className={styles.item}>
            <Search
              className={styles.search}
              placeholder={t("header.search_product")}
              value={search}
              onChange={evt => onChangeSearch(evt)}
              onSearch={onSearch}
              size="large"
              enterButton={t("header.search")}
            />
          </li> */}
  };
};

export default SearchBar;
