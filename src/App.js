import React from 'react';
// импортируем наши компоненты
import Header from './component/layout/header/Header.jsx';
import PageConstruct from './component/page-construct/PageConstruct.jsx';
import Footer from './component/layout/footer/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <main className="wrapp-page">
          <PageConstruct />
        </main>
      </div>
      <Footer />
    </div>
  );
}


export default App;
