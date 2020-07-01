import React from 'react';
// импортируем наши компоненты
import Header from './component/layout/header/Header.jsx';
import Profile from './component/layout/profile/Profile.jsx';
import Footer from './component/layout/footer/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <Profile />
        <Footer />
      </div>
    </div>
  );
}


export default App;
