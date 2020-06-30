// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

// style's content.scss
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className={styles.sidebar}>
        <nav className={styles.nav_item}>
          <ul>
            <li>
              <a href="#/">Profile</a>
            </li>
            <li>
              <a href="#/">Messages</a>
            </li>
            <li>
              <a href="#/">News</a>
            </li>
            <li>
              <a href="#/">Music</a>
            </li>
            <li>
              <a href="#/">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
}

// говорим что этот файл доступен для экспорта.
export default Sidebar;