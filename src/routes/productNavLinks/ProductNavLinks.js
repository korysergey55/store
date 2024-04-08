import { NavLink } from 'react-router-dom';
import { productsRoutes } from '../categoryRoutesArr';
import styles from './styles.module.scss';

const ProductNavLinks = () => {
  return (
    <ul className={styles.list}>
      {productsRoutes.map(
        route =>
          route.isLink && (
            <li className={styles.item} key={route.path}>
              <NavLink
                to={'/products' + route.path}
                icon={route.icon}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                {route.icon}
                {route.name}
              </NavLink>
            </li>
          )
      )}
    </ul>
  );
};

export default ProductNavLinks;
