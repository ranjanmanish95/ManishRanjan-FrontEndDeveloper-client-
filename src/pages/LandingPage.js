import { Fragment } from "react"
import Main from '../components/Main/Main';
import Search from '../components/Search/Search';
import Launch from '../components/Launch/Launch';

const LandingPage = ()=>{
    return (
     <Fragment>
      <Main/>
      <Search/>
      <Launch/>
     </Fragment>
    )
}

export default LandingPage;