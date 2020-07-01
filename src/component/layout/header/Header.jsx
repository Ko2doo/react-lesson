// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import style's
import styles from './Header.module.scss';

// компонента (компонент)
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <span className={styles.logo}>
          <FontAwesomeIcon icon="poo" />
        </span>
        <p className={styles.info_item}>
          Shiiit blog
        </p>
      </header>
    </React.Fragment>
  );
}

export default Header;