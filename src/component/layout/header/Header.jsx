import React from 'react';

//import components

//import style's
import styles from './Header.module.scss';
import PersonalInfo from '../../personal-info/PersonalInfo';

// component
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.headerCover}>
          <div className={styles.wrapper}>
            <PersonalInfo />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;