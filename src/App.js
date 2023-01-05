import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Main/Main'
import SearchForm from './components/Search/SearchForm';
import DataGrid from './components/DataGrid/datagrid';
import Footer from './components/Layout/Footer';

function App() {
  return (
     <Fragment>
      <Header/>
      <Main/>
      <SearchForm/>
      <DataGrid/>
      <Footer/>
     </Fragment>
  );
}

export default App;
