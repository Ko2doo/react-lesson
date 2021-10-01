import React from 'react';
//import style's
import styles from './Header.module.scss';

//import components
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