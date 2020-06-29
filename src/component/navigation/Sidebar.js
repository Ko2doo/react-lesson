// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className="Sidebar">
        <nav className="Sidebar-nav_item">
          <ul className="Sidebar-list_item">
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