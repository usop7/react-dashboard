import React from 'react';
import SideNav from './screens/SideNav';
import TopNav from './screens/TopNav';
import Footer from './screens/Footer';
import Home from './screens/Home';

function App() {
  return (
    <div>
      <div className='sideNav'>
        <SideNav />
      </div>

      <div className='main'>
        <TopNav />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
