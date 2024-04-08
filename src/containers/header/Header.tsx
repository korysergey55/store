import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import { useNavigate, useLocation } from 'react-router-dom';
import { pathes } from '../../utils/pathes';

import NavList from './navList/NavList';
import Logo from '../Reuseble/Logo/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const Header = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenu) handlMobileMenu();
  }, [location.pathname]);

  const handlMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mobileMenuWripper}>
          <div className={styles.wripperLogo} onClick={() => navigate(pathes.home)}>
            <Logo />
            <h2 className={styles.title}> Good-Food</h2>
          </div>
          <FontAwesomeIcon
            className={styles.iconMenu}
            icon={faBars}
            color="white"
            size="2x"
            onClick={handlMobileMenu}
          />
        </div>
        <NavList mobileMenu={mobileMenu} handlMobileMenu={handlMobileMenu} />
      </div>
    </header>
  );
});

export default Header;
