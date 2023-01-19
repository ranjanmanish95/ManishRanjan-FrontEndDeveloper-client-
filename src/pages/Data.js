import { Fragment } from "react"
import History from "../components/History/History";
import Payload from '../components/Payload/Payload';
import InnerMain from "../components/Main/InnerMain";
import { useHistory, useLocation } from "react-router-dom";

const Data = ()=>{
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const payloadData = queryParams.get('tab') === 'Payload'; 
    const historyData = queryParams.get('tab') === 'History';

    const switchDataHandler = ()=>{
        if(localStorage.getItem('loginToken')){
            history.push('/data?tab=' + (payloadData ? 'History' : 'Payload'));
        } else{
            alert('Login to navigate to history and payload data')
        }
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

export default Data;