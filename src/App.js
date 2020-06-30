import React from 'react';
// импортируем наши компоненты
import Header from './component/layout/header/Header.jsx';
import Sidebar from './component/navigation/Sidebar.jsx';
import Profile from './component/layout/profile/Profile.jsx';
import Footer from './component/layout/footer/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <div className="App-row">
          <Sidebar />
          <Profile />
        </div>
        <Footer />
      </div>
    </div>
  );
}


export default App;
