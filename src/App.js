import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideNav from './screens/SideNav';
import TopNav from './screens/TopNav';
import Footer from './screens/Footer';
import Home from './screens/Home';
import Menu1 from './screens/Menu1';
import Menu2 from './screens/Menu2';

function App() {
  return (
    <div>
      <div className='sideNav'>
        <SideNav />
      </div>

      <TopNav />

      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/menu1' component={Menu1} />
          <Route exact path='/menu2' component={Menu2} />
        </Switch>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
