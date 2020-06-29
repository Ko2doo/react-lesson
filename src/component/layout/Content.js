// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

// компонента (компонент)
const Content = () => {
  return (
    <React.Fragment>
      <main className="Content">
        <section className="Content-items">
          <img src="./images/nice.jpg" alt="landscape"/>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Content;