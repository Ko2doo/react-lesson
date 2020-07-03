// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// style's content.scss
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className={styles.sidebar}>
        <nav className={styles.nav_item}>
          <ul>
            <li className={styles.nav_li_item}>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="info" /></span>
              <a href="#/" className={styles.nav_link}>Basic information</a>
            </li>
            <li className={styles.nav_li_item}>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="user-graduate" /></span>
              <a href="#/" className={styles.nav_link}>Education and work</a>
            </li>
            <li className={styles.nav_li_item}>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="user-cog" /></span>
              <a href="#/" className={styles.nav_link}>Settings</a>
            </li>
            <li className={styles.nav_li_item}>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="key" /></span>
              <a href="#/" className={styles.nav_link}>Change password</a>
            </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
}

// говорим что этот файл доступен для экспорта.
export default Sidebar;