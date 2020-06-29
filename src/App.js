import React from 'react';
// импортируем наши компоненты
import Header from './component/layout/Header';
import Sidebar from './component/navigation/Sidebar';
import Content from './component/layout/Content';
import Footer from './component/layout/Footer';


const App = () => {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <div className="App-row">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}


export default App;
