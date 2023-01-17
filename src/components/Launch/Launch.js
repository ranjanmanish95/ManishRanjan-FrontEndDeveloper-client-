import { Fragment } from 'react';
import classes from './Launch.module.css';
import AllLaunchList from './AllLaunchList';
import UpcomingLaunchList from './UpcomingLaunchList';
import { NavLink, useLocation } from 'react-router-dom';
import SuccessfullLaunchList from './SuccessfullLaunchList';
import FailedLaunchList from './FailedLaunchList';

const Launch =()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isAllLaunch = queryParams.get('tab') === 'all'
    const isUpcomingLaunch = queryParams.get('tab') === 'upcoming';
    const isSuccessfullLaunch = queryParams.get('tab') === 'successfull';
    const isFailedLaunch = queryParams.get('tab') === 'failed';
return(
    <Fragment>
        <div className='launch'>
        <h1 className={classes.heading}>Checkout the SpaceX upcoming, successful and failed launches</h1>
        <div className={classes.launchbuttondiv}>
            <NavLink className={classes.launchbutton} active={classes.active} to='/launches?tab=all'>All</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=upcoming'>Upcoming</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=successfull'>Successfull</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=failed'>Failed</NavLink>
        </div>
        {isAllLaunch && <AllLaunchList/>}
        {isUpcomingLaunch && <UpcomingLaunchList/>}
        {isSuccessfullLaunch && <SuccessfullLaunchList/>}
        {isFailedLaunch && <FailedLaunchList/>}
        </div>
    </Fragment>
)
}

export default Launch;