import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import {Switch, Route, exact} from 'react-router-dom';
import Header from './components/Layout/Header';
import Landing from './pages/LandingPage';
import Launch from './components/Launch/Launch';
import Data from './pages/Data';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Footer from './components/Layout/Footer';


function App() {

  return (
     <Fragment>
       <Header/>
       <Switch>
       <Route exact path='/'>
       <Landing/>
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
      <Route path='/login'>
        <Login/>
      </Route>
      </Switch>
      <Footer/>
     </Fragment>
  );
}

export default App;
