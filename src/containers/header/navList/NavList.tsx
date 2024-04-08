import { useStore } from '../../../storeMobx';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

import { pathes } from '../../../utils/pathes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Select } from 'antd';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  mobileMenu: boolean,
  handlMobileMenu: () => void
}

const NavList = observer(({ mobileMenu, handlMobileMenu }: IProps) => {
  const { AuthStore, ProductsStore } = useStore();
  const { t } = useTranslation();
  const { Option } = Select;

  const onChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    handlMobileMenu();
  };

  return (
    <ul
      className={classnames({
        [styles.navList]: true,
        [styles.navListMobile]: !mobileMenu,
      })}
    >
      <li className={styles.item}>
        <NavLink to={pathes.home} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
          {t('header.main_page')}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to={pathes.products} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
          {t('header.goods')}
        </NavLink>
      </li>

      <li className={styles.item}>
        <NavLink to={pathes.contacts} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
          {t('header.contacts')}
        </NavLink>
      </li>

      {AuthStore.token && (
        <li className={styles.item}>
          <NavLink to={pathes.admin} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
            {t('header.admin_panel')}
          </NavLink>
        </li>
      )}

      <li className={styles.item}>
        <ul
          className={classnames({
            [styles.navListSotial]: true,
            [styles.navListSotialMobile]: !mobileMenu,
          })}
        >
          {AuthStore.token ? (
            <li className={styles.item}>
              <NavLink
                onClick={() => AuthStore.logoutUserAction()}
                to={pathes.home}
                className={navData => (navData.isActive ? styles.linkActive : styles.link)}
              >
                <FontAwesomeIcon className={styles.icon} icon={faSignOutAlt} color="white" size="1x" />
              </NavLink>
            </li>
          ) : (
            <li className={styles.item}>
              <NavLink to={pathes.login} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
                <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
              </NavLink>
            </li>
          )}

          <li className={styles.item}>
            <NavLink to={pathes.favorite} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
              <FontAwesomeIcon className="icon" icon={faHeart} size="1x" />
              <span className={styles.cartLength}>
                {ProductsStore.favoriteItems.length > 0 ? ProductsStore.favoriteItems.length : null}
              </span>
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to={pathes.cart} className={navData => (navData.isActive ? styles.linkActive : styles.link)}>
              <FontAwesomeIcon className="icon" icon={faCartPlus} size="1x" />
              <span className={styles.cartLength}>
                {ProductsStore.cart.length > 0 ? ProductsStore.cart.length : null}
              </span>
            </NavLink>
          </li>

          <li className={styles.item}>
            <Select className={styles.select} defaultValue="en" size="small" onChange={onChangeLanguage}>
              <Option value="en">en</Option>
              <Option value="ua">ua</Option>
            </Select>
          </li>
        </ul>
      </li>
    </ul>
  );
});

export default NavList;
