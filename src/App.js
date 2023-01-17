import { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Landing from './pages/LandingPage';
import Launch from './components/Launch/Launch';
import Data from './pages/Data';
import ContactUs from './pages/ContactUs';
import Footer from './components/Layout/Footer';
import Capsules from './pages/Capsules';

function App() {

  return (
     <Fragment>
       <Header/>
       <Switch>
       <Route exact path='/'>
       <Landing/>
      </Route>
      <Route  path='/capsules'>
       <Capsules/>
      </Route>
      <Route exact path='/launches'>
       <Launch/>
      </Route>
      <Route  path='/data'>
       <Data/>
      </Route>
      <Route  path='/contactus'>
       <ContactUs/>
      </Route>
      {/* <Route path='/login'>
        <Login/>
      </Route> */}
      </Switch>
      <Footer/>
     </Fragment>
  );
}

export default App;
