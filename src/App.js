import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Main/Main'
import SearchForm from './components/Search/SearchForm';
import Launch from './components/Launch/Launch';
import Footer from './components/Layout/Footer';

function App() {
  return (
     <Fragment>
      <Header/>
      <Main/>
      <SearchForm/>
      <Launch/>
      <Footer/>
     </Fragment>
  );
}

export default App;
