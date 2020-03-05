import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Home from './screens/Home';
import Newsboard from './screens/Newsboard';
import Setting from './screens/Setting';
import SavedNews from './screens/SavedNews';

function App() {
  return (
    <div>
      <div className='sideNav'>
        <SideNav />
      </div>

      <div className='topNav'>
        <TopNav />
      </div>

      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
            exact path='/politics' 
            render={(props) => <Newsboard {...props} section='politics' />} 
          />
          <Route 
            exact path='/debates' 
            render={(props) => <Newsboard {...props} section='debates' />} 
          />
          <Route 
            exact path='/business' 
            render={(props) => <Newsboard {...props} section='business' />} 
          />
          <Route 
            exact path='/economy' 
            render={(props) => <Newsboard {...props} section='economy' />} 
          />
          <Route 
            exact path='/finance' 
            render={(props) => <Newsboard {...props} section='finance' />} 
          />
          <Route path='/setting' component={Setting} />
          <Route path='/saved' component={SavedNews} />
        </Switch>
      </div>

      <div className='footer'>
        <Footer />
      </div>

      <ScrollUpButton />

    </div>
  );
}

export default App;
