// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';
// import style from '../styles/blocks/Header.module.scss';

// компонента (компонент)
const Header = () => {
  return (
    <React.Fragment>
      {/* <header className={style.header}> */}
      <header className="Header">
        <img className="Header-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png" alt="my app logotype"/>
        <p className="Header-info_item">
          Android Dev blog
        </p>
      </header>
    </React.Fragment>
  );
}

export default Header;