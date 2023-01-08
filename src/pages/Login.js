import { Fragment } from "react"
import History from "../components/History/History";
import Payload from '../components/Payload/Payload';
import InnerMain from "../components/Main/InnerMain";
import { useHistory, useLocation } from "react-router-dom";

const Login = ()=>{
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const payloadData = queryParams.get('tab') === 'Payload'; 
    const historyData = queryParams.get('tab') === 'History';

    const switchDataHandler = ()=>{
     history.push('/login?tab=' + (payloadData ? 'History' : 'Payload'));
    }

    return(
        <Fragment>
           <div className="inner-main"> 
            <InnerMain/>
            <button className="switch-data" onClick={switchDataHandler}>Click here to see {payloadData ? 'History' : 'Payload'} data</button>
             {historyData && <History/>}
             {payloadData && <Payload/>}
            </div> 
         </Fragment>
    )
}

export default Login;