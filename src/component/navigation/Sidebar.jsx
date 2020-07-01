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
            <li>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="info" /></span>
              <a href="#/">Basic information</a>
            </li>
            <li>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="user-graduate" /></span>
              <a href="#/">Education and work</a>
            </li>
            <li>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="user-cog" /></span>
              <a href="#/">Settings</a>
            </li>
            <li>
              <span className={styles.nav_icon_default}><FontAwesomeIcon icon="key" /></span>
              <a href="#/">Change password</a>
            </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
}

// говорим что этот файл доступен для экспорта.
export default Sidebar;