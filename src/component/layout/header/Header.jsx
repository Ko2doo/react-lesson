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
        <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png" alt="my app logotype"/>
        <p className={styles.info_item}>
          Android Dev blog
          <FontAwesomeIcon icon="hamburger" />
        </p>
      </header>
    </React.Fragment>
  );
}

export default Header;